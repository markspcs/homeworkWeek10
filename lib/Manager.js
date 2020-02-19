const Employee = require("./Employee");

class Manager extends Employee{
    constructor(a,b,c,d) {
    //this.officeNumber = d;

    super(a,b,c);
        this.officeNumber = d;
    }
getOfficeNumber(){
    return this.officeNumber;
}
getRole() { // Overridden to return 'Manager'
    return "Manager";
}
}

module.exports = Manager;