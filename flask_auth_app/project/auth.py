#!/usr/bin/python3

from flask import Blueprint
from . import db

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return "login"

@auth.route('/signup')
def signup():
    return 'signup'

@auth.route('/logout')
def logout():
    return 'logout'

