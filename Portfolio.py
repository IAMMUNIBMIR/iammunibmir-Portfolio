from flask import Flask, render_template
import os

app = Flask(__name__)

def concatenate_html():
    # Read the content of header.html
    with open('Appearance/header.html', 'r', encoding='utf-8') as file:
        header = file.read()

    # Read the content of body.html
    with open('Appearance/Body.html', 'r', encoding='utf-8') as file:
        body = file.read()

    # Read the content of footer.html
    with open('Appearance/footer.html', 'r', encoding='utf-8') as file:
        footer = file.read()

    # Combine the HTML content without using Flask context
    combined_html = f'{header}\n{body}\n{footer}'

    # Write the combined content to index.html
    with open("./templates/index.html", "w", encoding="utf-8") as file:
        file.write(combined_html)

# Concatenate HTML files before running the app
concatenate_html()

# Route to render the generated index.html
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    # Use Gunicorn for production deployment
    from gunicorn.app.base import BaseApplication

    class FlaskApplication(BaseApplication):
        def __init__(self, app, options=None):
            self.options = options or {}
            self.application = app
            super().__init__()

        def load_config(self):
            for key, value in self.options.items():
                self.cfg.set(key, value)

        def load(self):
            return self.application

    options = {
        'bind': '0.0.0.0:{}'.format(os.environ.get('PORT', 5000)),
        'workers': 4  # You can adjust the number of workers based on your needs
    }

    FlaskApplication(app, options).run()
