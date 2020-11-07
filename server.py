import pymongo
from flask import Flask, render_template,send_from_directory,request, jsonify, make_response

import os

app  = Flask(__name__ 
    ,static_folder='vendor/build',static_url_path='')


@app .route('/')
def index():
    return app.send_static_file('index.html')

@app .errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/api/register', methods = ['POST'])
def register():
    patient = pymongo.MongoClient("mongodb://localhost:27017/")  # connection
    BD = patient["patient"]
    TB = BD["malades"]


    data = request.get_json()
    print (data)

    list = data["data"]
    print (list)

    if (TB.find_one({"tel": list["tel"], "email": list["email"]}) == None):
        TB.insert_one(list)
        return (jsonify({'status' : "success"}))
    else:
        return (jsonify({'status' : "error from backend"}))


@app.route('/api/login', methods = ['POST'])
def login():
    patient = pymongo.MongoClient("mongodb://localhost:27017/")  # connection
    BD = patient["patient"]
    TB = BD["malades"]


    data = request.get_json()
    print (data)

    list = data["data"]
    print (list)
    user = TB.find_one({"email": list["email"]})
    if (user != None):
        if (user["password"] == list["password"]):
            output = {
                "nom": user["nom"],
                "prenom": user["prenom"],
                "tel": user["tel"],
                "email": user["email"],
                "adress": user["adress"],
            }
            return (jsonify({'user' : output, 'status': 'success'}))
        else:
            return (jsonify({'status' : "password error"}))
    else:
        return (jsonify({'status' : "error from backend"}))











if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=False, port=os.environ.get('PORT', 8080))