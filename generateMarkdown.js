// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license = 'MIT';
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/license-MIT-blue';
  } else {
    return '';
  }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const license = 'MIT';
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else {
    return '';
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const license = 'MIT';
  if (license === 'MIT') {
    return 'MIT License';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.tableOfContents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  $(renderLicenseBadge)
  $(renderLicenseLink)
  $(renderLicenseSection)
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
  ## GitHub Username
  ${data.username}
  ## Email Address
  ${data.email}
  ## License
  ${data.license}
  
`;
}

export default generateMarkdown;
