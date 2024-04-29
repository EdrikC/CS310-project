from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from recipes import get_all_recipetitles, get_img_url, merge_sort_recipetitles


app=Flask(__name__)
CORS(app)

# Fetches the (sorted) titles from the MealDB API and serves them as an API to React.
@app.route("/recipes")
@cross_origin()
def test_module():
    return jsonify(get_all_recipetitles())

# Fetches the img_urls from the MealDB API and serves them as an API to React.
@app.route("/imgs")
@cross_origin()
def img_urls():
    return jsonify(get_img_url())

# Fetches the (sorted) titles from the MealDB API and serves them as an API to React.
@app.route("/sortedrecipes")
@cross_origin()
def sorted_titles():
    return jsonify(merge_sort_recipetitles())

