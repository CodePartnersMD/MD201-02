let myName = prompt('What\'s your name?');
let myAge = confirm('Are you older than 30');
let myAlert = alert('this is an alert');

console.log(myName);
console.log(myAge);
console.log(myAlert);

if(myAge) {
    console.log('Hello ' + myName + ' I\'m older than 30 too');
} else {
    console.log('Hello ' + myName + ' you\'re so young!');
}

alert('Hello World');

let elName = document.getElementById('name');

elName.innerHTML = myName;
console.log(elName);


// let myFunc = function(num) {
//     console.log(num + 2);
// };

// let callFunc = myFunc(10);
// console.log(callFunc);

// let newFunc = function(){
//     console.log(callFunc + 2);
// };

// newFunc();

