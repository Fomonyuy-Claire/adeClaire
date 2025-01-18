from flask import Flask, Blueprint, request, jsonify
from logic import logic_bp
import requests
from flask_cors import CORS

app = Flask('__name__')
app.register_blueprint(logic_bp)
app.secret_key = 'adeClaire'

API_KEY = "adeClaire"

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()  # Get the input data (prompt)
        prompt = data.get("prompt", "")

        if not prompt:
            return jsonify({"error": "No prompt provided"}), 400

        # Prepare the request to OpenAI API
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_KEY}",
        }

        payload = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": prompt}],
        }

        # Send the request to OpenAI's API
        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers=headers,
            json=payload,
        )

        # Return the response from OpenAI API
        openai_response = response.json()
        return jsonify(openai_response)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=3000, debug=True)