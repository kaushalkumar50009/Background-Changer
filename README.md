#https://background-changer-puce.vercel.app/

# Background Changer with Copy Button

This project is a simple web application that allows you to change the background color of a webpage with a "Change Background" button. Additionally, there's a "Copy" button to copy the current color code to the clipboard. The "Copy" button briefly displays a "Copied" message to indicate a successful copy. Here's a README to help you understand and use the code:

## HTML Structure (index.html)

The HTML structure includes the following elements:

- `<!DOCTYPE html>` declaration for HTML5.
- The `<html>` tag with the `lang` attribute set to "en".
- The `<head>` section with meta tags for character set and viewport settings and a reference to an external stylesheet (`style.css`).
- The `<body>` section, which contains the main content of the webpage.
  - A `<div>` with the class "main" serving as the main container.
  - Inside this container, there's another `<div>` with the class "container" that holds the following elements:
    - An `<h3>` element with the ID "colorCode" for displaying the color code.
    - A "Change Background" `<button>` element with the ID "btn."
    - A "Copy" `<button>` element with the ID "copy_btn."

## JavaScript (script.js)

The JavaScript code defines the behavior for changing the background color and copying the color code:

1. The `changeColor` function generates a random color code in hexadecimal format and sets the background color of the entire webpage to that color. It also updates the text inside the "colorCode" element with the generated color code.

2. The `copyToClipboard` function copies the generated color code to the clipboard and displays a "Copied" message on the "Copy" button for a brief period.

3. Event listeners are added to the "Change Background" and "Copy" buttons to trigger the respective functions when clicked.

4. An initial call to `changeColor` is made to set the initial background color.

## Usage

To use this project, follow these steps:

1. Include the provided HTML structure in your web page.

2. Make sure to reference the external JavaScript file ("script.js") in your HTML document.

3. When you load the page, you will see an initial background color. Click the "Change Background" button to change the background color, and click the "Copy" button to copy the current color code to the clipboard.

4. The "Copy" button will briefly display a "Copied" message when the color code is successfully copied.


This README should help users understand how to incorporate and use your background color changer with a "Copy" button in their web projects.
