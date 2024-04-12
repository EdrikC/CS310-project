from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import time


app=Flask(__name__)
CORS(app)

@app.route("/test")
@cross_origin()
def test_module():
    return jsonify({'time': time.time()})


