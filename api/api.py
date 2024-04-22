from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from recipes import get_all_recipes


app=Flask(__name__)
CORS(app)

# Demo API fetching from MealDB API
@app.route("/test")
@cross_origin()
def test_module():
    return jsonify(get_all_recipes())


