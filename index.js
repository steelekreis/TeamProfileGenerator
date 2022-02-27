const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./utils/generateHTML.js');

const teamMembers = [];

function mainMenu() {
    inquirer.prompt ([
        {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['Add Engineer', 'Add Intern', 'All Done!']
        }
    ])
    .then(res => {
        switch(res.mainMenu) {
            case 'Add Engineer': 
                return addEngineer();
            case 'Add Intern': 
                return addIntern();
            default: 
                return buildTeam();
        }
    })
};

function addManager () {
    console.log(`Let's go!`);
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s employee id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
        },
    ])
    .then(res => {
        const {name, id, email, officeNumber} = res;
        let manager = new Manager( name, id, email, officeNumber);
        teamMembers.push(manager);
        mainMenu();
    })
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s employee id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineer\'s GitHub account?',
        },
    ])
    .then(res => {
        const {name, id, email, gitHub} = res;
        let engineer = new Engineer( name, id, email, gitHub);
        teamMembers.push(engineer);
        mainMenu();
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s employee id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
        },
    ])
    .then(res => {
        const {name, id, email, school} = res;
        let intern = new Intern( name, id, email, school);
        teamMembers.push(intern);
        mainMenu();
    })
};

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
    console.log(`Your team profile has been generated. It can be found in the dist folder.`);
};

function buildTeam() {
    writeToFile('./dist/team-profiles.html', generateHTML(teamMembers), err => {
        if (err) {
            console.log(err);;
        }
        console.log(`Your team profile has been generated. It can be found in the dist folder.`);
    });

};

addManager();