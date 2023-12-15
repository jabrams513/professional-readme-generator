// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: (answer) => {
        if (answer === "") {
            return "Title cannot be blank!"
        }
        else {
            return true
        }
    }
},
{
    type: "list",
    message: "What license did you use?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL", "None"]
},
{
    type: "input",
    message: "What is the description of your project?",
    name: "description",
    validate: (answer) => {
        if (answer.length < 10) {
            return "Description must have at least 9 characters!"
        }
        else {
            return true
        }
    }
},
{
    type: "input",
    message: "How do you install your project?",
    name: "installation",
    default: "Clone the repository and run 'npm i'"
},
{
    type: "input",
    message: "How should your project be used?",
    name: "usage",
},
{
    type: "input",
    message: "Is there anyone you'd like to credit with a contribution to your project?",
    name: "contributions",
},
{
    type: "input",
    message: "Please provide instructions on how to test this application",
    name: "tests",
},
{
    type: "input",
    message: "Please enter your GitHub username: ",
    name: "username",
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("Please enter your GitHub username!");
            return false;
        }
    }
},
{
    type: "input",
    message: "Please enter your email: ",
    name: "email",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter your email!");
            return false;
        }
    }
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { fs.writeFile(fileName, generateMarkdown(data) + "\n", (error => error ? console.log(error) : console.log("Success"))); }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("CLIgeneratedREADME.md", answers);
        })
}

// Function call to initialize app
init();
