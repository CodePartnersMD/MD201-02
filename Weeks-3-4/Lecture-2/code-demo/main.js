//declare a variable called wizardSchoolArray and assign it the value of an empty array
let wizardSchoolArray = [];

//create a constructor to track wizard and witch schools
let WizardSchool = function(name, students, start, end, minSpells, maxSpells){
    this.name = name;
    this.students = students;
    this.startTime = start;
    this.endTime = end;
    this.minSpells = minSpells;
    this.maxSpells = maxSpells;
};

//instiate new instances of our wizardSchool constructor
let Hogwarts = new WizardSchool('Hogwarts', 200, 8, 15, 20, 50);
let Magica = new WizardSchool('Magica', 6, 14, 30, 100);

//push instance of our Wizard School constructor to our wizardSchoolArray
wizardSchoolArray.push(Hogwarts, Magica);

//track number of wizards and witches, start and end of training hours, minimum number of spells cast and maximum number of spells cast

//create a method to calculate how many spells are cast per hour

//use prototype to calculate the total number of spells cast per school

//create a table that will display these numbers by hour and total