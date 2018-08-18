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


//write a for loop that calls our totalSpellsPerHour method for however many hours the wizards ard training
// for(let i = Hogwarts.startTime; i < Hogwarts.endTime; i++) {
//     let result = Hogwarts.totalSpellsPerHour();
//     console.log(result);
// }

function displayTableHeader() {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elNameHeader= document.createElement('th');
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Name of School'; 
    for(let i = 6; i < 14; i++) {
        let elTableHeader = document.createElement('th');
        elRow.appendChild(elTableHeader);
        elTableHeader.innerHTML = i + ':00 Hours';
    }
    let elTotalHeader = document.createElement('th');
    elRow.appendChild(elTotalHeader);
    elTotalHeader.innerHTML = 'Total';
}

function displayTotalSpells(school) {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
    elRowHeader.innerHTML = school.name;
    for(let i = school.startTime; i < school.endTime; i ++) {
        let result = school.totalSpellsPerHour();
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        school.totalSpellsPerDay += result;
    }
    let elTotalTableData = document.createElement('th');
    elRow.appendChild(elTotalTableData);
    elTotalTableData.innerHTML = school.totalSpellsPerDay;
    console.log(school.name, school.totalSpellsPerDay);
}

let schoolName = elForm.schoolName;

//define function called createNewSchool to let user create a new school with form.
function createNewSchool(event) {
    event.preventDefault();
    let newSchool = new WizardSchool(schoolName.value, 500, 6, 14, 50, 10, 100);
    console.log(newSchool);
    displayTotalSpells(newSchool);
}

elForm.addEventListener('submit', createNewSchool);

console.log(elForm.schoolName);


function populateTable() {
    displayTableHeader();
    for(let i = 0; i < wizardSchoolArray.length; i++) {
        displayTotalSpells(wizardSchoolArray[i]);
    }
}

populateTable();

// displayTotalSpells(Hogwarts);
// displayTotalSpells(Magica);
//use prototype to calculate the total number of spells cast per school

//create a table that will display these numbers by hour and total