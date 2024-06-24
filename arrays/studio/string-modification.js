const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newstr = str.slice(3) + str.slice(0,3);
console.log(newstr);
//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`As you can see above, we have turned the string ${str} into a new string ${newstr}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userInput;
userInput = input.question("Enter a number of letters to be relocated: ");
userInput = Number(userInput);
console.log(userInput + userInput); 

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userInput >= str.length){
    console.log(`You have entered ${userInput}, this number is too large. Using default value`);
    newstr = str.slice(3) + str.slice(0,3);
    console.log(newstr);
} else if (userInput < str.length){
    newstr = str.slice(userInput) + str.slice(0, userInput);
    console.log(newstr);
} else{
    console.log("Unexpected-Error / Invalid-Input");
}
