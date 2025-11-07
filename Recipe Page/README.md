# 🍽️ Recipe Page

A beautifully designed **Recipe Page Web App** built using **HTML, CSS, and JavaScript** 👩‍🍳  
This project dynamically creates and displays recipe details like the title, image, and ingredients list using data from a JavaScript object.

---

## 🧠 Assignment Description

In this assignment, the goal is to build a **Recipe Page** that dynamically renders content from a predefined `recipeObj`.  
You’ll display a recipe’s **title**, **image**, and **list of ingredients**, making the layout responsive across all screen sizes.

---

## 🧩 Functional Requirements

### ✅ HTML Element Classes & Structure
| Element | Class / ID | Description |
|----------|-------------|-------------|
| `<h1>` | `recipe-title` | Displays the recipe title (value of `recipeObj.title`) |
| `<img>` | — | Displays the recipe image (value of `recipeObj.imgSrc`) |
| `<ul>` | — | Contains dynamically generated list items for ingredients |

---

### ✅ JS Object (prefilled)
```javascript
let recipeObj = {
  title: "Pasta Primavera",
  imgSrc: "https://example.com/pasta-image.jpg",
  ingredients: [
    "Penne Pasta - 200g",
    "Olive Oil - 2 tbsp",
    "Garlic - 3 cloves",
    "Bell Peppers - 1 cup",
    "Broccoli - 1 cup",
    "Parmesan Cheese - to taste"
  ]
};
