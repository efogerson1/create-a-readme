// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
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
 
  }

  return badge;
}

const licenseBadge = getLicenseBadge(packageJson);
console.log(licenseBadge);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

function getLicenseLink(packageJson) {
  const license = packageJson.license;
  let link;

  switch (license) {
      case "MIT":
          link = "https://opensource.org/licenses/MIT";
          break;
      case "Apache-2.0":
          link = "https://opensource.org/licenses/Apache-2.0";
          break;
      case "ISC":
          link = "https://opensource.org/licenses/ISC";
          break;
  }

  return link;
}

const licenseLink = getLicenseLink(packageJson);
console.log(licenseLink);
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

function generateLicenseSection(packageJson) {
  const license = packageJson.license;
  let licenseSection;

  switch (license) {
      case "MIT":
          licenseSection = `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`;
          break;
      case "Apache-2.0":
          licenseSection = `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
`;
          break;
      case "ISC":
          licenseSection = `
## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
`;
  }

  return licenseSection;
}

const licenseSection = generateLicenseSection(packageJson);
console.log(licenseSection);


// TODO: Create a function to generate markdown for README
function generateMarkdown(packageJson) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  getLicenseBadge,
  getLicenseLink,
  generateLicenseSection,
};

// module.exports = generateMarkdown;
