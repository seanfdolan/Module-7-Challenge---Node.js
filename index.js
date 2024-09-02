// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    if (title === '') {
        return 'Please enter a title for your project.';
    } else {
        return '';
    }
    if (description === '') {
        return 'Please enter a description for your project.';
    } else {
        return '';
    }
    if (tableOfContents === '') {
        return 'Please enter a table of contents for your project.';
    } else {
        return '';
    }
    if (installation === '') {
        return 'Please enter installation instructions for your project.';
    } else {
        return '';
    }
    if (usage === '') {
        return 'Please enter usage information for your project.';
    } else {
        return '';
    }
    if (license === '') {
        return 'Please enter a license for your project.';
    } else {
        return '';
    }
    if (contributing === '') {
        return 'Please enter contributing guidelines for your project.';
    } else {
        return '';
    }
    if (tests === '') {
        return 'Please enter test instructions for your project.';
    } else {
        return '';
    }
    if (questions === '') {
        return 'Please enter questions for your project.';
    } else {
        return '';
    }
    if (username === '') {
        return 'Please enter your GitHub username.';
    } else {
        return '';
    }
    if (email === '') {
        return 'Please enter your email address.';
    } else {
        return '';
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (fileName === '') {
        return 'Please enter a file name for your project.';
    }
    if (data === '') {
        return 'Please enter data for your project.';
    }
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    const inquirer = require('inquirer');
    const fs = require('fs');
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init(
    const generateMarkdown = require('./utils/generateMarkdown');
    const fs = require('fs');
    const inquirer = require('inquirer');
    const questions = require('./utils/questions');
    const writeToFile = require('./utils/writeToFile');
    const init = require('./utils/init');
    const renderLicenseBadge = require('./utils/renderLicenseBadge');
    const renderLicenseLink = require('./utils/renderLicenseLink');
    const renderLicenseSection = require('./utils/renderLicenseSection');
    const generateMarkdown = require('./utils/generateMarkdown');

);
