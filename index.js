// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) { fs.writeFile(fileName, generateMarkdown(data) + "\n", (error => error ? console.log(error) : console.log("Success"))); }

// TODO: Create a function to initialize app

// Function call to initialize app
init();
