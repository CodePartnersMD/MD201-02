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



