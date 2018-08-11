//declaring variable called myArray to be equal to an array with values
let myArray = ['Zach', 5, true, []];

//reassigning an array to include a nested array
myArray = ['Zach', 5, true, ['Patrice', 'TA', 5]];

//declaring variable called storeArray and assigning it to be equal to values with a nested array
let storeArray = ['Cookie Store', 'Bethesda', ['Alyssa', 'JD', 'Gary']]

//declaring a variable called myString and assigning it the value of a string
let myString = 'THIS IS A STRING';

//declaring a variable called newString and assiging it the value of an empty string
let newString = '';

//this loop will run for the length of the string
for(let i = 0; i < myString.length; i++) {
    //each iteration, newString will be re-assigned to the current value of newString and concatenate the index of i from myString
    newString = newString + myString[i].toLowerCase(); 
    //pring newString to the console
    console.log(newString);
}

console.log('New string', newString);

//newString should now equal 'this is a string'