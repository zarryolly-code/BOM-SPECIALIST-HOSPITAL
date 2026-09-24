from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import redirect

from .models import Appointment
from .gmail_service import create_google_flow, send_email


APPOINTMENT_NOTIFICATION_EMAIL = "riyadsolihn@gmail.com"


@csrf_exempt
def create_appointment(request):

    if request.method != "POST":
        return JsonResponse(
            {"error": "Only POST requests are allowed."},
            status=405
        )

    try:
        data = json.loads(request.body)

        appointment = Appointment.objects.create(
            name=data.get("name"),
            phone=data.get("phone"),
            service=data.get("service"),
            preferred_date=data.get("preferred_date"),
            message=data.get("message", "")
        )

        email_body = f"""
New appointment request received for B.O.M Specialist Hospital.

Patient Name: {appointment.name}
Phone: {appointment.phone}
Service: {appointment.service}
Preferred Date: {appointment.preferred_date}
Message: {appointment.message or "No additional message provided."}

Appointment ID: {appointment.id}
"""

        send_email(
            APPOINTMENT_NOTIFICATION_EMAIL,
            "New Appointment Request - B.O.M Specialist Hospital",
            email_body,
        )

        return JsonResponse(
            {
                "message": "Appointment request received successfully.",
                "id": appointment.id
            },
            status=201
        )

    except Exception:
        return JsonResponse(
            {"error": "Unable to create appointment."},
            status=400
        )


def google_auth(request):
    flow = create_google_flow()

    authorization_url, state = flow.authorization_url(
        access_type="offline",
        prompt="consent",
    )

    request.session["google_oauth_state"] = state
    request.session["google_oauth_code_verifier"] = flow.code_verifier

    return redirect(authorization_url)


def oauth2callback(request):
    try:
        saved_state = request.session.get("google_oauth_state")
        saved_code_verifier = request.session.get(
            "google_oauth_code_verifier"
        )

        if not saved_state or not saved_code_verifier:
            return HttpResponse(
                "Gmail authorization error: OAuth session data is missing. Please start the authorization again.",
                status=500
            )

        returned_state = request.GET.get("state")

        if returned_state != saved_state:
            return HttpResponse(
                "Gmail authorization error: OAuth state mismatch.",
                status=500
            )

        flow = create_google_flow(
            code_verifier=saved_code_verifier,
            state=saved_state,
        )

        flow.fetch_token(
            authorization_response=request.build_absolute_uri()
        )

        credentials = flow.credentials

        with open("token.json", "w") as token:
            token.write(credentials.to_json())

        request.session.pop("google_oauth_state", None)
        request.session.pop("google_oauth_code_verifier", None)

        return HttpResponse(
            "Gmail authorization successful! You can now send appointment emails."
        )

    except Exception as e:
        return HttpResponse(
            f"Gmail authorization error: {e}",
            status=500
        )