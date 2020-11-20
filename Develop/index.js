const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('./utils/generate-site');


// array of questions for user
const questions = () => {
    return inquirer.prompt([
            // TITLE
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of your README? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the title')
                    return false
                }
            }
        },
            // DESCRIPTION
        {
            type: 'input',
            name: 'description',
            message: 'Description of your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Enter a table of contents',
        }
    ]);
};

// function to initialize program
function init() {
    questions()
        .then(questionsData => {
            return generateMarkdown(questionsData);
        })
        .then(writeMarkDown => {
            return writeFile(writeMarkDown);
        })
}

// function call to initialize program
init();

