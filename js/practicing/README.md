# Dynamic Dropdown Project

Simple JavaScript practice project where I learned to create HTML elements dynamically using DOM manipulation.

## What it does
Creates a dropdown menu with engineering branch options (ECE, CSE, Mechanical, Aerospace) using JavaScript instead of writing HTML directly.

## Files
- `index.html` - Basic page structure
- `script.js` - Creates the dropdown with JavaScript
- `styles.css` - Styling (if needed)

## Key things I practiced
- `document.createElement()` to make new elements
- `querySelector()` to find elements
- `appendChild()` to add elements to the page
- Using arrays with `forEach()` to create multiple options

## How to run
Just open `index.html` in any browser. The dropdown appears automatically when the page loads.

## Code highlights
```javascript
// Create select element
let select = document.createElement('select')
let body = document.querySelector('#dropdown')
body.appendChild(select)

// Add options from array
let array = ['ECE','CSE','MECHANICAL','AEROSPACE']
array.forEach(addoptions)
```

Pretty straightforward DOM manipulation practice. Good for understanding how to build HTML elements with JavaScript instead of typing them out manually.