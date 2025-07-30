from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_KEY = 'NASA_API_KEY' 

@app.route('/apod')
def apod():
    url = f'https://api.nasa.gov/planetary/apod?api_key={API_KEY}'
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

@app.route('/mars')
def mars():
    url = f'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key={API_KEY}'
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
