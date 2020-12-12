const validateNumber = input => {
  return isNaN(input) ? 'Must enter a valid number!' : true;
}

const validateEmpty = input => {
  return !input ? 'Input cannot be empty!' : true;
}

const prompts = {
  manager: [
    {
      name: 'name',
      message: 'What is the manager\'s name?',
      type: 'input',
      validate: validateEmpty
    },
    {
      name: 'id',
      message: 'What is the manager\'s ID?',
      type: 'number',
      validate: validateNumber
    },
    {
      name: 'email',
      message: 'What is the manager\'s email?',
      type: 'input',
      validate: validateEmpty
    },
    {
      name: 'officeNumber',
      message: 'What is the manager\'s office number?',
      type: 'number',
      validate: validateNumber
    }
  ],

  engineer: [
    {
      name: 'name',
      message: 'What is this engineer\'s name?',
      type: 'input',
      validate: validateEmpty
    },
    {
      name: 'id',
      message: 'What is this engineer\'s ID?',
      type: 'number',
      validate: validateNumber
    },
    {
      name: 'email',
      message: 'What is this engineer\'s email?',
      type: 'input',
      validate: validateEmpty
    },
    {
      name: 'github',
      message: 'What is this engineer\'s GitHub username?',
      type: 'input',
      validate: validateEmpty
    }
  ],

  intern: [
    {
      name: 'name',
      message: 'What is this intern\'s name?',
      type: 'input',
      validate: validateEmpty
    },
    {
      name: 'id',
      message: 'What is this intern\'s ID?',
      type: 'number',
      validate: validateNumber
    },
    {
      name: 'email',
      message: 'What is this intern\'s email?',
      type: 'input',
      validate: validateEmpty
    },
    {
      name: 'school',
      message: 'What school does this intern attend?',
      type: 'input',
      validate: validateEmpty
    }
  ],
  // prompt for employee selection
  employeeNext: [
    {
      name: 'employeeNext',
      message: 'What type of Employee do you want to create next?\n Hit done if your done creating employees.',
      type: 'list',
      choices: ['Engineer', 'Intern', 'Done']
    }
  ]
}

module.exports = prompts;