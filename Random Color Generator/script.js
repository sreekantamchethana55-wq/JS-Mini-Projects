let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let buttonElement = document.getElementById('button');
let bgContainerElement = document.getElementById("bgContainer");
let count = 0
buttonElement.onclick = function() {
    bgContainerElement.style.backgroundColor = bgColorsArray[count]
    count = count + 1

}