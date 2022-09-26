const inquirer = require('inquirer');
const questions = ([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your Linkedin?',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your GitHub Url?',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your main project?',
        name: 'mainProject'
    },
    {
        type: 'input',
        message: 'What is your featured project 1?',
        name: 'project1'
    },
    {
        type: 'input',
        message: 'What is your featured project 2?',
        name: 'project2'
    },
    {
        type: 'input',
        message: 'What is your featured project 3?',
        name: 'project3'
    },
    {
        type: 'input',
        message: 'What is your featured project 4?',
        name: 'project4'
    },
    {
        type: 'input',
        message: 'What is the name of this file?',
        name: 'fileName'
    },
]);


// User Input Function - return answers
function userInput() {
return inquirer.prompt(questions);
}

userInput();