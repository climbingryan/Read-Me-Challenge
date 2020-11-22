



// function to generate markdown for README
function generateMarkdown(data) {

  const tableOfContents = () => {
    const tableContent = data.tableOfContents;
    const newTable = tableContent.split(' ');
    [ one, two, three, four, five ] = newTable;
      if (one === undefined) {
        one = '';
      } 
      if (two === undefined) {
        two = '';
      } 
      if (three === undefined) {
        three = '';
      } 
      if (four === undefined) {
        four = '';
      } 
      if (five === undefined) {
        five = '';
      }
  }

  const installation = () => {
    const install = data.install;
    const newInstall = install.split(' ');
    [ one, two, three, four, five ] = newInstall;
    if (one === undefined) {
      one = '';
    } 
    if (two === undefined) {
      two = '';
    } 
    if (three === undefined) {
      three = '';
    } 
    if (four === undefined) {
      four = '';
    } 
    if (five === undefined) {
      five = '';
    }
  }
  const contributing = () => {
    const contribute = data.contribute;
    const newContribute = contribute.split(' ');
    [ one, two, three, four, five ] = newContribute;
    if (one === undefined) {
      one = '';
    } 
    if (two === undefined) {
      two = '';
    } 
    if (three === undefined) {
      three = '';
    } 
    if (four === undefined) {
      four = '';
    } 
    if (five === undefined) {
      five = '';
    }
  }
  tableOfContents();
  installation();
  contribute();
  return `
  # ${data.title}
    
  ## Description
    ${data.description}
  ## Table of contents
    ${one}
    ${two}
    ${three}
    ${four}
    ${five}
  ## Installation
    ${one}
    ${two}
    ${three}
    ${four}
    ${five}
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
