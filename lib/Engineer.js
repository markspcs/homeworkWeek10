const Employee = require("./Employee");
class Engineer extends Employee {

    constructor(a,b,c,d) {

        super(a,b,c);
        this.github  = d; // GitHub username
    }

    getGithub(){
       return this.github;
        }


    getRole() {// Overridden to return 'Engineer'
        return "Engineer";
    }
}

module.exports = Engineer;