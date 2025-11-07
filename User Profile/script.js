let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainer = document.getElementById('profileContainer');
profileContainer.classList.add("d-flex", "text-center", "flex-column", "justify-content-center");

let imgContainer = document.getElementById("imgContainer")


let image = document.createElement("img")
image.classList.add("image")
image.src = profileDetails.imgSrc
imgContainer.appendChild(image)

let heading = document.createElement("h1")
heading.textContent = profileDetails.name
heading.style.fontSize = "25px"
heading.style.paddingTop = "15px"
profileContainer.appendChild(heading)

let age = document.createElement("p")
age.textContent = "Age: " + profileDetails.age
age.style.fontSize = "25px"
age.style.fontWeight = "bold"
profileContainer.appendChild(age)