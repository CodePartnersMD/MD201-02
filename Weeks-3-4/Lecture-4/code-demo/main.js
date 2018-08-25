//declare a variable called wizardSchoolArray and assign it the value of an empty array
let wizardSchoolArray = [];

//find table by id
let elTable = document.getElementById('store-table');

//find the form by id
let elForm = document.getElementById('school-form');

//create a constructor to track wizard and witch schools
let WizardSchool = function(name, students, start, end, spellsPerCaster, minCasters, maxCasters){
    //track number of wizards and witches, start and end of training hours, minimum number of spells cast and maximum number of spells cast
    this.name = name;
    this.students = students;
    this.startTime = start;
    this.endTime = end;
    this.spellsPerCaster = spellsPerCaster;
    this.minCasters = minCasters;
    this.maxCasters = maxCasters;
    this.totalSpellsPerDay = 0;
    this.spellsPerHourArray = [];
    //create a method to calculate how many spells are cast per hour
    this.totalSpellsPerHour = function() {
        // Math.floor(Math.random() * (100 - 30)) + 30
        return (Math.floor(Math.random() * (this.maxCasters - this.minCasters)) + this.minCasters) * this.spellsPerCaster; 
    };
};

//instiate new instances of our wizardSchool constructor
let Hogwarts = new WizardSchool('Hogwarts', 200, 6, 14, 40, 20, 50);
let Magica = new WizardSchool('Magica', 50, 6, 14, 40, 30, 100);
let Azeroth = new WizardSchool('Azeroth', 50, 6, 14, 40, 30, 100);

//push instance of our Wizard School constructor to our wizardSchoolArray
wizardSchoolArray.push(Hogwarts, Magica, Azeroth);

//define a function that will display the header row for our school table
function displayTableHeader() {
    //create a row that will contain our table head elements
    let elRow = document.createElement('tr');
    //append our row to our table
    elTable.appendChild(elRow);
    //create a new table head element
    let elNameHeader= document.createElement('th');
    //append the head we just created to the row
    elRow.appendChild(elNameHeader);
    //set the inner html of our head element to a string 'Name of School'
    elNameHeader.innerHTML = 'Name of School'; 
    //create a for loop that will loop from 6 to 14 representing our start and end time;
    for(let i = 6; i < 14; i++) {
        //create a new table head element
        let elTableHeader = document.createElement('th');
        //append the new table head element to our table row header
        elRow.appendChild(elTableHeader);
        //set the inner html of our table head and concatenate a string ':00 Hours' to show it as a time
        elTableHeader.innerHTML = i + ':00 Hours';
    }
    //create a new table head element
    let elTotalHeader = document.createElement('th');
    //append the new table head element to our table header row
    elRow.appendChild(elTotalHeader);
    //set the inner html of our new head to the string 'Total'
    elTotalHeader.innerHTML = 'Total';
}

//define a new function that will take in a school object and populate the number of spells per hour
function displayTotalSpells(school) {
    //create a new row for our school instance
    let elRow = document.createElement('tr');
    //append the row to our table
    elTable.appendChild(elRow);
    //create a new table head element that will contain our school name
    let elRowHeader = document.createElement('th');
    //append the new table head element to our school row
    elRow.appendChild(elRowHeader);
    //set the inner html value to the school name
    elRowHeader.innerHTML = school.name;
    //create a new property with object.prototype that will store our spells per hour in an array
    // school.prototype.spellsPerHourArray = [];
    //create a loop that will start at the school start at the end time and end before the end time
    for(let i = school.startTime; i < school.endTime; i ++) {
        //declare result variable and assign it the return value of invoking the totalSpellsPerHour method on our WizardSchool instance
        let result = school.totalSpellsPerHour();
        //create a new table data element
        let elTableData = document.createElement('td');
        //append the new table data element to our school row
        elRow.appendChild(elTableData);
        //set the inner html of our new table data element to result
        elTableData.innerHTML = result;
        //reassign the value of the totalSpellsPerDay property by adding result
        school.totalSpellsPerDay += result;
        // *****
        school.spellsPerHourArray.push(result);
        // *****
    }
    //create a new table head element taht will contain our totals
    let elTotalTableData = document.createElement('th');
    //append our new table head element to our school row
    elRow.appendChild(elTotalTableData);
    //set the inner html of our table head element to our totalSpellsPerDay property
    elTotalTableData.innerHTML = school.totalSpellsPerDay;
}

// *****
//define a function that will display our footer with the total spells cast for every school per hour
function displayFooter() {
    //create footer row
    let elFooterRow = document.createElement('tr');
    //append our footer row to our table
    elTable.appendChild(elFooterRow);
    //create a table head element to contain out footer title
    let elFooterTitle = document.createElement('th');
    //append our th to our footer row
    elFooterRow.appendChild(elFooterTitle);
    elFooterTitle.setAttribute('class', 'footer');

    //display text in our footer title element
    elFooterTitle.innerHTML = 'Total';
    //declare a variable that will store our total spells per day for all schools
    let total = 0;
    //loop through for the amount of hours that our schools are open
    for(let i=0; i < 8; i++) {
        //declare a variable that will have the value and track the amount of spells per hour
        let totalSpellsPerHour = 0;
        for(let j=0; j < wizardSchoolArray.length; j++) {
            totalSpellsPerHour += wizardSchoolArray[j].spellsPerHourArray[i];
            console.log('inner for loop', wizardSchoolArray[j].name, j);
        }
        //create new th to contain our total spells per hour for all schools
        let elTotalSpellsPerHourFooter = document.createElement('th');
        elTotalSpellsPerHourFooter.setAttribute('class', 'footer');
        //append our th to our footer
        elFooterRow.appendChild(elTotalSpellsPerHourFooter);
        //set the inner html to the value of totalSpellsPerHour
        elTotalSpellsPerHourFooter.innerHTML = totalSpellsPerHour;
        //add totalSpellsPerHour to the value of our total variable
        total += totalSpellsPerHour;
    }
    console.log(total);
    //create a new th that will contain our total spells for every school for all day
    let elTotalSpellsPerDayFooter = document.createElement('th');
    elTotalSpellsPerDayFooter.setAttribute('class', 'footer');

    //append our new th to our footer row
    elFooterRow.appendChild(elTotalSpellsPerDayFooter);
    //assign the inner html of our total footer header to the value of our total variable
    elTotalSpellsPerDayFooter.innerHTML = total;
}
//*****


//declare new variable called schoolName and assign it the value of our input with the name of schoolName
let schoolName = elForm.schoolName;
let spellsPerCaster = elForm.spellsPerCaster;

//define function called createNewSchool to let user create a new school with form.
function createNewSchool() {
    //use prevent default method to prevent the page from refreshing
    // event.preventDefault();
    //remove our old footer before creating and appending a new one
    console.log('event firing', elTable.childNodes);
    elTable.removeChild(elTable.childNodes[elTable.childNodes.length - 1]);
    //declare a variable called newSchool with a new instantiated object of our constructor assigning the value of name to the user input from our form
    let newSchool = new WizardSchool(schoolName.value, 500, 6, 14, spellsPerCaster.value, 10, 100);
    //add our new school to the wizard array
    wizardSchoolArray.push(newSchool);
    //invoke our displayTotalSpells function passing in our new school instance
    displayTotalSpells(newSchool);
    //re run our display footer function after a new school is added
    displayFooter();
}

//attach an event listener to our form that will listen for a submit event and run our createNewSchool function
elForm.addEventListener('submit', createNewSchool);

//example of a click event
// let counter = 0;
// let elPTag = document.getElementById('click-me');
// elPTag.addEventListener('click', function() {
//     counter++;
//     if(counter >= 6) {
//         console.log('No more Clicking!!!!');
//         elPTag.removeEventListener('click');
//     } else {

//         console.log('I\'ve been clicked');
//     }
// });

//define a function that will populate our initial table
function populateTable() {
    //invoke our displayTableHeader function that will populate our table header
    displayTableHeader();
    //loop through our wizardSchoolArray that contains all of the instances of our constructor that we have already instantiated
    for(let i = 0; i < wizardSchoolArray.length; i++) {
        //call our displayTotalSpells function passing in the object at index of i in our wizardSchoolArray
        displayTotalSpells(wizardSchoolArray[i]);
    }
    //invoke our function that will display our total footer
    displayFooter();
}

//invoke our populate table function that will display our intitial table on page load including the header and pre-existing instances of our object constructor
populateTable();

//define a function that allows us add a prototype property on to our object constructor instances
// function addSpells(array) {
//     //use prototype to create a spells property on all of the instances of our object constructor 
//     WizardSchool.prototype.spells = array;
// }

// //define a function that will add a method to our constructor to combine all our spells into a single string
// function combineSpells() {
//     //use prototype to add a new property called stringOfSpells on to all of the instances of our constructor and assign it the value of empty string
//     WizardSchool.prototype.stringOfSpells = '';
//     //use prototype to add a method called combineSpells to all of the instances of our object constructor
//     WizardSchool.prototype.combineSpells = function() {
//         //write a for loop that will loop through our spells property array and concatenate each value together assigning it to the property of stringOfSpells
//         for(let i = 0; i < this.spells.length; i++) {
//             this.stringOfSpells += this.spells[i] + ', ';
//         }
//     };
// }

