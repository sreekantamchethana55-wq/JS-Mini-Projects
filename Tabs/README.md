# 🗂️ Tabs

A simple **Tabs Web App** built using **HTML, CSS, Bootstrap, and JavaScript** ✨  
This project switches between **About**, **Time to Visit**, and **Attractions** sections when the corresponding buttons are clicked — just like a real tab navigation system.

---

## 🧠 Assignment Description

In this assignment, the goal is to build a **Tabs** interface where each button displays its respective content and hides the others.

---

## 🧩 Functional Requirements

### ✅ HTML Element IDs

| Element | ID | Description |
|----------|----|-------------|
| `<button>` | `aboutButton` | Displays the About section |
| `<button>` | `timeToVisitButton` | Displays the Time to Visit section |
| `<button>` | `attractionsButton` | Displays the Attractions section |
| `<div>` | `aboutTab` | Container for About content |
| `<div>` | `timeToVisitTab` | Container for Time to Visit content |
| `<div>` | `attractionsTab` | Container for Attractions content |

All tab containers are placed inside a parent container with the class name `tabs-container`.

---

## 💻 Features
✅ Toggle between three tabs dynamically  
✅ Uses **Bootstrap display utilities (`d-none`)** for hiding/showing content  
✅ Clean and responsive layout  
✅ Simple, beginner-friendly JavaScript logic  
✅ Perfect for practicing **DOM Manipulation** and **Bootstrap utilities**

---

## 🧠 How It Works

1. By default, only the **About** section is visible.
   ```javascript
   timeToVisitTabContainer.classList.add("d-none");
   attractionsTabContainer.classList.add("d-none");
