#!/usr/bin/python3
import os
from dotenv import load_dotenv
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import models

from models.basemodel import Base, BaseModel
from models.user_model import User
from models.admin_model import Admin
from models.doctor_model import Doctor
from models.patient_model import Patient
from models.appointments_model import Appointment
from models.calender_model import Calendar
from models.diagnosis_model import Diagnosis
from models.medical_history import MedicalHistory
from models.medication_model import Medication
from models.previous_doctor import PreviousDoctor

load_dotenv()

class DBStorage:

    __engine = None
    __session = None

    def __init__(self):
        host=os.getenv('HOST')
        user=os.getenv('NAME')
        password=os.getenv('PASSWORD')
        database=os.getenv('DATABASE')

        # host='localhost'
        # user='root'
        # database='mediapp'
        # password='123456'
        connect_args={
            "ssl": {
                "ca": "/home/gord/client-ssl/ca.pem",
                "cert": "/home/gord/client-ssl/client-cert.pem",
                "key": "/home/gord/client-ssl/client-key.pem"
            }
        }

        ca=ssl_args["ssl"]["ca"],
        cert=ssl_args["ssl"]["cert"],
        key=ssl_args["ssl"]["key"]

        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}?ssl_ca={}&ssl_cert={}&ssl_key={}'.
                                        format(user,
                                            password,
                                            host,
                                            database,
                                            ca,
                                            cert,
                                            key))
    def new(self, obj):
        self.__session.add(obj)

    def save(self):
        self.__session.commit()

    def delete(self, obj=None):
        self.__session.delete(obj)

    def close(self):

        self.__session.remove()


    def reload(self):
        Base.metadata.create_all(self.__engine)
        session_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(session_factory)
        self.__session = Session
