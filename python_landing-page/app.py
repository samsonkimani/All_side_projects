#!/usr/bin/python3

from flask import Flask, render_template, url_for
from models import storage
from models.admin_model import Admin
from models.appointments_model import Appointment
from models.basemodel import Base, BaseModel
from models.calender_model import Calendar
from models.diagnosis_model import Diagnosis
from models.doctor_model import Doctor
from models.medical_history import MedicalHistory
from models.medication_model import Medication
from models.patient_model import Patient
from models.previous_doctor import PreviousDoctor
from models.user_model import User

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', url_for=url_for)

# @app.route('/home')
# def index():
#     return render_template('index.html', url_for=url_for)

@app.route('/register')
def display_reg_form():
    return render_template('registration-form.html')

@app.route('/register')
def register():
    try:
        email='test@example.com'
        first_name='John'
        last_name='Doe'
        password='password'
        role='doctor'

        user = User(email=email, first_name=first_name, last_name=last_name, password=password, role=role)
        storage.new(user)
        storage.save()
    except Exception as e:
        print(f"Error: {str(e)}")

    finally:
        storage.close()
    return render_template('index.html', url_for=url_for)

if __name__ == "__main__":
    app.run(
        debug=True, passthrough_errors=True,
        use_debugger=False, use_reloader=False
)
