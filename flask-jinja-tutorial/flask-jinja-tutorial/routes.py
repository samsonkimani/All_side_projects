#!/usr/bin/python3

from flask import current_app
from flask import render_template

@app.route('/')
def home():
    return render_template(
            'home.html',
            title='jinja Demo site',
            description="templates with flask and jinja"
            )
