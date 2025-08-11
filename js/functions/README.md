# JavaScript Functions Practice

Date: August 10, 2025

## What I learned today

Spent time understanding different ways to write and use functions in JavaScript. Got confused initially about hoisting but things clicked after practicing more.

## Topics covered

**Function declarations**
- Regular functions with function keyword
- How hoisting works - can call functions before declaring them
- Got surprised that welcome() worked before I declared it

**Function expressions**
- Functions stored in variables
- These don't get hoisted like declarations
- Had to remember to declare first before calling

**Arrow functions**
- Shorter way to write functions
- Good for simple calculations like area and volume
- Single parameter doesn't need parentheses

**Parameters and default values**
- Setting default values when no argument is passed
- Template literals for string formatting
- Much cleaner than concatenating strings

**Recursion**
- Functions calling themselves
- Factorial example helped me understand the concept
- Need to be careful with base cases to avoid infinite loops

**Rest parameters**
- Using ...args to accept any number of arguments
- Better than the old arguments object
- Works well with for...of loops

## Code examples I tried

```javascript
// This works because of hoisting
welcome();

function welcome(){
    console.log('welcome');
}

// Arrow function for volume
let volume = (l,b,h) => l*b*h;

// Factorial using recursion
function fact(n){
    if (n==1) return 1;
    return n * fact(n-1);
}
```

## What confused me

Initially didn't understand why I could call welcome() before declaring it but couldn't do the same with function expressions. The hoisting concept took a while to sink in.

Also mixed up rest parameters and the arguments object at first. Rest parameters are definitely cleaner.

## Next things to learn

Planning to work on array methods next, especially map and filter. Want to understand how functions work as arguments to other functions.