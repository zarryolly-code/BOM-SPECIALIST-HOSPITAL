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