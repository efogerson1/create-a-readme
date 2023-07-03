// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


const {generateMarkdown} = require('./generateMarkdown');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license was used for your project?',
      choices: ['MIT License', 'Apache License 2.0', 'ISC License', 'None']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const markdownPageContent = generateMarkdown(answers);

    fs.writeFile('README2.md', markdownPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();





