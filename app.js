const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const debug = 1;
const employee = new Engineer('mark', 1, 'markspcs@yahoo.com', 'markspcs');

console.log(employee);
askUser();
//////////////////////////////////////////////////////////////
//async to prompt user
async function askUser() {
    let addMore = "y";
    do {
        const response = await promptUser();
        addMore = response.end;
        debug && console.log(response);
    } while (addMore === "y");

}
///////////////////////////////////////////////////////////////////
//prompt user for input and return username location
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: 'list',
            message: 'Position:',
            name: 'position',
            choices: [
              'Manager',
              'Engineer',
              'Intern',
            ],
          },
        {
            type: "input",
            name: "end",
            message: "add another user [y/n]?"
        }
    ]);
}