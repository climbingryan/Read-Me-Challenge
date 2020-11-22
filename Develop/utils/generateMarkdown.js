
// function to generate markdown for README
function generateMarkdown(data) {
// const license = data.license;
// console.log(license);

//   if (license === 'MIT') {
//     var badge = "['license']('https://img.shields.io/badge/MIT-MIT-red')";
//     //badge.slice(0, badge.length);
//  } else if (data.license === 'Apche') {
  //   badge = [License]('https://img.shields.io/badge/Apache-Apche-green');
  // } else if (data.license === 'GPL') {
  //   badge = [License]('https://img.shields.io/badge/GPL-GPL-blue');
  // }

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
  installation();
  contributing();
  return `
  # ${data.title}
    
  ## Description
    ${data.description}
  ## Table of contents
  - [Installation](#install)
  - [Usage](#usage)
  - [Contributing](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

  ## Installation <a id="install"></a>
    ${one}
    ${two}
    ${three}
    ${four}
    ${five}
  ## Usage <a id="usage"></a>
    ${data.usage}
  ## Contributing <a id="contribute"></a>
    ${one}
    ${two}
    ${three}
    ${four}
    ${five}
  ## Tests <a id="tests"></a>
    ${data.tests}
  ## Questions <a id="questions"></a>
  ###  Github: 
  [Github Account](https://github.com/${data.github})
  ###  Email: 
    ${data.email}
  ## Credits <a id="credits"></a>
    ${data.credits}
  ## License <a id="license"></a>
    ${data.license}
`;
}

module.exports = generateMarkdown;
