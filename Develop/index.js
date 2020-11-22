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
            // INSTALLATION *******
        {
            type: 'text',
            name: 'install',
            message: 'Type in some installation intructions: (Max-5)'
        },
            // USAGE
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instructions: '
        },
            // Contributing ********
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contributing intructions: '
        },
            // Tests
        {
            type: 'type',
            name: 'tests',
            message: 'Test out the code'
        },
            // Questions Github
        {
            type: 'text',
            name: 'github',
            message: 'What is your github username?'
        },
            // Questions Email
        {
            type: 'input',
            name: 'email',
            message: 'What is your current email?'
        },
            // Credits
        {
            type: 'input',
            name: 'credits',
            message: 'Who contributed to making this project?'
        },
            // License
        {
            type: 'checkbox',
            name: 'license',
            message: 'What is the license for this project?',
            choices: ['MIT', 'Apache', 'GPL']
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

