from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/getAlimentacao', methods=['GET'])
def get_alimentacao():

    path = os.path.join(os.path.dirname(__file__), "alimentos.json")

    try:
        with open(path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return jsonify(data), 200
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/submitFormulario', methods=['POST'])
def submit_formulario():

    form_data = request.get_json()

    print("Recebido o formulário:", form_data)
    
    return jsonify({"message": "Form received successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)