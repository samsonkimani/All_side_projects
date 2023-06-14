#!/usr/bin/python3
import os
from dotenv import load_dotenv
from flask import Flask, render_template, url_for, Blueprint
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
from app_views import app_views
from main import main

load_dotenv()

app = Flask(__name__)

# Create the app_views blueprint
app_views = Blueprint('app_views', __name__)
app.register_blueprint(app_views)

# Create the main blueprint
main = Blueprint('main', __name__)
app.register_blueprint(main)


# @app.route('/')
# def index():
#     return render_template('index.html', url_for=url_for)

# @app.route('/register')
# def display_reg_form():
#     return render_template('registration-form.html')

# @app.route('/product_page')
# def display_product():
#     return render_template('product_page.html')

# @app.route('/doctor')
# def doctor():
#     return render_template('doc_dashboard.html')

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
    app.run(use_reload=True
)
