let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let heading = document.getElementById('recipe');
heading.textContent = recipeObj.title

let image = document.getElementById("img")
image.src = recipeObj.imgSrc

let section = document.getElementById("section");

let liElement = document.createElement("li");

let ingredients = recipeObj.ingredients
for (let word of ingredients) {
    let liElement = document.createElement("li");
    liElement.textContent = word
    liElement.classList.add("li")
    section.appendChild(liElement)

}