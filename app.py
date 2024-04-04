from flask import Flask, render_template, redirect, url_for
from database import test

app = Flask(__name__, template_folder="templates")


@app.route("/")
def home():
    return render_template("index.html")




if __name__ == "__main__":
    app.debug = True
    app.run()