// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require("./utils/generateMarkDown");

// TODO: Create an array of questions for user input
const readmeQuestions = [
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
       
        validate: (answer)  => {
            if (answer) {
                return true;                                
            } else {
                 console.log("A valid project description is required.");
            }
            
        }
    },

    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did languages did you use to create this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },

     // {
     //   type: 'input',
      //  name: 'link',
      //  message: 'Enter the GitHub link to your project. (Required)',
      //  validate: linkInput => {
      //    if (linkInput) {
      //      return true;
      //    } else {
      //      console.log('You need to enter a project GitHub link!');
      //     return false;
       //   }
   //     }
   //   },



    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {  return `

# ${response.title}

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

${response.username}
##username:

    ${response.description}
##description:

    ${response.installation}
##installation:

    ${response.usage}
##usage:

    ${response.licenses}
##licenses:

    ${response.contribution}
##contribution:

    ${response.test}
##test:

    ${response.email}
##email:

    ${response.profile}
##profile:
`;
}

module.exports = generateMarkdown;



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(readmeQuestions)
    .then((inquirerResponse, data) => {   
        console.log("Generate ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}


// Function call to initialize app
init();
