//HomeWork 10

const fs = require('fs');
const inquirer = require('inquirer');


const createReadme = (response) => `

# The Titles's name is:
#### ${response.Title}

# The description is:
#### ${response.Description}

# The installation is:
#### ${response.Installation}

# The usage information name is:
#### ${response.UsageInformation}

# The Constribution Guidelines is:
#### ${response.ConstributionGuidelines}

# The Test Instructions Guidelines is:
#### ${response.TestInstructions}

# The License used is:
#### ${response.License}

# The Github Account is:
#### ${response.GithubName}
https://github.com/${response.GithubName}

# Please reach out to the following email:
#### ${response.Email}

# The password is:
#### ${response.rawlist}

# The secret text is:
#### ${response.secretText}

`;
    function readmeQuestions() {
    return inquirer
    .prompt([
            // {
            //     message: 'What is your favorite color? ',
            //     default: 'blue',
            //     name: 'color'
            // },
            {
                name: 'Title', 
                message: 'What is title of the project? '
            },
            {
                name: 'Description', 
                message: 'What is description of the project? '
            },
            {
                name: 'Installation', 
                message: 'How to installation  the project? '
            },
            {
                name: 'UsageInformation', 
                message: 'What is usage information of the project? '
            },
            {
                name: 'ConstributionGuidelines', 
                message: 'What are the contributions of of the project? '
            },
            {
                name: 'TestInstructions', 
                message: 'What are the test instructions of the project? '
            },
            {
                type: 'rawlist', 
                name: 'License',
                message: 'Which licenses are used in the project? ',
                choices: ['MIT','Academic Free License v3.0','Do What The F*ck You Want To Public License', 'Educational Community License', 'PostgreSQL License', 'Mozilla Public License 2.0','PostgreSQL License']
            },
            {
                name: 'GithubName', 
                message: 'What is the Githubname '
            },
            {
                name: 'Email', 
                message: 'What is your email so that they can reach out? '
            },
            {
                type: 'password', 
                name: 'secretText',
                message: 'Is there a secret password in the project: ',
                mask: "*"
            }
        ])
        // .then(response => {
        //     console.log('Answer: ', response)

        //     console.log("The website is: ", response.color)
        // })
}


    function init() {
        readmeQuestions()
        .then((response) => fs.writeFile('Readme.md', createReadme(response), (err) =>
        err ? console.error(err) : console.log('Readme file was succesfully created')));
    }

    init()


