
const inquirer = require('inquirer');

const ReadMe = require('./lib/ReadMeStyler');

const fs = require('fs');

const test = new ReadMe();

const responses = [];

var QuestionObject = [{
          type: 'confirm',
    
          message: 'Do you want a default read me that you can edit later?',
    
          name: "answer",
    
        }];

const FollowUpQuestions = [
  
        {

          type: 'input',
    
          message: 'What is the title of your project?',
    
          name: "answer",
    
        }

      ,

      {

        type: 'input',
  
        message: 'What is the description of your project?',
  
        name: "answer",
  
      }
      
    ,
    
    {

      type: 'input',

      message: 'What does the installation process of your project look like?',

      name: "answer",

    }
          
    ,
    
    {

      type: 'input',

      message: 'How would someone use your project?',

      name: "answer",

    }

    ,
    
    {

      type: 'rawlist',

      message: 'What license do you want?',

      choices: ["MIT","Unlicensed"],

      name: "answer",

    }
    
    ,
    
    {

      type: 'input',

      message: 'What badges do you have?',

      name: "answer",

    }
    
    ,
    
    {

      type: 'input',

      message: 'What features does your project have?',

      name: "answer",

    }
    
    ,
    
    {

      type: 'input',

      message: 'How would you like other devs to contribte to your project to your project?',

      name: "answer",

    }

    ,
    
    {

      type: 'input',

      message: 'How did you test your project?',

      name: "answer",

    }

    ,
    
    {

      type: 'input',

      message: 'What email is best to reach you on your project?',

      name: "answer",

    }

    ,
    
    {

      type: 'input',

      message: 'What is your git username for this project?',

      name: "answer",

    }
    
    
    
    
    
    ];

var indexQuestion = 0;

function ask() {

  if ( indexQuestion < QuestionObject.length){

  inquirer.prompt(QuestionObject[indexQuestion]).then ((response) => {

    responses.push(response.answer);

    if (indexQuestion === 0 && response.answer === false){

      QuestionObject = QuestionObject.concat(FollowUpQuestions)

    }

    indexQuestion++;

    ask();

  })

  }

  else {

    fs.writeFile('README.md', test.readMeText(responses) , (err) =>

    err ? console.error(err) : console.log('index.html created!')

    )
  }

}

ask();

