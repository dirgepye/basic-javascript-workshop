console.log("Hellow earl!");

//this function takes the string, looks for the first character (which is [0] in
//javascript) and returns that character

function firstOfString(string) {
    return string[0];
};

console.log(firstOfString("Hello world"));
console.log(firstOfString("Montreal"));
console.log(firstOfString(""));


// the function below takes an inputted string and uses the strings length as a position
// within the string to identify the a character we want to target. however, seeing
// as javascript starts counting at [0], the length will always be one longer than
// what is actually there so you have to subtract 1 to get a number that actually 
// reflects what is in the string.

function lastOfString(lastString) {
    return lastString[lastString.length -1];
};

console.log(lastOfString("Montreal"));
console.log(lastOfString("Hellow World"));
console.log(lastOfString(""));
console.log(lastOfString("P"));

//the function below takes a string and a number as input. the number entered
//helps to identify a specific character and returns it. I also included a
//more "user friendly" that would allow someone who isn't familiar with javascript
//to more accurately identify the number they want to select

function numberedString (string,number) {
    return string[number];
};

console.log(numberedString("jerk store",2));
console.log(numberedString("montreal",4));
console.log(numberedString("",6));

function numberedStringUser (string,number) {
    return string[number -1]
};

console.log(numberedStringUser("jerk store",2));
console.log(numberedStringUser("montreal",4));
console.log(numberedStringUser("",6));


// this function takes two numbers and adds them. if you try to pas
// something other than a number it will not add properly. a string simply
// attaches itself to the number (so ("string",10) literally returns string10.
// if you add a character that isn't a number you get a reference error telling 
// you that the character in question has not yet been defined.

function addNumbers(num1,num2) {
    return num1 + num2
}

console.log(addNumbers(1,8));

console.log(addNumbers("string",10));

// this function takes two numbers and multiplies them. if you multiply a string
// it returns NaN (not a number?) if you insert a boolean, it seems like they
// have a value of 1 or 0 (true or false) and it makes the multiplication accordingly

function multiplyNumbers(num1,num2) {
    return num1 * num2
}

console.log(multiplyNumbers(6,6));
console.log(multiplyNumbers("string",5));
console.log(multiplyNumbers(false,5));

// the following function take a string and two numbers. depending on what
// the string entered is, a different equation is used

function doingMath(operator,num1,num2) {
    if (operator === "add") {
        return num1 + num2;
    }
    else if (operator === "subtract") {
        return num1 - num2;
    }
    else if (operator === "mult") {
        return num1 * num2;
    }
    else if (operator === "div") {
        return num1 / num2;
    }
    else {
        return 0;
    }
};

console.log(doingMath("add",8,10));
console.log(doingMath("subtract",10,5));
console.log(doingMath("mult",2,4));
console.log(doingMath("div",10,5));
console.log(doingMath("string",9,12));

// the function below takes the string entered in the string paramter 
// and uses the .repeat method and prints it out as many times as is indicated
// in the "number" parametr

function multiplyString(string,number) {
    return (string + " ").repeat(number)
};

console.log(multiplyString("jerk store", 4));
console.log(multiplyString("",5));