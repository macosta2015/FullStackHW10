//HomeWork 10


//node modueles 
const fs = require('fs');
const inquirer = require('inquirer');

//Library modules
const Manager = require('./Assets/Manager')
const Intern = require('./Assets/Intern')
const Engineer = require('./Assets/Engineer')

//Importing the HTML temaples
const HTML = require('./templates/htmlTemplate')
const managerHTML = require('./templates/managerHTML')
const engineerHTML = require('./templates/engineerHTML')
const internHTML = require('./templates/internHTML');

const teamArray = [];
const engineerArray = [];
const internArray = [];

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
                console.log('Add an Intern')
                intern();
                break;
                
            case 'None':
                console.log('Finish')
                finishedTeam();
                break;
            }
        })
    }

    async function intern(){
        return inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            }
            ,
            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID number?" 
            }
            ,
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            }
            ,        
            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?"
            }
            ,
            {
                type: 'rawlist', 
                name: 'TeamMember',
                message: 'Which profession would you like to add? ',
                choices: ['Engineer','Intern','None']
            }

            ]).then((internAnswer) => {
                const intern = new Intern(internAnswer.internName, internAnswer.internId, internAnswer.internEmail, internAnswer.internSchool);
                teamArray.push(intern);
                switch(internAnswer.TeamMember){
                case 'Engineer':
                    console.log('Add an Engineer')
                    engineer();
                    break;
                case 'Intern':
                    console.log('Add an Intern')
                    intern();
                    break;
                case 'None':
                    console.log('Finish')
                    console.log(teamName)
                    finishedTeam();
                    break;
                }

            // }).catch((err)=>{
            //     if(err){
            //     console.log('Done running!');
            //     }
            });
    }


    async function engineer(){
        return inquirer
        .prompt([
                {
                    type: 'input',
                    name: 'Engineer', 
                    message: 'What is the engineer name? '
                }
                ,
                {
                    type: 'input',
                    name: 'EngineerResponsability', 
                    message: 'What is the Engineer responsability? '
                }
                ,
                {
                    type: 'rawlist', 
                    name: 'TeamMember',
                    message: 'Which profession would you like to add? ',
                    choices: ['Engineer','Intern','None'],
                }
            ]).then((engineerAnswer) => {
                    engineerArray.push(engineerAnswer)
                    switch(engineerAnswer.TeamMember){
                    case 'Engineer':
                        engineer();
                        break;
                    case 'Intern':
                        console.log('Add an Intern')
                        intern();
                        break;
                    case 'None':
                        console.log('Finish')
                        finishedTeam();
                        break;
                    }

                }).catch((err)=>{
                    if(err){
                        console.log('Done running');
                    }
                })
    } 

    async function finishedTeam(){
        console.log("Hello, finished engineerArray!: " + engineerArray)

        countEngineer = 0;

        console.log('engineerArray: ' + engineerArray)
        engineerArrayJSON = JSON.stringify(engineerArray)
        console.log('engineerArrayJSON: ' + engineerArrayJSON)
        

        const engineer = engineerArray.map(engineer => engineer.Engineer);
        console.log('engineer: ' + engineer)

        for (let i of engineerArray){
            let name = i.Engineer;
            let responsability = i.EngineerResponsability;
            console.log('Engineer'+countEngineer+': ' + name)
            console.log('EngineerResponsability'+countEngineer+': ' + responsability)
            countEngineer++
        }

        countIntern = 0;
        for (let i of internArray){
            let name = i.Intern;
            let responsability = i.InternResponsability;
            console.log('Intern'+countIntern+': ' + name)
            console.log('InternResponsability'+countIntern+': ' + responsability)
            countIntern++
        }

        HTML_GENERATOR(engineerArrayJSON) 
    } 
    function HTML_GENERATOR(engineerArray){
        const myJSON = JSON.stringify(engineerArray);
        console.log('engineerArray: ' + engineerArray)
        console.log('myJSON: ' + myJSON)

        let generatedHTML = HTML((engineerArray))
        fs.writeFile('sample.html', generatedHTML, (err)=>err? console.log(err): console.log('HTML generated successfully '))
        console.log('After the HTML generator')
    }

    



    //Initial code
    async function init() {
        console.log('Calling the Manager');
        const managerWait = await managerQuestions()
    }

    init()
    


            // Documentations

            // Why Is Array/Object Destructuring So Useful And How To Use It
            // https://www.youtube.com/watch?v=NIq3qLaHCIs

            // Array to JSON format
            // https://stackoverflow.com/questions/2295496/convert-array-to-json