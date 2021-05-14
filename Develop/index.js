// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateBadge = require("./utils/generateMarkDown");


function renderLicenseBadge(license) {
    let licenseBadge;
    switch (license) {
      
      case 'Apache 2.0':
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      
      case 'GNU GPLv2.0':
        licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
        break;
      case 'GNU GPLv3.0':
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case 'MIT':
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case 'Mozilla Public 2.0':
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
      default:
        break;
    }
    return licenseBadge;
  }


// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'what is your GitHub username? (Required)',
            name: 'username',
            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid GitHub username is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'what is your email address? (Required)',
            name: 'email',
            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid email address is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'What is the title of your project? (Required)',
            name: 'title',
            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid project title is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'Please provide a description of your project. (Required)',
            name: 'description',

            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid project description is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'What installation instructions are required for your project. (Required)',
            name: 'installation',

            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("Please provide valid installation instructions.");
                }

            }
        },

        {
            type: 'input',
            message: 'What is the usage for this project?',
            name: 'usage',


        },

        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages were used to create this project? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
        },

        {
            type: 'list',
            message: "What licenses are required with this project?",
            name: "licenses",
            choices: ['Apache 2.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],

        },

        {
            type: 'input',
            message: "Who were the contributors to this project?",
            name: "contribution"
        },

        {
            type: 'input',
            message: 'Please provide the project tests.',
            name: 'test',

        },

        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub repo link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter a valid GitHub repo link!');
                    return false;
                }
            }
        },


    ]
).then(({
    username,
    email,
    title,
    description,
    installation,
    usage,
    languages,
    licenses,
    contribution,
    test,
    link,
}) => {
    //let licenseHolder
    //if (licenses === 'MIT') {
    //    licenseHolder = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    //}

    const template = `# ${title}



    ## Table of contents
    

   * [title](#title) 
   * [description](#description) 
   * [badge](#badge)
   * [installation](#installation)
   * [usage](#usage)
   * [licenses](#licenses) 
   * [contribution](#contribution) 
   * [test](#test)
   * [link](#link) 
   * [questions](#questions)

   ## username
    ${username}

   ## title
    ${title}

   ## description
    ${description}

   ## badge
   ${renderLicenseBadge(licenses)}
  
   ## installation
    ${installation}
    
   ## usage
    ${usage}

   ## languages
    ${languages}

   ## licenses
    ${licenses}

   ## contribution
    ${contribution}

   ## test
    ${test}

   ## link
    ${link}

   ## questions 
    ${"Username: " + username}
    ${"Github Profile Link: " + 'github.com/' + username}  
    ${"Email:" + email + '\nPlease kindly email me for any additional questions.'}
    `

    writeToFile(title, template);
}
);



// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('README has been generated');
    })
}
function init() {

}

init();