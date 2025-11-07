let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let gameResult = document.getElementById("gameResult");
let checkButton = document.getElementById("checkButton");
let restartButton = document.getElementById("restartButton");
let userinputElement = document.getElementById("userInput");



let firstRandomNumber = Math.ceil(Math.random() * 100)
firstNumber.textContent = firstRandomNumber
let secondRandomNumber = Math.ceil(Math.random() * 100)
secondNumber.textContent = secondRandomNumber
let result = parseInt(firstRandomNumber) + parseInt(secondRandomNumber)
checkButton.onclick = function() {
    let user = parseInt(userinputElement.value)
    if (user === result) {
        gameResult.textContent = "Congratulations!!!"
        gameResult.style.color = "green"
    } else {
        gameResult.textContent = "Wrong"
        gameResult.style.color = "red"
    }
}
restartButton.onclick = function() {
    firstRandomNumber = Math.ceil(Math.random() * 100);
    firstNumber.textContent = firstRandomNumber;

    secondRandomNumber = Math.ceil(Math.random() * 100);
    secondNumber.textContent = secondRandomNumber;

    result = firstRandomNumber + secondRandomNumber;
    gameResult.textContent = "";
    userinputElement.value = "";
}