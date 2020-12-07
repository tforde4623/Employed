class Employee {
  constructor(name, id, email) {
    // so a name must be entered in initialization of class
    if (name === undefined) {
      throw new Error(`Name property required in initialization of class!`);
    }

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id ? this.id : `No name for ${this.role} specified...`
  }

  getEmail() {
    return this.email ? this.email : `No name for ${this.role} specified...`
  }

  getRole() {
    return this.role;
  }
}


module.exports = Employee;
