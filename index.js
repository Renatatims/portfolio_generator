const inquirer = require('inquirer');
const fs = require('fs');
const generateIndex = require('./generateIndex');
const questions = ([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your phone number?',
        name: 'phone'
    },
    {
        type: 'input',
        message: 'What is your Linkedin URL?',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your GitHub Url?',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'email'
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

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.html`, data, (err) => {
        err ? console.log(err) : console.log(`Your html file, ${fileName}.html, was successfully generated!`);
    })
};

// Function to initialize the application
async function init() {
    let userAnswers = await userInput();
    writeToFile((userAnswers.fileName), (generateIndex(userAnswers)));
}



init();

//Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//https://levelup.gitconnected.com/asynchronous-javascript-3-ways-5c5434819a14