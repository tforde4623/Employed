const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
    this.role = 'Engineer';
  }

  getGithub() {
    return this.github ? this.github : `No github for ${this.role} specified...`
  }
}
