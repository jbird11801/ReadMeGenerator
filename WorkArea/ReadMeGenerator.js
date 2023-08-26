const inquirer = require('inquirer');

const fs = require('fs');

inquirer

  .prompt([

    {
        type: 'confirm',
  
        message: 'Do you want a read me?',
  
        name: "readme"
  
      }

  ])

  .then ((response) => {

  fs.writeFile('README.md', JSON.stringify(response) , (err) =>

  err ? console.error(err) : console.log('index.html created!')

  )

  });