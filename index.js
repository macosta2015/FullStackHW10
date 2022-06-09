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

                    //   engineerArray.push(newEngineer);
                    //   console.log('engineerObject: '+ engineerArray)
                    
                    

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

        var myJsonStringEngineer = JSON.stringify(engineerArray);
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

        // .then((response) => fs.writeFile('index.html', createReadme(response), (err) =>
        // err ? console.error(err) : console.log('HTML file was succesfully created')));

        //Add my HTML parts to the main Template and cleaning the commas
        let GeneratedHTML = HTML(writeManagerHTML, writeEngineerHTML, writeInternHTML ).replace(/[,]/g, ' ');
        
        //Write HTML 
        fs.writeFile('sample.html', GeneratedHTML, (err)=>err? console.log(err): console.log('HTML generated successfully '))

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
        <p>This Manager's name is: </p>
        ${userAnswer.Manager}
        </div>
    
        <div class="center">
        <p>The manager's text is: </p>
        ${userAnswer.Responsability}
        </div>
    
        <div class="center">
        <p>This interns text is: </p>
        ${internAnswer.Intern}
        </div>
    
        <div class="center">
        <p>The next Team member is:</p>
        ${engineerAnswer.Engineer}
        </div>
    
        <div class="center">
        <p>The next Team member is:</p>
        </div>
    
    
        </body>
        </html>
    
        `
        ;


        console.log('Before the HTM; generator')

        // TODO: Ths needs to work
        fs.writeFileSync(
            "./output/index.html",
            generateTeam(newStaffMemberData),
            "utf-8"
        );
        console.log('After the HTM; generator')

        // .then((response) => fs.writeFile('index.html', createReadme(response), (err) =>
        // err ? console.error(err) : console.log('HTML file was succesfully created')));
                
    } 



    async function init() {
        console.log('Calling the Manager');
        const managerWait = await managerQuestions()

        // console.log('We need the functions back!')
        // console.log('Our current awway is: ', teamName)


        //Todo: If we do not comment the following, we will have problems running the code. It simultaneously asks for the same questions.
        // const teamWait = await intern()

        //Todo: This code is useful to create the HTML file, the problem with it is that it does not les us run inquirer properly
        // .then((response) => fs.writeFile('index.html', createReadme(response), (err) =>
        // err ? console.error(err) : console.log('HTML file was succesfully created')));
        // console.log('After the call')


        // .then((response) => fs.writeFile('index.html', createReadme(response), (err) =>
        // err ? console.error(err) : console.log('HTML file was succesfully created')));

    }

    init()
    


            // Documentations

            // Why Is Array/Object Destructuring So Useful And How To Use It
            // https://www.youtube.com/watch?v=NIq3qLaHCIs

            // Array to JSON format
            // https://stackoverflow.com/questions/2295496/convert-array-to-json