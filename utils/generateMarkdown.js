// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge() {
 const licenseBadge = "";
 if (license === 'MIT') {
  let license = "![License Badge] (https://img.shields.io/badge/License-MIT-yellow.svg)" ;
 }
  
else if (license ==='GPL'){
     license = "![License Badge](https://img.shields.io/badge/License-GNU%20GPL-blue)";
}
     
  
  else if (license ==='Apache') {
     license = "![License Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }

  else (license)
    licenseBadge = " None ";
}
  // return licenseBadge;

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
