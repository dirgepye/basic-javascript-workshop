console.log("Hellow earl!");

//this function takes the string, looks for the first character (which is [0] in
//javascript) and returns that character

function firstOfString(string) {
    return string[0];
};

console.log(firstOfString("Hello world"));
console.log(firstOfString("Montreal"));
console.log(firstOfString(""));


// this function takes an inputted string and uses the strings length as a position
// within the string to identify the a character we want to target. however, seeing
// as javascript starts counting at [0], the length will always be one longer than
// what is actually there so you have to subtract 1 to get a number that actually 
// reflects what is in the string.

function lastOfString(lastString) {
    return lastString[lastString.length -1];
}

console.log(lastOfString("Montreal"));
console.log(lastOfString("Hellow World"));
console.log(lastOfString(""));
console.log(lastOfString("P"));

