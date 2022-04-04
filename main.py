from flask import Flask, render_template

app = Flask(__name__, template_folder="templates/")


@app.route("/")
def home():
    """Renders home page with base template"""
    return render_template('index.html')


@app.route("/content_page")
def content_page():
    """Function to render content/work page"""
    return render_template('content.html')


@app.route("/about_page")
def about_page():
    """Function to render the about page"""
    return render_template('about.html')


@app.route("/services_page")
def services_page():
    """Function to render the services page"""
    return render_template('services.html')


@app.route("/projects_page")
def projects_page():
    """Function to render hidden projects page"""
    return render_template('projects.html')

