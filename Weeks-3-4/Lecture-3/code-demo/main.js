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
    }
    //create a new table head element taht will contain our totals
    let elTotalTableData = document.createElement('th');
    //append our new table head element to our school row
    elRow.appendChild(elTotalTableData);
    //set the inner html of our table head element to our totalSpellsPerDay property
    elTotalTableData.innerHTML = school.totalSpellsPerDay;
}

//declare new variable called schoolName and assign it the value of our input with the name of schoolName
let schoolName = elForm.schoolName;

//define function called createNewSchool to let user create a new school with form.
function createNewSchool(event) {
    //use prevent default method to prevent the page from refreshing
    event.preventDefault();
    //declare a variable called newSchool with a new instantiated object of our constructor assigning the value of name to the user input from our form
    let newSchool = new WizardSchool(schoolName.value, 500, 6, 14, 50, 10, 100);
    console.log(newSchool);
    //invoke our displayTotalSpells function passing in our new school instance
    displayTotalSpells(newSchool);
}

//attach an event listener to our form that will listen for a submit event and run our createNewSchool function
elForm.addEventListener('submit', createNewSchool);

//define a function that will populate our initial table
function populateTable() {
    //invoke our displayTableHeader function that will populate our table header
    displayTableHeader();
    //loop through our wizardSchoolArray that contains all of the instances of our constructor that we have already instantiated
    for(let i = 0; i < wizardSchoolArray.length; i++) {
        //call our displayTotalSpells function passing in the object at index of i in our wizardSchoolArray
        displayTotalSpells(wizardSchoolArray[i]);
    }
}

//invoke our populate table function that will display our intitial table on page load including the header and pre-existing instances of our object constructor
populateTable();
