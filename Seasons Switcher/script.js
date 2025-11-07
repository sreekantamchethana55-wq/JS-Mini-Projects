let smallimage = document.getElementById('seasonSmallImage');
let mediumimage = document.getElementById("seasonMediumImage");

let springBtn = document.getElementById("springBtn");
let summerBtn = document.getElementById("summerBtn");
let autumnBtn = document.getElementById("autumnBtn");
let winterBtn = document.getElementById("winterBtn");

springBtn.onclick = function() {
    smallimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png"
    mediumimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png"
}
summerBtn.onclick = function() {
    smallimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png"
    mediumimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png"
}
autumnBtn.onclick = function() {
    smallimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png"
    mediumimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png"
}
winterBtn.onclick = function() {
    smallimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png"
    mediumimage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png"

}