# Class and ID Selectors Practice

A hands-on project demonstrating the proper use of CSS class and ID selectors, showcasing when and how to apply each selector type effectively.

## 🔗 Live Demo
[View Live Demo](https://nithishkumar0283.github.io/Fullstack_learning_path/css/02-class-id-selectors/)

## 🖼️ Visual Result

![Final Outcome](./desired-outcome.png)

*Five elements demonstrating class and ID selector usage with shared and unique styling*

## 🎯 Project Overview

This project focuses on understanding the fundamental difference between CSS classes and IDs, practicing proper selector syntax, and implementing both shared and unique styling patterns.

## 📁 Project Structure

```
02-class-id-selectors/
├── index.html          # HTML file with class and ID attributes
├── style.css           # CSS file with class and ID selectors
├── desired-outcome.png # Visual reference for the final result
└── README.md          # Project documentation
```

## 🎨 Implementation Details

### HTML Structure
```html
<p class="odd">Number 1 - I'm a class!</p>
<div id="two">Number 2 - I'm one ID.</div>
<p class="odd large">Number 3 - I'm a class, but cooler!</p>
<div id="four">Number 4 - I'm another ID.</div>
<p class="odd">Number 5 - I'm a class!</p>
```

### CSS Styling Rules

#### 1. Shared Styling (Class Selector)
**Target:** All odd-numbered elements (1, 3, 5)
```css
.odd {
    background-color: rgb(255, 167, 167);
    font-family: Verdana, "DejaVu Sans", sans-serif;
}
```

#### 2. Unique Styling (ID Selectors)
**Element 2:**
```css
#two {
    font-size: 36px;
    color: blue;
}
```

**Element 4:**
```css
#four {
    font-size: 24px;
    font-weight: bold;
    background-color: lightgreen;
}
```

#### 3. Multiple Classes
**Element 3 additional styling:**
```css
.large {
    font-size: 24px;
}
```

## 💻 Key Concepts Demonstrated

### Class vs ID Usage

**Classes (`.class-name`):**
- ✅ Used for elements that share similar styling
- ✅ Can be applied to multiple elements
- ✅ Elements can have multiple classes
- ✅ Reusable and maintainable

**IDs (`#id-name`):**
- ✅ Used for unique elements
- ✅ Should only appear once per page
- ✅ Higher specificity than classes
- ✅ Often used for JavaScript targeting

### CSS Specificity Hierarchy
1. **Inline styles** (highest specificity)
2. **IDs** 
3. **Classes, attributes, pseudo-classes**
4. **Elements and pseudo-elements** (lowest specificity)

## 🧠 Key Learning Points

### When to Use Classes:
- Elements that share common styling
- Reusable style patterns
- When you need multiple selectors on one element
- Building modular, maintainable CSS

### When to Use IDs:
- Unique elements that need specific styling
- JavaScript hooks and navigation anchors
- When you need higher CSS specificity
- One-off styling that won't be repeated

### Multiple Classes:
- Combine base styles with modifier styles
- Create flexible, component-based designs
- Example: `class="button button-large button-primary"`

## 🛠️ Technologies Used

- HTML5
- CSS3
- CSS Selectors: class (`.`), ID (`#`)
- Color values: RGB format
- Font properties and fallback fonts

## 📚 Skills Demonstrated

- Proper HTML attribute usage (class and id)
- CSS selector syntax and specificity
- Color management with RGB values
- Typography with font families and fallbacks
- Understanding of CSS cascade and inheritance
- Semantic HTML structure

## 🔍 Self-Check Validation

✅ **Do the odd numbered `p` elements share a class?**  
Yes - Elements 1, 3, and 5 all use the `.odd` class

✅ **Do the even numbered `div` elements have unique IDs?**  
Yes - Element 2 has `id="two"` and Element 4 has `id="four"`

✅ **Does the Number 3 element have multiple classes?**  
Yes - Element 3 has both `odd` and `large` classes

---

*Part of my daily web development learning journey - mastering CSS fundamentals one concept at a time.*