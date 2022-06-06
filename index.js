//HomeWork 10

const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./assets/Manager')
const Intern = require('./assets/Intern')
const Engineer = require('./assets/Engineer')


const createReadme = (response) =>
`
<!DOCTYPE html>
<html>
<head>
<style>
.center {
    text-align: center;
    border: 3px solid green;
    background-color: lightgrey;
    width: 300px;
    padding: 50px;
    margin: auto;
    /* <p>To horizontally center a block element (like div), use margin: auto;</p> */

}
</style>
</head>
<body>

<h2>Center Text</h2>

<div class="center">
<p>This Manager's name is.</p>
${response.Manager}
</div>

<div class="center">
<p>This text is centered.</p>
${response.Responsability}
</div>

<div class="center">
<p>This text is centered.</p>
${response.InternCheck}
</div>

<div class="center">
<p>The next Team member is:</p>
${response.Engineer}
</div>

<div class="center">
<p>The next Team member is:</p>
${response.TeamMember}
</div>


</body>
</html>

`

// `
// # The Interns is:
// #### ${response.Interns}

// # The usage information name is:
// #### ${response.UsageInformation}

// # The Constribution Guidelines is:
// #### ${response.ConstributionGuidelines}

// # The Test Instructions Guidelines is:
// #### ${response.TestInstructions}

// # The License used is:
// #### ${response.License}

// # The Github Account is:
// #### ${response.GithubName}
// https://github.com/${response.GithubName}

// # Please reach out to the following email:
// #### ${response.Email}

// # The password is:
// #### ${response.TeamMember}

// # The secret text is:
// #### ${response.secretText}
// `
;
    async function managerQuestions() 
    {
        return inquirer
        .prompt([
            {
                name: 'Manager', 
                message: 'What is the managers name? '
            }
            ,
            {
                name: 'Responsability', 
                message: 'What is the responsability? '
            }
            ,
            {
                type: 'rawlist', 
                name: 'TeamMember',
                message: 'Which profession would you like to add? ',
                choices: ['Engineer','Intern','None']
            }
        ])
        .then((userAnswer) => {
            switch(userAnswer.TeamMember){
            case 'Engineer':
                console.log('Add an Engineer')
                engineer();
                break;
            case 'Intern':
                console.log('Intern')
                intern();
                break;
            case 'None':
                console.log('Finish')
                // finishedTeam();
                break;
            }
        })
    }

    function engineer(){
        console.log('We are printing the Engineering part')
        return inquirer
        .prompt([
                {
                    name: 'Engineer', 
                    message: 'What is the engineer name? '
                }
            ])
    } 


    async function intern()
    {
        // console.log('Intern function is running!')
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'InternCheck', 
                message: 'What is the interns name? '
            }
            // ,
            // {
            //     type: 'rawlist', 
            //     name: 'TeamMember',
            //     message: 'Which profession would you like to add? ',
            //     choices: ['Engineer','Intern','None']
            // }
            ])
            .then((internAnswer) => {
                console.log('Inside the .then! ')
                // switch(internAnswer.TeamMember){
                // case 'Engineer':
                //     console.log('Add an Engineer')
                //     // engineer();
                //     break;
                // case 'Intern':
                //     console.log('Intern')
                //     // intern();
                //     break;
                // case 'None':
                //     console.log('Finish')
                //     // finishedTeam();
                //     break;
                // }
            }).catch((err)=>{
                if(err){
                console.log('Error, not working!');
                }
            })
        }


    async function init() {
        console.log('Calling the Manager');
        const managerWait = await managerQuestions()
        const teamWait = await intern()

        .then((response) => fs.writeFile('index.html', createReadme(response), (err) =>
        err ? console.error(err) : console.log('HTML file was succesfully created')));
        console.log('After the call')
        // .then((response) => fs.writeFile('index.html', createReadme(response), (err) =>
        // err ? console.error(err) : console.log('HTML file was succesfully created')));

    }

    init()
    




        // ]).then((userChoice)=>{
        //     switch(userChoice.ListOptions){
        //         case 'Add an Engineer':
        //             console.log('Engineering')
        //         // Engineer();
        //         break;
                
        //         case 'Add an Intern':
        //             console.log('Intern')
        //         // Intern();
        //         break;

        //         case 'None':
        //             console.log('None')
        //         // finishedTeam();
        //         break;
        //     }
        //     }).catch(err=>{
        //     if(err){
        //         console.log(`Something went wrong when choosing to add team members`);
        //     }
        // })
    // } 
    
            // ,
            // {
            //     name: 'Interns', 
            //     message: 'How is the interns name? '
            // }
            // ,
            // {
            //     name: 'UsageInformation', 
            //     message: 'What is usage information of the project? '
            // }
            // ,
            // {
            //     name: 'ConstributionGuidelines', 
            //     message: 'What are the contributions of of the project? '
            // }
            // ,
            // {
            //     name: 'TestInstructions', 
            //     message: 'What are the test instructions of the project? '
            // }
            // ,
            // {
            //     type: 'rawlist', 
            //     name: 'TeamMember',
            //     message: 'Which licenses are used in the project? ',
            //     choices: ['Engineer','Intern','Manager']
            // }
            // ,
            // {
            //     name: 'GithubName', 
            //     message: 'What is the Githubname '
            // },
            // {
            //     name: 'Email', 
            //     message: 'What is your email so that they can reach out? '
            // },
            // {
            //     type: 'password', 
            //     name: 'secretText',
            //     message: 'Is there a secret password in the project: ',
            //     mask: "*"
            // }



