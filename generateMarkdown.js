// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const packageJson = require('./package.json');

function getLicenseBadge(packageJson) {
  const license = packageJson.license;
  let badge;

  switch (license) {
      case "MIT":
          badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
      case "Apache-2.0":
          badge = "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          break;
      case "ISC":
          badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
          break;
          case 'None':
            badge = '';
            break;
  }

  return badge;
}

const licenseBadge = getLicenseBadge(packageJson);

/* const licenseBadge = getLicenseBadge(packageJson); */

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function getLicenseLink(license) {

  if (license !== "None") {
    return `-[License](#License)`
  }

  return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


function generateLicenseSection(license) {
  let licenseSection;

  switch (license) {
      case "MIT License":
          licenseSection = `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`;
          break;
      case "Apache License 2.0":
          licenseSection = `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
`;
          break;
      case "ISC License":
          licenseSection = `
## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
`
break;
case "None":
    licenseSection = ""
  }

  return licenseSection;
}





// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contributing, testing, questions, github, linkedin, license }) {
  

  return `# ${title}

${licenseBadge}

# Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [GitHub](#GitHub)
- [LinkedIn](#LinkedIn)
- [License](#${getLicenseLink(license)})
- [Questions](#Questions)

## Description


## Installation instructions: 


## Usage


## Contribution Guidelines:


## Testing instructions:


## Questions?:


${generateLicenseSection(license)}
`;
}

module.exports = {
  generateMarkdown
};


