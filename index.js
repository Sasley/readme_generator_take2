// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/README.md");

// prompt questions
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'Project title?',  
       },
       {
        type: 'input',
        name: 'desciption',
        message: 'Type detail desciption of your project answering the what, why, and how of your project.',  
       },
       {
           type: 'input',
           name: 'installation',
           message: 'What tools are required to install your project? ',  
       },
       {
           type: 'input',
           name: 'usage',
           message: 'Provide instructions on how to use your project.',  
       },
       {
           type: 'list',
           name: 'license',
           message: 'License?',
           choices: ['MIT', 'ISC', 'GNUPLv3'],
           filter(val){
               return val.toLowerCase();
           } 
           {
            type: 'input',
            name: 'Contribution',
            message: 'Name of Contributors and or resources used. ',  
           },
           {
            type: 'input',
            name: 'Test',
            message: ' Resource used to test project? ', 
            {
                type: 'input',
                name: 'Questions',
                message: 'Please type your Github account name. ',  
            },
        },
           
          }   
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
