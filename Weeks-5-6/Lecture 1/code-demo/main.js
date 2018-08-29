//declare a variable and assign the value of an empty array that will hold all of our image objects
let heroImageArray = [];

//use getElementById to find our image tags in html
// let imageOne = document.getElementById('image1');
// let imageTwo = document.getElementById('image2');
// let imageThree = document.getElementById('image3');

//find our image container element using document.getElementById
let elImageContainer = document.getElementById('image-container');

//create an object constructor that will take in parameters, and store properties of an image
let HeroImage = function(name, universe, filePath, id) {
    this.name = name;
    this.universe = universe;
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
};

//instantiate our constructor to create multiple instances/objects of hero images
let Thor = new HeroImage('Thor', 'Marvel', './assets/thor.jpg', 'thor');
let Thanos = new HeroImage('Thanos', 'Marvel', './assets/thanos.jpg', 'thanos');
let BlackPanther = new HeroImage('Black Panther', 'Marvel', './assets/black-panther.jpg', 'blackPanther');
let Hulk = new HeroImage('Hulk', 'Marvel', './assets/hulk.jpg', 'hulk');
let DeadPool = new HeroImage('Dead Pool', 'Marvel', './assets/deadpool.jpeg', 'deadPool');
let DrStrange = new HeroImage('Dr Strange', 'Marvel', './assets/drstrange.jpg', 'drStrange');

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

let firstImage;
let secondImage;
let thirdImage;

//define a function that will display our random images
function displayImages() {
    for(let i =0; i < 3; i++) {
        let elImage = document.createElement('img');
        let imageObject = randomImage();
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('id', imageObject.id);
        elImage.src = imageObject.filePath;
        elImage.addEventListener('click', imageClicked);
        if(i === 0) {
            firstImage = imageObject;
        } else if(i === 1) {
            secondImage = imageObject;
        } else {
            thirdImage = imageObject;
        }
    }
}


displayImages();
console.log(elImageContainer);
console.log('images', firstImage, secondImage, thirdImage);

//declaring variables that will store the return value for our random image function
// let firstImage = randomImage();
// let secondImage = randomImage();
// let thirdImage = randomImage();

// //set the src attribute of our image tags to the filepath of our new images
// imageOne.src = firstImage.filePath;
// imageTwo.src = secondImage.filePath;
// imageThree.src = thirdImage.filePath;

//define event handler function that will increment the times clicked for the firstImage
function  imageClicked(event) {
    console.log('event', event.target.id);
}

//attach an event listener to our imageOne html tag and listen for a click event that will invoke our event handler function
// imageOne.addEventListener('click', imageClicked);

// console.log('first image shown', firstImage.shown);
// console.log('second image shown', secondImage.shown);
// console.log('third image shown', thirdImage.shown);
