const prompt = require("prompt-sync")();

console.log("1. greet");
let first = prompt("Please enter your first name");
let last = prompt("Please enter your last name");

console.log("GN"+ first + last + "!" );

// import prompt-sync to work with a non-document model i.e., NodeJS