const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const card = require("./templates/createCard");
const createHtml = require("./templates/createHtml");
const fs = require('fs');

const debug = 0;

askUser();
//////////////////////////////////////////////////////////////
//async to prompt user
async function askUser() {
    let addMore = "y";
    let people = [];
    do {
        const response = await promptUser();
        people.push(response);
        addMore = response.end;
        debug && console.log("askUser do loop" + response);
    } while (addMore === "y");
    debug && console.log("askUser done with do loop:" + people);
    buildHtml(people);
}
/////////////////////////////////////////////////////////
//create the html using the array of objects
function buildHtml(people) {
    let html = "";
    for (i = 0; i < people.length; i++) {
        debug && console.log(people[i]);
        let person = people[i];
        switch (person.position) {
            case 'Manager':
                debug && console.log("manager " + person);
                const manager = new Manager(person.name, person.id, person.email, person.officeNumber);
                html += card.managerHtml(manager);
                console.log("manager card in buildHtml switch: " + html);
                break;
            case 'Engineer':
                debug && console.log("engineer " + person);
                const engineer = new Engineer(person.name, person.id, person.email, person.github);
                html += card.engineerHtml(engineer);
                console.log("engineer card in buildHtml switch: " + html);
                break;
            case 'Intern':
                debug && console.log("intern " + person);
                const intern = new Intern(person.name, person.id, person.email, person.school);
                console.log("Intern card in buildHtml switch: " + html);
                html += card.internHtml(intern);
                break;
        }

    }
    var fullHtml = createHtml.main(html);
    debug && console.log("fullHtml in buildHtml function" + fullHtml);
    fs.writeFile('./output/team.html', fullHtml, (err) => {
        if (err) {
          return console.log(err);
        }
    });
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
            type: 'input',
            message: 'member ID?',
            name: 'id'
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
            type: 'input',
            message: 'email address?',
            name: 'email',

        },
        {
            type: 'input',
            message: 'what is the office number',
            name: 'officeNumber',
            when: (answer) => answer.position === 'Manager'
        },
        {
            type: 'input',
            message: 'what is your github username?',
            name: 'github',
            when: (answer) => answer.position === 'Engineer'
        },
        {
            type: 'input',
            message: 'what school did you go to?',
            name: 'school',
            when: (answer) => answer.position === 'Intern'
        },
        {
            type: "input",
            name: "end",
            message: "add another user [y/n]?"
        },
    ]);
}
