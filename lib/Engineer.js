const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // make sure props corrently passed when init
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error('Name property is required, and needs to be a non empty string...');
    } else if (typeof id !== 'number') {
      throw new Error('ID property is required, and needs to be a number...');
    } else if (typeof email !== 'string' || !email.trim()) {
      throw new Error('Email property is required, and needs to be a string...');
    } else if (typeof github !== 'string' || !github.trim()) {
      throw new Error('Github property is required, and needs to be a string...');
    }
    
    super(name, id, email);

    this.github = github;
    this.role = 'Engineer';
  }

  getGithub() {
    return this.github;
  }
}


module.exports = Engineer;
