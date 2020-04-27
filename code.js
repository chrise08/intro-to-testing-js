// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function isNumeric(input) {
    if (isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else if (input === "") {
        return false;
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    if (parseFloat(input) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    return input === "a" || input === "A";
}