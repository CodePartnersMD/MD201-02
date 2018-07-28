// let myName = prompt('What\'s your name?');
// let myAge = confirm('Are you older than 30');
// let myAlert = alert('this is an alert');

// console.log(myName);
// console.log(myAge);
// console.log(myAlert);

// if(myAge) {
//     console.log('Hello ' + myName + ' I\'m older than 30 too');
// } else {
//     console.log('Hello ' + myName + ' you\'re so young!');
// }

// alert('Hello World');

// let elName = document.getElementById('name');

// elName.innerHTML = myName;
// console.log(elName);




//declare a variable name myName and assign it the value of the string 'Zach'
let myName = 'Zach';
//declaring a variable with the name myFunc and assigning it the value of a function
let myFunc = function() {
    //return a string of 'hello'
    return 'hello';
};

//declare a variable with the name of myArray and assigning the value of an array
let myArray = [myName, 'Horse', 'Cat', 'dog'];

function newFunc(str) {
    alert(str);
}

//writing a for loop that loops through myArray for as many values as exist and console.log's each value
function forFunc() {
    let sentence = '';
    for(let i = 0; i < myArray.length; i++) { 
        // console.log(myArray[i]);
        sentence += myArray[i] + ' ';
    }
    newFunc(sentence);
}

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

