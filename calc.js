
// Global variables
var number1 = 1;
var number2 = 11;
var output = document.getElementById("output");

// Regular function with a parameter

function calc() {
    'use strict';
    // Local variables
    var result = number1 + number2;
    return result;


}
console.log(calc());

//ECMA6 arrow function, with multiple statements you need to include the function body around{}

var result = () => number1 + number2;
console.log(result());

//Function with user input

function userInput() {
    'use strict';
    //let is restricting the scope to the actual code block, statement or expression.
    let number1 = parseInt(prompt('Type a number:', ''));
    let number2 = parseInt(prompt('Type a number:', ''));
    let result = number1 + number2;
    output.innerHTML = "The result is:" + result;
}

//userInput();


function player(name, score) {
    'use strict';
    this.name = name;
    this.score = score;

    this.greeting = function () {
        alert('Hi ' + this.name + ': Your score is ' + this.score);
    };
}

var p1 = new player('Mathias', 32);
p1.greeting();
