//declaring a variable called captchaArray and assigning it's value to an array of questions
let captchaArray = ['Who is the President?', 'What is our Nations Capital?', 'How many States are there?'];

//declaring a variable called random and assiging it the value of a a radom number generator
//Math.random will give us a number between 0 and 1 not including 1
// multiplying the random decimal by the length of the array to establish our range(will give us a random number between 0 and 3 not including 3)
//Math.floor will round the number down to give us a whole number
let random = Math.floor(Math.random() * captchaArray.length);

//calling prompt and indexing the captchaArray with our random number to give us a random question
prompt(captchaArray[random]);

//defining a function called captchaFunction
function captchaFunction() {
    //declaring a variable called correctAnswer and assiging it the value of an array of answers
    let correctAnswer = ['Trump', 'DC', '50'];
    //using a for loop to loop through the array of questions
    for(let i = 0; i < captchaArray.length; i++) {
        //declaring a new variable called result and assiging it the value of invoking the prompt function and passing it the argument of the index of i in captchaArray
        let result = prompt(captchaArray[i]);
        //checking if the users input(result) does not equal the the value at index of i in correctAnswer array
        if(correctAnswer[i] !== result) {
            //if correctAnswer[i] and result do not match invoke alert with the argument of Sorry Robot and return(break the function)
            alert('Sorry Robot');
            return;
        }
    }
    //if the if statement above does not return, invoke the function alert with the argument Hello Human
    alert('Hello Human');
}

//invoke or call the captchaFunction
captchaFunction();

//declaring a variable with the name of myName and assigning it the value of the return value of  the function prompt
let myName = prompt('What\'s your name?');
//declaring a variable with the name of myName and assigning it the value of the return value of  the function confirm
let myAge = confirm('Are you older than 30');
//declaring a variable with the name of myName and assigning it the value of the return value of  the function 
let myAlert = alert('this is an alert');

//console.log the return values of the variables declared above
console.log(myName);
console.log(myAge);
console.log(myAlert);

//writing an if statement that checks if myAge === true, which will determine which console.log prints
if(myAge) {
    console.log('Hello ' + myName + ' I\'m older than 30 too');
} else {
    console.log('Hello ' + myName + ' you\'re so young!');
}

//declaring variable with name of elName and assigning the value of the return value of invoking the function getElementById which will be the HTML element with the id of name
let elName = document.getElementById('name');
//set the innerHTML value of elName to the value of myName
elName.innerHTML = myName;
console.log(elName);

//declare a variable name myName and assign it the value of the string 'Zach'
let newName = 'Zach';

//declare a variable with the name of myArray and assigning the value of an array
let myArray = [newName, 'Horse', 'Cat', 'dog'];

//declare a new function expression that will take in a parameter called str, and call the function aler with an argument of the value of str
function newFunc(str) {
    alert(str);
}

//writing a for loop that loops through myArray for as many values as exist and console.log's each value
function forFunc() {
    //declare new variable called sentence and assign it the value of empty string
    let sentence = '';
    //write a for loop that will loop through myArray
    for(let i = 0; i < myArray.length; i++) { 
        // console.log(myArray[i]);
        //concatenate the value of sentence with the value of index of i and and space
        sentence += myArray[i] + ' ';
    }
    //invoke the newFunc function with an argument of the value of sentence which will create an alert with all values in myArray concatenated together
    newFunc(sentence);
}

//invoking or calling forFunc
forFunc();


// let myFunc = function(num) {
//     console.log(num + 2);
// };

// let callFunc = myFunc(10);
// console.log(callFunc);

// let newFunc = function(){
//     console.log(callFunc + 2);
// };

// newFunc();

