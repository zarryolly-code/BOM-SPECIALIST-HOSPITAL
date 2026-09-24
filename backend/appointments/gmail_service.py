import base64
import os

import resend

from email.mime.text import MIMEText

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build


SCOPES = ["https://www.googleapis.com/auth/gmail.send"]

REDIRECT_URI = "http://127.0.0.1:8000/oauth2callback/"


def create_google_flow(code_verifier=None, state=None):
    client_config = {
        "web": {
            "client_id": os.getenv("GOOGLE_CLIENT_ID"),
            "client_secret": os.getenv("GOOGLE_CLIENT_SECRET"),
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "redirect_uris": [
                REDIRECT_URI
            ],
        }
    }

    return Flow.from_client_config(
        client_config,
        scopes=SCOPES,
        redirect_uri=REDIRECT_URI,
        code_verifier=code_verifier,
        state=state,
    )


def get_gmail_service():
    credentials = None

    if os.path.exists("token.json"):
        credentials = Credentials.from_authorized_user_file(
            "token.json",
            SCOPES,
        )

    if credentials and credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())

    if not credentials or not credentials.valid:
        return None

    return build("gmail", "v1", credentials=credentials)


def send_email(to_email, subject, body):
    resend.api_key = os.getenv("RESEND_API_KEY")

    params = {
        "from": "B.O.M Specialist Hospital <appointments@bomspecialisthospital.com.ng>",
        "to": [to_email],
        "subject": subject,
        "text": body,
    }

    return resend.Emails.send(params)