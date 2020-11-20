// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    # ${data.title}

    ## ${data.description}

    #### ${data.tableOfContents}
`;
}

module.exports = generateMarkdown;
