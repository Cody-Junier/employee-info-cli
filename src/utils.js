const inquirer = require('inquirer')
const Manager= require('../lib/manager')
const Engineer= require('../lib/engineer')
const Intern= require('../lib/intern')
const employeeInfoTemplate = require('./employeeInfoTemplate')

const getEmployeeInfo = () => {
    inquirer
        .prompt([
        {
            type:"input",
            message:"What is your Managers' name?",
            name: 'manager',
            validate: managerInput =>{
                if (managerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Managers' Info")
                    return false;
                }
            }
        },
        {
            type:"input",
            message:"Please enter the ID of the Manager.",
            name:"id",
            validate: managerInput =>{
                if (managerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Managers' Info")
                    return false
                }
            }
        },
        {
            type:"input",
            message:"Please enter the email address of the Manager.",
            name:"email",
            validate: managerInput =>{
                if (managerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Managers' Info")
                    return false
                }
            }
        },
        {
            type:"input",
            message:"Please enter the Office number of the manager.",
            name:"office",
            validate: managerInput =>{
                if (managerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Managers' Info")
                    return false
                }
            }
        },
        // Make below choices part of another function?
        {
            type:"list",
            message:"Would you like to add more Employees?",
            name:"employees?",
            choices:['Add Engineer', 'Add Intern', 'Finish'],
            default: 'Finish'
        }])
        .then(({choice})=>{
            if(choice ==='Add Engineer'){
                return addEngineer()
            } else if(choice === 'Add Intern'){
                return addIntern()
            }else{
                console.log('Finished! Generating Page now...')
                return 
            }

        })
}
// const addEngineer
// const addIntern
module.exports = getEmployeeInfo