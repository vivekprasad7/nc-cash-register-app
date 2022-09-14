const cashGiven = document.querySelector("#cash-given");
const billAmount = document.querySelector("#bill-amount");
const checkBtn = document.querySelector("#check-btn")
const errorMsg = document.querySelector("#error-msg");

const noOfNotes = document.querySelectorAll(".total-notes");

const totalNotes = [2000, 500, 100, 20, 10, 5, 1];

function cashToBeReturned(returnAmount){

    for( let i =0; i < totalNotes.length; i++){
        const numberOfNotes = Math.trunc( returnAmount / totalNotes[i]);
        
        returnAmount = returnAmount % totalNotes[i];

        noOfNotes[i].innerText = numberOfNotes;

    }

}

checkBtn.addEventListener('click', function validateBillAndCashAmount(){
    hidemessage();
    if (billAmount.value > 0){

        if( cashGiven.value >= billAmount.value) {

            const returnAmount = cashGiven.value - billAmount.value;

            cashToBeReturned(returnAmount);

        }else{
            showMessage("Do you wanna wash plates? You have given less cash than the bill amount.")
        }

    } else {
        showMessage("Invalid Bill Amount");
    }
});


function hidemessage(){
    checkBtn.style.display = "none";
}

function showMessage(msg){
    errorMsg.style.display = "block";
    errorMsg.innerText = msg;
}