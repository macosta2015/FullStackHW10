// const Employee = require("./Employee");

// class Engineer extends Employee {

const Employee = require("./Employee");

class Engineer extends Employee {

   constructor (Engineer, EngineerResponsability , TeamMember) {
       super(Engineer,EngineerResponsability,TeamMember)
    //    this.github = github
   }
   getRole(){
       return 'Engineer'
   }
//    getGithub(){
//        return this.github
//    }
}

module.exports = Engineer;