from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import redirect
from .gmail_service import create_google_flow

from .models import Appointment


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

    return redirect(authorization_url)


def oauth2callback(request):
    flow = create_google_flow()

    flow.fetch_token(
        authorization_response=request.build_absolute_uri()
    )

    credentials = flow.credentials

    with open("token.json", "w") as token:
        token.write(credentials.to_json())

    return HttpResponse(
        "Gmail authorization successful! You can now send appointment emails."
    )