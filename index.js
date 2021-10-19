const inquirer = require('inquirer');
const fs = require('fs');
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
    getEmployees().then(employees => {
        console.log("writing website to file...");

        // generate HTML and CSS
        let html = generateWebsite(employees);
        let css = generateCSS();

        // Write generated text to file
        let cb = err => err ? console.log(err) : console.log("success") ;
        let htmlPromise = fs.writeFileSync("./dist/index.html", html);
        let cssPromise = fs.writeFileSync("./dist/style.css", css);

        console.log("all writes finished.");
    });

    // =================== Helper functions ======================
    async function getEmployees() {
        let employees = [];

        // Get initial questions
        let employeeGeneralResponse = await inquirer.prompt(generalQuestions);

        // Ask specialized questions
        let employee;
        switch(employeeGeneralResponse.role) {
            case "Manager":
                let managerResponse = await inquirer.prompt(managerQuestions);
                employee = new Manager(
                    employeeGeneralResponse.name,
                    employeeGeneralResponse.id,
                    employeeGeneralResponse.email,
                    managerResponse.office
                );
                break;

            case "Engineer":
                let engineerResponse = await inquirer.prompt(engineerQuestions);
                employee = new Engineer(
                    employeeGeneralResponse.name,
                    employeeGeneralResponse.id,
                    employeeGeneralResponse.email,
                    engineerResponse.github
                );
                break;

            case "Intern":
                let internResponse = await inquirer.prompt(internQuestions);
                employee = new Intern(
                    employeeGeneralResponse.name,
                    employeeGeneralResponse.id,
                    employeeGeneralResponse.email,
                    internResponse.school
                );
                break;

            default:
                employee = new Employee(
                    employeeGeneralResponse.name,
                    employeeGeneralResponse.id,
                    employeeGeneralResponse.email
                );
        }
        employees.push(employee);

        // Ask if there are more employees
        let moreEmployeesResponse = await inquirer.prompt({ name: "more", type: "confirm", message: "Do you have any other employees to add?"});

        // If there are, rerun this function.
        if(moreEmployeesResponse.more) {
            return employees.concat(await getEmployees());
        }
        return employees;
        
    }

    


}

init();