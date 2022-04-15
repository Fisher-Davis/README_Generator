
console.log('Guess what??? We are about to generate a professional readme file.')
// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What do you want the title of your file to be?(do not include ".md"',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Write a brief description about the readme.',
        name: 'description',
    },    
    
    {
        type: 'input',
        message: 'What is this project used for?',
        name: 'usage',
    },

    {
        type: 'list',
        message:'Choose what licenses you used.',
         choices: [
             "MIT",
             "GNU",
             "ISC",
             "Mozilla",
         ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who helped create this project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What do I do if I have an issue?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Please enter your Github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'please list your email',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data) 


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
        
            writeToFile("README.md", generateMarkdown(data)) 
            console.log('Congrats! you have successfully created a README file!!')
    })
}    

// Function call to initialize app
init();

