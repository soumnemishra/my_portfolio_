from flask import Flask, request, jsonify
import random
from langdetect import detect

app = Flask(__name__)

# Predefined humorous responses
responses = {
    "greeting": [
        "Hey there! Did someone call for a chatbot with *extra swag*? 😎",
        "Hello! I'm Kavi, your *hilarious* AI assistant. Ready to make your day better! 😆",
        "Namaste! Kavi yahaan hai, madad ke liye! (I'm here to help!) 🙌",
        "Yo! Another human! How’s it going? 🚀"
    ],
    "neutral": [
        "Hmmm... interesting! Tell me more. 🤔",
        "Aree waah! Good one! 😃",
        "Okay okay, but let’s get to the point. What do you need? 😜"
    ],
    "sad": [
        "Oh no! You seem down. Here's a joke: Why don’t skeletons fight each other? Because they don’t have the guts! 😆",
        "Feeling low? Don’t worry, Kavi’s got you! Let’s talk. 😊",
        "Chalo chai pi lein! Ek garam chai ki pyaali ho! ☕"
    ]
}

def detect_sentiment(message):
    """Basic sentiment detection using keywords"""
    sad_words = ["sad", "depressed", "upset", "cry", "hurt"]
    for word in sad_words:
        if word in message.lower():
            return "sad"
    return "neutral"

def get_response(message):
    """Generate response based on message"""
    try:
        lang = detect(message)
        sentiment = detect_sentiment(message)

        if "hello" in message.lower() or "hi" in message.lower():
            response = random.choice(responses["greeting"])
        else:
            response = random.choice(responses[sentiment])

        # If detected language is Hindi, respond in Hindi
        if lang == "hi":
            response = f"आपने कहा: {message}. मैं आपकी मदद करने के लिए यहां हूँ! 😊"

        return response
    except:
        return "Oops! Something went wrong. 😵 Try again!"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get("message", "")

    if not message:
        return jsonify({"response": "Please send a message! 🙃"})

    response_text = get_response(message)
    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(debug=True)
