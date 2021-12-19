const inquirer = require('inquirer')
const Manager= require('../lib/manager')
const Engineer= require('../lib/engineer')
const Intern= require('../lib/intern')
const genHtml = require('./employeeInfoTemplate')
const fs= require('fs')
const path = require('path')

let workspace = []

const addEmployees = ()=>{
    inquirer.prompt([{
        type:"list",
        message:"Would you like to add more Employees?",
        name:"choice",
        choices:['Add Engineer', 'Add Intern', 'Finish'],
        default: 'Finish'
    }])
    .then(({choice})=>{
        console.log(choice)
        switch(choice){
            case'Add Engineer':
                addEngineer()
                break;
             case'Add Intern':
                addIntern()
                break;
            case 'Finish':
                console.log('Finished! Generating Page now...')
                generateIt(workspace)
                break;
            }}

    )
}

const addEngineer = ()=>{
    inquirer
        .prompt([
        {
            type:"input",
            message:"What is your Engineers' name?",
            name: "name",
            validate: engineerInput =>{
                if (engineerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Engineers' Info")
                    return false;
                }
            }
        },
        {
            type:"input",
            message:"Please enter the ID of the engineer.",
            name:"id",
            validate: engineerInput =>{
                if (engineerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Engineers' Info")
                    return false
                }
            }
        },
        {
            type:"input",
            message:"Please enter the email address of the engineer.",
            name:"email",
            validate: engineerInput =>{
                if (engineerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Engineers' Info")
                    return false
                }
            }
        },
        {
            type:"input",
            message:"Please enter the GitHub of the engineer.",
            name:"github",
            validate: engineerInput =>{
                if (engineerInput){
                    return true;
                }else{
                    console.log("Please Enter Your Engineers' Info")
                    return false
                }
            }
        }])
        .then(answers =>{
            const{name, id, email, github}=answers
            var engineer = new Engineer(name,id,email,github)
            workspace.push(engineer)
            console.log(workspace)
            addEmployees()
            
        })
}

const addIntern = ()=>{
    inquirer
        .prompt([
        {
            type:"input",
            message:"What is your Interns' name?",
            name: "name",
            validate: internInput =>{
                if (internInput){
                    return true;
                }else{
                    console.log("Please Enter Your Interns' Info")
                    return false;
                }
            }
        },
        {
            type:"input",
            message:"Please enter the ID of the intern.",
            name:"id",
            validate: internInput =>{
                if (internInput){
                    return true;
                }else{
                    console.log("Please Enter Your Interns' Info")
                    return false
                }
            }
        },
        {
            type:"input",
            message:"Please enter the email address of the intern.",
            name:"email",
            validate: internInput =>{
                if (internInput){
                    return true;
                }else{
                    console.log("Please Enter Your Interns' Info")
                    return false
                }
            }
        },
        {
            type:"input",
            message:"Please enter the school of the intern.",
            name:"school",
            validate: internInput =>{
                if (internInput){
                    return true;
                }else{
                    console.log("Please Enter Your Interns' Info")
                    return false
                }
            }
        }])
        .then(answers =>{
            const{name, id, email, school}=answers
            var intern = new Intern(name,id,email,school)
            workspace.push(intern)
            console.log(workspace)
            addEmployees()
            
        })
}

const addManager = () => {
inquirer
    .prompt([
    {
        type:"input",
        message:"What is your Managers' name?",
        name: "name",
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
    }])
    .then(answers =>{
        const{name, id, email, office}=answers
        var manager = new Manager(name,id,email,office)
        workspace.push(manager)
        console.log(workspace)
        addEmployees()
        
    })
    
    
}

const generateIt= (data)=>{
    console.log(genHtml(data))
    fs.writeFileSync(`${path.join(process.cwd())}/dist/workspace.html`, genHtml(data), err => {
		if (err) console.log(err)
	})
    // fs.writeFile('/dist/workspace.html', genHtml(data))

}

module.exports = addManager, generateIt