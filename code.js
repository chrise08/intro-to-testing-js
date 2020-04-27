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
    return parseFloat(input) === 5;
}

function isEven(input) {
    return (parseFloat(input) % 2 === 0);
}

function isVowel(input) {
    if (
        input === "A" ||
        input === "E" ||
        input === "I" ||
        input === "O" ||
        input === "U" ||
        input === "a" ||
        input === "e" ||
        input === "i" ||
        input === "o" ||
        input === "u"
    ) {
        return true;
    } else {
        return false;
    }
}

function add(input1, input2) {
    if (!isNaN(input1) || !isNaN(input2) === true) {
        return parseFloat(input1) + parseFloat(input2);
    } else {
        return NaN;
    }
}