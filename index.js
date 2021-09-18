const inquirer = require("inquirer")
const fs = require("fs")
const readmeMarkdown = require("./Utils/readmeMarkdown")

const questions = [
    {
        name: "title",
        message: "What is the title of your project?",
        type: "input"
    }, 
    {
        name: "license",
        type: "list",
        message: "What license was used in the making of this project?",
        choices: ["MIT", "GNU", "ISC"]
    }, 
    {
        name: "description",
        message: "What is a good description of this project?",
        type: "input"
    },
    {
        name: "installation",
        message: "Explain the installation steps:",
        type: "input"
    },
    {
        name: "usage",
        message: "What is this project used for?",
        type: "input"
    },   
    {
        name: "contribution",
        message: "Who has contributed to this project?",
        type: "input"
    },
    {
        name: "tests",
        message: "What are some of the tests performed on this project?",
        type: "input"
    },
    {
        name: "github",
        message: "Provide your github profile link:",
        type: "input"
    },
    {
        name: "email",
        message: "Provide an email to contact you:",
        type: "input"
    }
]

function init() {
    inquirer
        .prompt(questions)
        .then(answers => readmeMarkdown(answers))
        .then(answers => {
            fs.writeFile("README.txt", answers, (err) => {
                if(err !== null) console.log(err);
                return answers
            })
            
        })
}

init()