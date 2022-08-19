const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        if (typeof office !== "string" || !office.trim().length) {
            throw new Error("Expected parameter 'office' to be a non-empty string");
        }
        super(name, id, email)
        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;