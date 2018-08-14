//declare variable called storeArray and assign it the value of an empty array
let storeArray = [];

//declaring variable called elBody and assigning it the value of the element with id of my-body
let elBody = document.getElementById('my-body');

//declaring a variable called elStoreTitle assigning it the value of the html element with id of store-title
let elStoreTitle = document.getElementById('store-title');
console.log(elStoreTitle);

//declaring a variable called StoreOne and assigning it the value of an object Literal
let StoreOne = {
    location: 'Bethesda',
    name: 'Gary\'s Cookies',
    employees: 10,
    hours: '6am - 10pm',
    type: 'Chocolate',
    inventory: 100,
};

//printing the location property of StoreOne
console.log(StoreOne.location);
console.log(StoreOne);

let StoreTwo = {
    location: 'Baltimore',
    name: 'Crab Cookies',
    employees: 5,
    hours: '6am - 10pm',
    type: 'Crab',
    inventory: 2,
};

let StoreThree = {
    location: 'Baltimore',
    name: 'Fish Cookies',
    employees: 5,
    hours: '6am - 10pm',
    type: 'Crab',
    inventory: 2,
};

console.log(StoreTwo.type);
console.log(StoreTwo);

//pushing both of our store objects into the storeArray
storeArray.push(StoreOne, StoreTwo, StoreThree);

//printing storeArray at index one and printing the location property using dot notation
console.log('storeOne', storeArray[0].location);

//declaring a variable called elStoreTitle assiging the value of a new h1 element
let elStoreOneTitle = document.createElement('h1');
elBody.appendChild(elStoreOneTitle);

console.log(elStoreOneTitle);

//display the store Title to html
elStoreOneTitle.innerHTML = StoreOne.name;

//declaring a variable called elStoreTitle assiging the value of a new h1 element
let elStoreTwoTitle = document.createElement('h1');
elBody.appendChild(elStoreTwoTitle);

console.log(elStoreTwoTitle);

//display the store Title to html
elStoreTwoTitle.innerHTML = StoreTwo.name;

function displayStoreTitles() {
    for(let i = 0; i < storeArray.length; i++) {
        let elStoreTitle = document.createElement('h1');
        elStoreTitle.setAttribute('class', 'store-title');
        elBody.appendChild(elStoreTitle);
        elStoreTitle.innerHTML = storeArray[i].name;
    }
}

displayStoreTitles();






