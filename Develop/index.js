// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require("./utils/generateMarkDown");

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
            type: 'checkbox',
            name: 'languages',
            message: 'What did languages did you use to create this project? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
        },

        {
            type: 'input',
            message: "What licenses are required with this project?",
            name: "licenses"

        },

        {
            type: 'input',
            message: "Who were the contributors to this project?",
            name: "contribution"
        },

        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                }
            }
        },


    ]
).then(({
    username,
    title,
    description,
    languages,
    licenses,
    contribution,
    link
})=>{
    const template =`# ${title}
    
   * [username](#username) 
   * [title](#title) 
   * [description](#description) 
   * [languages](#languages) 
   * [licenses](#licenses) 
   * [contribution](#contribution) 
   * [link](#link) 
   ## username
    ${username}
    ## title
    ${title}
    ## description
    ${description}
    ## languages
    ${languages}
    ## licenses
    ${licenses}
    ## contribution
    ${contribution}
    ## link
    ${link}`
    
writeToFile(title, template);
}
);



// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
            console.log('README has been generated'); 
    })
}
