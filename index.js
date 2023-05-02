// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle,Circle,Square} = require('./lib/shapes');
//var jsrender = require('jsrender');
//const template =  jsrender.templates('../readme_creator/readme-template.txt');
// let bodyContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${shape} cx="150" cy="100" r="80" fill="${shpcolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtcolor}">${text}</text></svg>`


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like on your logo - enter up to 3 characters?',
    },
    {
        type: 'input',
        name: 'txtcolor',
        message: 'Enter a color keyword or hexadecimal color for the text',
      },
      {
        type: 'list',
        message: 'Select a shape for your logo',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shpcolor',
        message: 'Enter a color keyword or hexadecimal color for the shape',
      },
  ];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        // let bodyContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${response.shape} cx="150" cy="100" r="80" fill="${response.shpcolor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.txtcolor}">${response.text}</text></svg>`;
        let bodyContent;
        if (response.shape == "square") {
          bodyContent = new Square(response.shpcolor, response.txtcolor, response.text)
        }
        else if  (response.shape == "triangle") {
          bodyContent = new Triangle(response.shpcolor, response.txtcolor, response.text)
        }
        else if  (response.shape == "circle") {
          bodyContent = new Circle(response.shpcolor, response.txtcolor, response.text)
        }
         writeToFile(bodyContent.display(),response);
    })
}

// Function call to initialize app
//init();

function writeToFile(bodyContent,response) {
    fs.writeFile(`${response.text}.svg`, `${bodyContent}\n`, (err) =>
  // Ternary operator takes in a condition followed by a question mark (?)
  // then an expression to execute if the condition is truthy followed by a colon (:)
  // and finally the expression to execute if the condition is falsy.
  // This operator is frequently used as a shortcut for the if statement.
  err ? console.error(err) : console.log('Commit logged!')
);
}

function readTemplate() {
    fs.readFile('readme-template.txt', 'utf8', (error, data) =>
  error ? console.error(error) : writeToFile(data) //console.log(data)
);

}

init();

//readTemplate();