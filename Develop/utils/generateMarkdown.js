



// function to generate markdown for README
function generateMarkdown(data) {

  var tableContent = data.tableOfContents;
  var newTable = tableContent.split(' ');
  [ one, two, three, four, five ] = newTable;

  return `
  # ${data.title}
    
  ## Description
    ${data.description}
  ## Table of contents
  - ${one}
  - ${two}
  - ${three}
  - ${four}
  - ${five}
  ## Installation
  - ${data.install}
  ## Usage
    ${data.usage}
  ## Contributing
  - ${data.contribute}
  ## Tests
    ${data.tests}
  ## Questions
  ###  Github: 
    ${data.github}
  ###  Email: 
    ${data.email}
  ## Credits
    ${data.credits}
  ## License
    ${data.license}
`;
}

module.exports = generateMarkdown;
