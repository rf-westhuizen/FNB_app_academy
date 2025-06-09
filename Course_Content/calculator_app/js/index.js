// The script code will always run again if the page refreshed that is why we can add that newLine bool

const displayValue = document.getElementById("inputBox");
var newLine = true;


function appendToDisplay(buttonValue){
    //document.getElementById("inputBox").value = buttonValue;
    displayValue.value += buttonValue;
}

function clearDisplay() {
    displayValue.value = "0";
    newLine = true;
}

function calculateResult() {

    var expression = displayValue.value;
    var result = eval(expression);
    console.log('result:'); // at this stage the result is a string ''
    console.log(parseInt(result));
    displayValue.value = result;
    newLine = true;



}


function digitBtnPressed(btnValue) {

    if (newLine) {
        displayValue.value = btnValue;
        newLine = false;
    } else {
        var currentValue = displayValue.value;
        displayValue.value = currentValue + btnValue;
    }

}
