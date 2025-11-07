let buttonElement = document.getElementById('calculateButton');
let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

buttonElement.onclick = function() {
    if (billAmountElement.value === "" || percentageTipElement.value === "") {
        errorMessage.textContent = "Enter valid input"
    } else {

        errorMessage.textContent = ""
        let billamount = parseInt(billAmountElement.value);
        let percentamount = parseInt(percentageTipElement.value)
        let tipamount = (percentamount / 100) * billamount;
        let totalamount = billamount + tipamount
        tipAmountElement.value = tipamount
        totalAmountElement.value = totalamount;


    }
}