let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById('groceryListContainer');
groceryListContainer.classList.add("bg")

let heading = document.createElement("h1")
heading.textContent = "Grocery List"
heading.classList.add("text")
groceryListContainer.appendChild(heading)

let container = document.createElement("div")
container.classList.add("container")
groceryListContainer.appendChild(container)

let ulcontainer = document.createElement("ul")
container.appendChild(ulcontainer)

for (let item of groceryList) {
    let lieElement = document.createElement("li")
    lieElement.textContent = item
    lieElement.classList.add("li")
    ulcontainer.appendChild(lieElement)
}