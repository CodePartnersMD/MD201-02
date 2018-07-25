let myName = prompt('What\'s your name?');
let myAge = confirm('Are you older than 30');

console.log(myName);
console.log(myAge);

if(myAge) {
    console.log('Hello ' + myName + ' I\'m older than 30 too');
} else {
    console.log('Hello ' + myName + ' you\'re so young!');
}

alert('Hello World');


