// declares all of the arrays
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var prePassword = [];
var finalPassword = [];
//mix arrays together
var mix = function (confirm, mix) {
    if (confirm) {
        prePassword = prePassword.concat(mix);
    }
}

var passGenerate = function () {
    //define lenght of password and user input
    var passLenght = prompt("How long would you like the password to be? Pick a number between 1 and 128");
    if (!passLenght || passLenght < 8 || passLenght > 128) {
        window.alert("You must pick a number between 1 and 128!");
        return passGenerate();
    }
    //user input
    var upperConfirm = confirm("Would you like to add uppercase letters to your password?");
    var lowerConfirm = confirm("Would you like to add lowercase letters to your password?");
    var numberConfirm = confirm("Would you like to add numbers to your password?");
    var specialConfirm = confirm("Would you like to add special characters to your password?");
    //confirms user input
    if (!(upperConfirm || lowerConfirm || numberConfirm || specialConfirm)) {
        window.alert("You must pick one of the options.");
        return passGenerate();
    };
    //mesh of arrays
    mix(upperConfirm, upperCaseArray);
    mix(lowerConfirm, lowerCaseArray);
    mix(numberConfirm, numberArray);
    mix(specialConfirm, specialArray);
    //loop from random array
    while (finalPassword.length < passLenght) {
        random = prePassword[Math.floor(Math.random() * prePassword.length)];
        finalPassword = finalPassword + random;
    };
}

var reset = function () {
    finalPassword = []
}

console.log(finalPassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    passGenerate();
    var password = finalPassword;
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    reset();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
