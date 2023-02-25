import json
import os
from cs50 import SQL
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from werkzeug.security import check_password_hash, generate_password_hash
from dotenv import load_dotenv
load_dotenv()

# configure image upload folder
UPLOAD_FOLDER = './static/users'

api = Flask(__name__)

# set upload folder
api.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

api.config["JWT_SECRET_KEY"] = "secret"
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

# configure jwt
jwt = JWTManager(api)

#This is postgresql database connection config
# connect to database
database = os.getenv("DB").replace("://", "ql://", 1)
db = SQL(database)

# refresh token on request for api calls
@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    # Query database for username
    rows = db.execute("SELECT email, password FROM users WHERE email = ? OR password = ?", email, password)

    # Ensure username exists and password is correct
    if len(rows) != 1 or not check_password_hash(rows[0]["password"], password):
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response

@api.route('/createuser', metthods=["POST"])
def create_user():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    firstname = request.json.get("firstname", None)
    lastname = request.json.get("lastname", None)
    role = request.json.get("role", None)

    rows = db.execute("SELECT email FROM users WHERE email = ?", email)

    print({"rows": rows})
    emails = []

    for row in rows:
        emails.append(row["email"])

    if email in emails:
        return {"msg", "user with this email already exists!!"}

    # hash password
    passhash = generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)

    id = db.execute("INSERT INTO users (firstname, lastname, email, password, role) VALUES (?, ?, ?, ?, ?) RETURNING id", firstname, lastname, email, password, role)


    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response


@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route('/createblog', methods=["POST"])
def createblog():
    
    title = request.json.get("title", None)
    description = request.json.get("description", None)
    image_cover = request.json.get("coverimage", None)

    #save blog image to file system

    #save blog details to database
    
    response = None

    return response