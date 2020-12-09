const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const prompts = require("./lib/prompts")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { manager } = require("./lib/prompts");
const { resolve } = require("path");
const { RSA_X931_PADDING } = require("constants");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// functions for each type of employee
// manager
const createRoster = () => {
  inquirer
    .prompt(prompts.manager)
    .then(res => employees.push(new Manager(res.name, res.id, res.email, res.officeNumber)))
    .then(promptEmployeeNext)// choose next employee
    .catch(err => { if (err) throw err; });
};
// engineer
const createEngineer = () => {
  inquirer
    .prompt(prompts.engineer)
    .then(res => employees.push(new Engineer(res.name, res.id, res.email, res.github)))
    .then(promptEmployeeNext)// choose next employee
    .catch(err => { if (err) throw err; });
};

// intern
const createIntern = () => {
  inquirer
    .prompt(prompts.intern)
    .then(res => employees.push(new Intern(res.name, res.id, res.email, res.school)))
    .then(promptEmployeeNext)// choose next employee
    .catch(err => { if (err) throw err; });
};

// next employee prompt
const promptEmployeeNext = () => {
  inquirer
    .prompt(prompts.employeeNext)
    .then(res => chooseEmployee(res.employeeNext))
    .catch(err => { if (err) throw err; });
}
  
// ask what kind of employee to create (using list)
const chooseEmployee = (role) => {
  if (role === 'Engineer') {
    createEngineer();
  } else if (role === 'Intern') {
    createIntern();
  } else {
    fs.writeFile(outputPath, render(employees), (err) => {
      if (err) throw err;
      console.log('File successfully written!');
    });
  }
}


createRoster();