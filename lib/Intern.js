const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    // make sure props corrently passed when init
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error('Name property is required, and needs to be a non empty string...');
    } else if (typeof id !== 'number' || isNaN(id)) {
      throw new Error('ID property is required, and needs to be a number...');
    } else if (typeof email !== 'string' || !email.trim()) {
      throw new Error('Email property is required, and needs to be a string...');
    } else if (typeof school !== 'string' || !school.trim()) {
      throw new Error('School property is required, and needs to be a string...');
    }
    
    super(name, id, email);

    this.school = school;
    this.role = 'Intern'
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
