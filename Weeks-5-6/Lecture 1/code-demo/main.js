//declare a variable and assign the value of an empty array that will hold all of our image objects
let heroImageArray = [];

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
    this.addClicks;
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
    //return our random image object
    return imageIndex;
}

//define event handler function that will increment the times clicked for the firstImage
function  imageClicked(event) {
    //if the id of the target html element matches the first, second or third image object, increment that objects clicked property by 1
    if(event.target.id === firstImage.id) {
        firstImage.clicked += 1;
    } else if(event.target.id === secondImage.id) {
        secondImage.clicked += 1;
    } else if(event.target.id === thirdImage.id) {
        thirdImage.clicked += 1;
    }
    //invoke our display images function to display 3 new images
    displayImages();
    console.log('event target', event.target);
    console.log('event', firstImage.clicked, secondImage.clicked, thirdImage.clicked);
}

//declare three variables that will eventually hold our image objects that are being displayed on the page
let firstImage;
let secondImage;
let thirdImage;

//define a function that will display our random images
function displayImages() {
    //re-assign the image container html to an empty string so that it removes our previously shown images
    elImageContainer.innerHTML = '';
    //create a loop that will iterate 3 times to display 3 images
    for(let i =0; i < 3; i++) {
        //create a new img html element
        let elImage = document.createElement('img');
        //declare a variable and assign it the value that is returned from invoking randomImage function
        let imageObject = randomImage();
        //append our img tag to image container
        elImageContainer.appendChild(elImage);
        //set an id attribute to our new img element
        elImage.setAttribute('id', imageObject.id);
        //change the src attribute on our new image element to the filepath property on our current image object
        elImage.src = imageObject.filePath;
        //attach an event listener to our new img element
        elImage.addEventListener('click', imageClicked);
        //increment the shown property on our current image object by 1
        imageObject.shown += 1;
        //write conditionals that will check what iteration our for loop is on and assign our firstImage, secondImage, and thirdImage variables the value of our current image object
        if(i === 0) {
            firstImage = imageObject;
        } else if(i === 1) {
            secondImage = imageObject;
        } else {
            thirdImage = imageObject;
        }
    }
}

//invoke our display images function that will dispaly our initial 3 images
displayImages();
console.log(elImageContainer);
console.log('images', firstImage, secondImage, thirdImage);

