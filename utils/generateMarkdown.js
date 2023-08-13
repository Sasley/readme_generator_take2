// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}
//  let license =''
//  if (license != "None"){
//   license = "![License MIT](https://img.shields.io/github/license/:user/:repo)";
//   else if (licenseChoice==='MIT'){ license = "![]"

//   }
//   else if (licenseChoice==='GPL'){ license = "![GPL]" 
// }
    
//   }
//   else if (licenseChoice==='Apache'){
    
//   }
//   else {
//     license.license = "None"
//   }

//   return licenseChoice;
//  }


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
  -[Resource](#resources)
  -[Github](#github)

  ##Title:
  ${data.title}
  ##Description:
  ${data.description}
  ##Installation:
  ${data.installation}
  ##Usage:
  ${data.usage}
  ##Resources:
  ${data.resources}
  ##Github:
  ${data.github}
  ##License:
  ${data.license}
`;
}

module.exports = generateMarkdown;
