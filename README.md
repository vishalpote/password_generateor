# Password Generator

This is a simple password generator function written in JavaScript. It generates a random password of a specified length, ensuring that the password contains at least one uppercase letter, one lowercase letter, one digit, and one special character.

## Installation

To use this password generator in your project, you need to include the file containing the function. You can either clone this repository or download the file directly.

## Usage

Here's how you can use the `generatePassword` function:

### Importing the Module

First, you need to import the module in your JavaScript file.

```javascript
const generatePassword = require('./path/to/your/module');


const password = generatePassword(12); // Generates a 12-character password
console.log(password); // Example output: "A1b!k2Lm#nPq"


