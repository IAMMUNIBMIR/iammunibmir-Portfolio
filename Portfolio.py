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

    # Combine the HTML content
    combined_html = f'{header}\n{body}\n{footer}'

    # Write the combined content to index.html
    with open("./templates/index.html", "w", encoding="utf-8") as file:
        file.write(combined_html)

# Concatenate HTML files before running the app
concatenate_html()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
