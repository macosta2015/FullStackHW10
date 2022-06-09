//HomeWork 10


//node modueles 
const fs = require('fs');
const inquirer = require('inquirer');

//HTML Template
const generateTeam = require("./src/page-template.js");

//Library modules
const Manager = require('./Assets/Manager')
const Intern = require('./Assets/Intern')
const Engineer = require('./Assets/Engineer')

//Importing the HTML temaples
const HTML = require('./templates/htmlTemplate')
const managerHTML = require('./templates/managerHTML')
const engineerHTML = require('./templates/engineerHTML')
const internHTML = require('./templates/internHTML');


// const teamName = ["Team", "members"];
const teamName = [];
const engineerArray = [];
const internArray = [];


    function createTeam () {
        console.log("new guy", newStaffMemberData)
        fs.writeFileSync(
        "./output/index.html",
        generateTeam(newStaffMemberData),
        "utf-8"
        );
    }


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
                    console.log('Engineer Name: ' + engineerAnswer.Engineer)                        
                    console.log("We are pushing the Engineer's response:")
                    teamName.push(engineerAnswer.Engineer);
                    engineerArray.push(engineerAnswer)

                    const newEngineer = new Engineer(
                        engineerAnswer.Engineer,
                        engineerAnswer.EngineerResponsability,
                        console.log("engineerAnswer.Engineer: " + engineerAnswer.Engineer),
                        console.log("engineerAnswer.EngineerResponsability: " + engineerAnswer.EngineerResponsability)
                        );
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
                        console.log(teamName)
                        break;
                    }

                }).catch((err)=>{
                    if(err){
                        console.log('Done running');
                    }
                })
    } 


    async function intern(){
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'Intern', 
                message: 'What is the interns name? '
            }
            ,
            {
                type: 'input',
                name: 'InternResponsability', 
                message: 'What is the interns responsability? '
            }
            ,
            {
                type: 'rawlist', 
                name: 'TeamMember',
                message: 'Which profession would you like to add? ',
                choices: ['Engineer','Intern','None']
            }
            ]).then((internAnswer) => {
                console.log('Engineer Name: ' + internAnswer.Intern)                        
                    console.log("We are pushing the Intern's response:")
                    teamName.push(internAnswer.Intern);
                    //TODO: Testing the internArray
                    internArray.push(internAnswer)
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

            }).catch((err)=>{
                if(err){
                console.log('Done running!');
                }
            })
    }

    function finishedTeam(){
        console.log("Hello, finished Team!: " + teamName)
        var myJsonStringTeam = JSON.stringify(teamName);

        // var myJsonStringEngineer = JSON.stringify(engineerArray);
        // console.log('Printing engineerObject: ')
        // console.log(engineerArray)
        // console.log('Printing to JSON string: ')
        // console.log(myJsonStringEngineer)

        countEngineer = 0;
        for (let i of engineerArray){
            let name = i.Engineer;
            let responsability = i.EngineerResponsability;
            console.log('Engineer'+countEngineer+': ' + name)
            console.log('EngineerResponsability'+countEngineer+': ' + responsability)
            countEngineer++
        }
        var myJsonStringEngineer = JSON.stringify(engineerArray);

        
        // console.log('What are we printing? ')
        // console.log(myJsonStringEngineer)
        // console.log('What are we printing? ')
        // console.log(myJsonStringEngineer.Engineer)

        var myJsonStringIntern = JSON.stringify(internArray);
        // console.log('Printing internObject: ')
        // console.log(internArray)
        // console.log('Printing to JSON string: ')
        // console.log(myJsonStringIntern)
        countIntern = 0;
        for (let i of internArray){
            let name = i.Intern;
            let responsability = i.InternResponsability;
            console.log('Intern'+countIntern+': ' + name)
            console.log('InternResponsability'+countIntern+': ' + responsability)
            countIntern++
        }

        HTML_GENERATOR(myJsonStringEngineer) 
    } 
    function HTML_GENERATOR(myJsonStringEngineer){

        console.log('We are in the HTML generator')
        console.log('myJsonStringEngineer: ' + myJsonStringEngineer)
        console.log('myJsonStringEngineer.Engineer: ' + myJsonStringEngineer.Engineer)


        const deconstructArray = myJsonStringEngineer
        console.log('deconstructArray: ' + deconstructArray)

        let generatedHTML = HTML((deconstructArray))
        fs.writeFile('sample.html', generatedHTML, (err)=>err? console.log(err): console.log('HTML generated successfully '))

    

        console.log('After the HTM; generator')

    }

    




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