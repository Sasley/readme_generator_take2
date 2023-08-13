// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(License) {
 let licenseChoice = license.license;
 let yourLicense = ' ${data.license}'
 if(licenseChoice === 'MIT') {
  license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

 }
  else if (licenseChoice==='GPL') { license = '![https://img.shields.io/badge/License-GNU%20GPL-blue]'

  }
  else if (licenseChoice==='Apache') { license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
}
    
  
  }
  
  else {
    license.license = "None"
  }

  return licenseChoice;
 }

 ${data.license}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}
  #License:

  
  ##Table of Contents
  -[Title](#title)
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Test](#test)
  -[Questions](#questions)

  ##Title:
  ${data.title}

  ##Description:
  ${data.description}


  ##Installation:
  ${data.installation}


  ##Usage:
  ${data.usage}


  ##Contributing:
  ${data.resources}


  
  ##Test:
  ${data.test}


  ##Github:
  ${data.github}


  
`
}

module.exports = generateMarkdown;
