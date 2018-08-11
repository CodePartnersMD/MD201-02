let myArray = ['Zach', 5, true, []];

myArray = ['Zach', 5, true, ['Patrice', 'TA', 5]];

let storeArray = ['Cookie Store', 'Bethesda', ['Alyssa', 'JD', 'Gary']]

let myString = 'THIS IS A STRING';

// myString.toLowerCase()

let newString = '';
//this loop will run for the lenght of the string
for(let i = 0; i < myString.length; i++) {
    newString = newString + myString[i].toLowerCase() 
    console.log(newString);
}

console.log('New string', newString)

//newString should now equal 'this is a string'