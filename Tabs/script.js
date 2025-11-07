let aboutButton = document.getElementById('aboutButton');
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");
let aboutTabContainer = document.getElementById("aboutTab");
let timeToVisitTabContainer = document.getElementById("timeToVisitTab");
let attractionsTabContainer = document.getElementById("attractionsTab");
timeToVisitTabContainer.classList.add("d-none");
attractionsTabContainer.classList.add("d-none");
aboutButton.onclick = function() {
    timeToVisitTabContainer.classList.add("d-none");
    attractionsTabContainer.classList.add("d-none");
    aboutTabContainer.classList.remove("d-none");
}
attractionsButton.onclick = function() {
    timeToVisitTabContainer.classList.add("d-none");
    attractionsTabContainer.classList.remove("d-none");
    aboutTabContainer.classList.add("d-none");
}
timeToVisitButton.onclick = function() {
    timeToVisitTabContainer.classList.remove("d-none");
    attractionsTabContainer.classList.add("d-none");
    aboutTabContainer.classList.add("d-none");
}