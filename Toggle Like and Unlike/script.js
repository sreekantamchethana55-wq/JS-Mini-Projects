let puppyImageElement = document.getElementById('puppyImage');
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");

let isliked = false
likeButtonElement.onclick = function() {
    if (isliked === false) {
        puppyImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "blue";
        likeButtonElement.style.backgroundColor = "blue"
        likeButtonElement.style.color = "white"
        isliked = true
    } else {
        puppyImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconElement.style.color = "grey";
        likeButtonElement.style.backgroundColor = "grey"
        likeButtonElement.style.color = "grey"
        isliked = false
    }
}