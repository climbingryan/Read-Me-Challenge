const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//const fs = require('fs');
// const generateMarkDown = require('./utils/generateMarkdown')

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

// function to write README file
    // function writeToFile(fileName, data) {

    // }

    // fs.writeFile('./develop/dist/readme.md', , err => {
    //     if (err) throw err;
    //     console.log('File has been saved');
    // })

// function to initialize program
function init() {
    questions()
        // .then(x => {
        //     return generateMarkdown(x);
        // })
        // .then(writeMarkDown => {
        //     return writeFile(writeMarkDown);
        // })
}

// function call to initialize program
init();

