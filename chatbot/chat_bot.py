import random

def get_bot_response(user_input):
    responses = {
        "hello": ["Hi there!", "Hello!", "Hey! How can I help you?"],
        "how are you": ["I'm just a bot, but I'm doing great!", "I'm fine! What about you?"],
        "bye": ["Goodbye!", "See you later!", "Bye! Have a great day!"],
        "default": ["I'm not sure what you mean. Can you rephrase that?", "Hmm... I don't understand."]
    }

    # Convert user input to lowercase for better matching
    user_input = user_input.lower()

    # Find matching response
    for key in responses:
        if key in user_input:
            return random.choice(responses[key])

    return random.choice(responses["default"])
