//declare a variable and assign the value of an empty array that will hold all of our image objects
let heroImageArray = [];

//use getElementById to find our image tags in html
let imageOne = document.getElementById('image1');
let imageTwo = document.getElementById('image2');
let imageThree = document.getElementById('image3');

//create an object constructor that will take in parameters, and store properties of an image
let HeroImage = function(name, universe, filePath) {
    this.name = name;
    this.universe = universe;
    this.filePath = filePath;
    this.clicked = 0;
    this.shown = 0;
};

//instantiate our constructor to create multiple instances/objects of hero images
let Thor = new HeroImage('Thor', 'Marvel', './assets/thor.jpg');
let Thanos = new HeroImage('Thanos', 'Marvel', './assets/thanos.jpg');
let BlackPanther = new HeroImage('Black Panther', 'Marvel', './assets/black-panther.jpg');
let Hulk = new HeroImage('Hulk', 'Marvel', './assets/hulk.jpg');
let DeadPool = new HeroImage('Dead Pool', 'Marvel', './assets/deadpool.jpeg');
let DrStrange = new HeroImage('Dr Strange', 'Marvel', './assets/drstrange.jpg');

//push our new instances/objects to our imageArray
heroImageArray.push(Thor, Thanos, BlackPanther, Hulk, DeadPool, DrStrange);

//define a function that will select a random image object from our heroImageArray
function randomImage() {
    //declare a variable that will calculate a random whole number between 0 and the length of our image array
    let randomNumber = Math.floor(Math.random() * heroImageArray.length);
    //declare a variable that will store the image object at the index of our random number
    let imageIndex = heroImageArray[randomNumber];
    //increment the shown property of our random image object by 1
    imageIndex.shown += 1;
    //return our random image object
    return imageIndex;
}

//declaring variables that will store the return value for our random image function
let firstImage = randomImage();
let secondImage = randomImage();
let thirdImage = randomImage();

//set the src attribute of our image tags to the filepath of our new images
imageOne.src = firstImage.filePath;
imageTwo.src = secondImage.filePath;
imageThree.src = thirdImage.filePath;

//define event handler function that will increment the times clicked for the firstImage
function  imageClicked() {
    firstImage.clicked += 1;
    console.log('first image clicked property', firstImage.clicked);
}

//attach an event listener to our imageOne html tag and listen for a click event that will invoke our event handler function
imageOne.addEventListener('click', imageClicked);

console.log('first image shown', firstImage.shown);
console.log('second image shown', secondImage.shown);
console.log('third image shown', thirdImage.shown);
