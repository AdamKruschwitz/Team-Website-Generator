const inquirer = require('inquirer');
const generateWebsite = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generalQuestions = [
    {
        name: "name",
        message: "What is your employees name?"
    },
    {
        name: "id",
        message: "What is your employees ID?"
    },
    {
        name: "email",
        message: "What is your employees email?"
    },
    {
        name: "role",
        type: "list",
        message: "What is your employees role?",
        choices: [
            "Employee",
            "Engineer",
            "Intern",
            "Manager"
        ]
    }
];

const engineerQuestions = [
    {
        name: "github",
        message: "What is your engineer's github profile link?"
    }
];

const internQuestions = [
    {
        name: "school",
        message: "What is your intern's school?"
    }
];

const managerQuestions = [
    {
        name: "office",
        message: "Which office does this manager manage?"
    }
]



// Initialize the function
function init() {
    //TODO
}

init();