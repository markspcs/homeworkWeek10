
class Employee {
    constructor(){
name
id
title
    }

getName() {}
getId(){}
getEmail(){}
getRole() {// Returns 'Employee'

}
}

class Manager extends Employee{
    constructor () {
    officeNumber
    }

getRole() { // Overridden to return 'Manager'

}

class Engineer extends Employee {

    constructor() {
github  // GitHub username
    }

getGithub()


getRole() // Overridden to return 'Engineer'
}

class Intern extends Employee {
    constructor(){
school
    }

getSchool()


getRole() // Overridden to return 'Intern'

}

module.exports = { Employee, Manager, Engineer, Intern }