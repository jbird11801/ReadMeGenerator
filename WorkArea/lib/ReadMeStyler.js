

class ReadMe {

    ReadMeTitle = function(data){

        if (data[0] === true){

            return "<Your-Project-Title>";
        }

        else 

        {

            return data[1];

        }

    }

    ReadMeDescription = function(data){

        if (data[0] === true){

            return `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: 
- What was your motivation? 
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?`;
        
}

        else 

        {

            return data[2];

        }

    }

    ReadMeInstallation = function(data){

        if (data[0] === true){

            return `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`;
        
        }

        else 

        {

            return data[3];

        }

    }
    
    ReadMeUsage = function(data){

        if (data[0] === true){

            return `Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
            
![alt text](assets/images/screenshot.png)`;

        }

        else 

        {

            return data[4];

        }

    }

    ReadMeLicense = function(data){

        if (data[0] === true){

            return `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`;
        
        }

        else 

        {

            return `This project has the (${data[5]}) license protecting it!`;

        }

    }

    ReadMeBadges = function(data){

        if (data[0] === true){

            return `![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.`;
        
        }

        else 

        {

            return data[6];

        }

    }

    ReadMeFeatures = function(data){

        if (data[0] === true){

            return `If your project has a lot of features, list them here.`;
        
        }

        else 

        {

            return data[7];

        }

    }

    ReadMeContribute = function(data){

        if (data[0] === true){

            return `If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`;
        
        }

        else 

        {

            return data[8];

        }

    }

    ReadMeTests = function(data){

        if (data[0] === true){

            return `Go the extra mile and write tests for your application. Then provide examples on how to run them here.`;
        
        }

        else 

        {

            return data[9];

        }

    }

    ReadMeQuestions = function(data){

        if (data[0] === true){

            return `Please contact me about this project here [user@example.com](mailto:user@example.com)
            
My git hub account is exampleuser at https://github.com/exampleuser`;
        
        }

        else 

        {

            return `Please contact me about this project here [${data[10]}](mailto:${data[10]})
            
My git hub account is ${data[11]} at https://github.com/${data[11]}`;

        }

    }

    readMeText (data) {

return `# ${this.ReadMeTitle(data)}

Protected by a ![Static Badge](https://img.shields.io/badge/${data[5]}-b06402) [License](#license)

## Description

${this.ReadMeDescription(data)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#Badges)
- [Features](#Features)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${this.ReadMeInstallation(data)}

## Usage

${this.ReadMeUsage(data)}

## Credits

Used to make read me https://github.com/jbird11801/ReadMeGenerator

==============================================================================================================================

List your collaborators, if any, with links to their GitHub profiles.
            
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
            
If you followed tutorials, include links to those here as well.

==============================================================================================================================

## License

${this.ReadMeLicense(data)}

## Badges

${this.ReadMeBadges(data)}

## Features

${this.ReadMeFeatures(data)}

## Contribute

${this.ReadMeContribute(data)}

## Tests

${this.ReadMeTests(data)}

## Questions

${this.ReadMeQuestions(data)}`

    };

}

module.exports = ReadMe;