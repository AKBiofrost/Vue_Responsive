#!/usr/bin/env python3

from flask import Flask
from flask import render_template
from flask_mysqldb import MySQL


app = Flask(__name__)
app.secret_key = 'parangutirimicuaro'

app.config['MYSQL_HOST'] = 'db'
app.config['MYSQL_USER'] = 'mqd'
app.config['MYSQL_PASSWORD'] = 'Chcn02!7'
app.config['MYSQL_DB'] = 'mqd'

print("Connected to DB on ",app.config['MYSQL_HOST'])


conn = MySQL(app)


@app.route("/")
def home():
    return render_template("home.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)
