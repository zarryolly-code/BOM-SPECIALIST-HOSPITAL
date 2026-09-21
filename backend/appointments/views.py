from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.mail import send_mail

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

        try:
            send_mail(
                subject="New Appointment Booking - B.O.M Specialist Hospital",
                message=f"""
A new appointment has been booked.

Patient Name: {appointment.name}
Phone: {appointment.phone}
Service: {appointment.service}
Preferred Date: {appointment.preferred_date}
Message: {appointment.message}

Please contact the patient to confirm the appointment.
""",
                from_email=None,
                recipient_list=["riyadsolihn@gmail.com"],
                fail_silently=True,
            )
        except Exception:
            pass

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