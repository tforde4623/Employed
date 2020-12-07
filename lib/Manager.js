const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // make sure props corrently passed when init
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error('Name property is required, and needs to be a non empty string...');
    } else if (typeof id !== 'number' || isNaN(id)) {
      throw new Error('ID property is required, and needs to be a number...');
    } else if (typeof email !== 'string' || !email.trim()) {
      throw new Error('Email property is required, and needs to be a string...');
    } else if (typeof officeNumber !== 'number' || isNaN(id)) {
      throw new Error('Office number property is required, and needs to be a string...');
    }

    super(name, id, email);

    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;