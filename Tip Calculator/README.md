# 💰 Tip Calculator

A simple **Tip Calculator Web App** built using **HTML, CSS, and JavaScript**.  
This project calculates the **tip amount** and **total bill** based on user input, using DOM manipulation and basic arithmetic logic.

---

## 📸 Project Preview
🧾 Tip Calculator UI  
Displays total amount and tip instantly after clicking **Calculate**.

---

## 🧠 Assignment Description

In this assignment, the goal is to build a **Tip Calculator** that dynamically calculates the **tip amount** and **total amount** based on the user’s input for **bill amount** and **tip percentage**.

When the **Calculate** button is clicked:
- The app displays the **calculated tip** and **total amount**.
- If inputs are missing, an **error message** appears below the input fields.

---

## 🧩 Functional Requirements

### ✅ Input Elements
| Element | ID | Description |
|----------|----|-------------|
| Bill Amount | `billAmount` | User enters the total bill amount |
| Tip Percentage | `percentageTip` | User enters the desired tip percentage |
| Tip Amount | `tipAmount` | Displays the calculated tip amount |
| Total Amount | `totalAmount` | Displays the final amount after adding the tip |

### ✅ Other Elements
| Element | Identifier | Description |
|----------|-------------|-------------|
| Error Message | `errorMessage` | Displays validation messages |
| Calculate Button | `calculateButton` | Triggers the calculation on click |

---

## 🧮 Calculation Formula

```javascript
calculatedTip = (percentageTip / 100) * billAmount
totalAmount = billAmount + calculatedTip
