const prompts = {
  manager: [
    {
      name: 'name',
      message: 'What is the manager\'s name?',
      type: 'input'
    },
    {
      name: 'id',
      message: 'What is the manager\'s ID?',
      type: 'number'
    },
    {
      name: 'email',
      message: 'What is the manager\'s email?',
      type: 'input'
    },
    {
      name: 'officeNumber',
      message: 'What is the manager\'s office number?',
      type: 'number'
    }
  ],

  engineer: [
    {
      name: 'name',
      message: 'What is this engineer\'s name?',
      type: 'input'
    },
    {
      name: 'id',
      message: 'What is this engineer\'s ID?',
      type: 'number'
    },
    {
      name: 'email',
      message: 'What is this engineer\'s email?',
      type: 'input'
    },
    {
      name: 'github',
      message: 'What is this engineer\'s GitHub username?',
      type: 'input'
    }
  ],

  intern: [
    {
      name: 'name',
      message: 'What is this intern\'s name?',
      type: 'input'
    },
    {
      name: 'id',
      message: 'What is this intern\'s ID?',
      type: 'number'
    },
    {
      name: 'email',
      message: 'What is this intern\'s email?',
      type: 'input'
    },
    {
      name: 'school',
      message: 'What school does this intern attend?',
      type: 'input'
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