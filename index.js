// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

// prompt questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
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
        type: 'input',
        name: 'contribution',
        message: 'List of contributors and resources used.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What program did you use to test your project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Github account which you can be contacted.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license?',
        choices: ['MIT','GPL','Apache'],
        filter(val){
        return val.toLowerCase();
    },
},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// function to initialize app
// function init() {
//     inquirer.prompt(questions).then((response) => {
//         console.log("Creating Professional README.md File...");
        function init() {
            inquirer.prompt(questions)
            .then(function (userInput) {
                console.log(userInput)
                
            });
        }

        // Function call to initialize app
        init();
