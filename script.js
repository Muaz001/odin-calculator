let num1 = null;
let num2 = null;
let sign = null;


function add(num1, num2) {
    return (num1 + num2);
};


function subtract(num1, num2) {
    return (num1 - num2);
};


function multiply(num1, num2) {
    return (num1 * num2);
};


function divide(num1, num2) {
    return (num1 / num2);
};


function operate(num1, sign, num2) {
    let value = null;
    if (sign === "+") {
        value = add(num1, num2);
    }
    else if (sign === "-") {
        value = subtract(num1, num2);
    }
    else if (sign === "*") {
        value = multiply(num1, num2);
    }
    else if (sign === "/") {
        value = divide(num1, num2);
        if (value === Infinity) value = "Error";
    }
    
    // Rounding the numbers
    
    let ans = value.toFixed(5);
    showDisplay(Number(ans));
};


function clearDisplay() {
    let parent = document.querySelector(".container");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};


function showDisplay(btnClicked) {
    let toDisplay = "0 1 2 3 4 5 6 7 8 9 + - / * .";

    // When Enter clicked
    if (typeof btnClicked === "number") {
        clearDisplay();
        let newValue = document.createElement("span");
        newValue.textContent = btnClicked;
        document.querySelector(".container").appendChild(newValue);

        num1 = btnClicked; 
        num2 = null; 
        sign = null;
    }
    
    // When Clear clicked
    else if (btnClicked === "AC") {
        clearDisplay(); 
        num1 = null; 
        num2 = null; 
        sign = null;
    }

    // For displaying errors
    else if (btnClicked === "Error") {
        clearDisplay();
        let newValue = document.createElement("span");
        newValue.textContent = btnClicked;
        document.querySelector(".container").appendChild(newValue);

        num1 = null; 
        num2 = null; 
        sign = null;
    }

    // Display every key pressed
    else if (toDisplay.includes(btnClicked)){
        let newValue = document.createElement("span");
        newValue.textContent = btnClicked;
        document.querySelector(".container").appendChild(newValue);
    }
};


let skeleton = document.querySelector(".skeleton");
skeleton.addEventListener("click", (btn) => {
    let btnClicked = btn.target.textContent;
    let symbols = "+ - * /  ";

    if (btnClicked === "Enter ⏎" && num1 != null && num2 != null && sign != null) {
        operate(Number(num1), sign, Number(num2));
    }
    else if (btnClicked === "AC") showDisplay(btnClicked);
    else if (symbols.includes(btnClicked)) sign = btnClicked; 
    else if (typeof Number(btnClicked) === "number") {
        if (num1 === null) num1 = btnClicked;
        else if (sign === null) num1 += btnClicked;
        else if (num2 === null) num2 = btnClicked;
        else if (num2 != null) num2 += btnClicked;
    }
    
    showDisplay(btnClicked);
});
