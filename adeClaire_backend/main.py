from flask import Flask, Blueprint, request, jsonify
from logic import logic_bp
import requests
from flask_cors import CORS

app = Flask('__name__')
app.register_blueprint(logic_bp)
app.secret_key = 'adeClaire'


if __name__ == '__main__':
    app.run(port=3000, debug=True)