from flask import Flask
# from flask_cors import CORS
import time

app=Flask(__name__)
# CORS(app)

@app.route("/test")
# @cross_origin()
def test_module():
    return {'time': time.time()}


