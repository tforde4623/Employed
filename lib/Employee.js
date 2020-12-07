class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName() {
    return this.name ? this.name : `No name for ${this.role} specified...`
  }

  getId() {
    return this.id ? this.id : `No id for ${this.role} specified...`
  }

  getEmail() {
    return this.email ? this.email : `No email for ${this.role} specified...`
  }

  getRole() {
    return this.role;
  }
}


module.exports = Employee;
