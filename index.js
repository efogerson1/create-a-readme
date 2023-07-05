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
      name: 'description',
      message: 'What is the description of your application?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions for your application:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information for your application:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What are testing protocalls for this application?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'How can users reach you for additional questions?',
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





