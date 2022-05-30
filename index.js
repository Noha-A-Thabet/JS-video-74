//video 74
let sentence = 'I Love Foood Code Too Playing Much ';
let ignoreNumbers = 'Elz123er4o';
let mix = "A13BS2ZX";



//TASK 1 Fillter Words More than 4 characters
let smallWords = sentence.split(" ").filter(function (a) {
    return a.length > 4 ? "" : a
}).join(" ");

//TASK 2 ignore numbers
let mixWords = mix.split("").filter(function (a) {
    return isNaN(a);
}).join("")
console.log(smallWords);
console.log(ignoreNumbers);

//TASK 3 fILTER Strings + Multiply

let mixed = mix.split("").filter(function (a) {
    return parseInt(a)
}).map(function (a) {
    return a *= a
}).join("")


console.log(mixed)