// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
    
  ## Description
    ${data.description}
  ## Table of contents
    ${data.tableOfContents}
  ## Installation

  ## Usage

  ## Contributing

  ## Tests

  ## Questions

  ## Credits

  ## License
`;
}

module.exports = generateMarkdown;
