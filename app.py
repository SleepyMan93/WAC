from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    """Renders home page with base template"""
    return render_template('index.html')


@app.route("/content_page")
def content_page():
    """Function to render content/work page"""
    return render_template('content.html')


if __name__ == '__main__':
    app.run(debug=True)
