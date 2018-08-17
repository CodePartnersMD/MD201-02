//declare a variable called wizardSchoolArray and assign it the value of an empty array
let wizardSchoolArray = [];

//find table by id
let elTable = document.getElementById('store-table');

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
    //create a method to calculate how many spells are cast per hour
    this.totalSpellsPerHour = function() {
        // Math.floor(Math.random() * (100 - 30)) + 30
        return (Math.floor(Math.random() * (this.maxCasters - this.minCasters)) + this.minCasters) * this.spellsPerCaster; 
    };
};

//instiate new instances of our wizardSchool constructor
let Hogwarts = new WizardSchool('Hogwarts', 200, 8, 15, 40, 20, 50);
let Magica = new WizardSchool('Magica', 50, 6, 14, 40, 30, 100);

//push instance of our Wizard School constructor to our wizardSchoolArray
wizardSchoolArray.push(Hogwarts, Magica);

//write a for loop that calls our totalSpellsPerHour method for however many hours the wizards ard training
// for(let i = Hogwarts.startTime; i < Hogwarts.endTime; i++) {
//     let result = Hogwarts.totalSpellsPerHour();
//     console.log(result);
// }

function displayTotalSpells(school) {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    for(let i = school.startTime; i < school.endTime; i ++) {
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = school.totalSpellsPerHour();
    }
}

function populateTable() {
    for(let i = 0; i < wizardSchoolArray.length; i++) {
        displayTotalSpells(wizardSchoolArray[i]);
    }
}

populateTable();

// displayTotalSpells(Hogwarts);
// displayTotalSpells(Magica);
//use prototype to calculate the total number of spells cast per school

//create a table that will display these numbers by hour and total