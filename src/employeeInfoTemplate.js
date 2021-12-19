const managerTemplate= (manager) =>{
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager ${manager.name}</h5>
      <p class="card-text">ID: ${manager.id}</p>
      <p class="card-text">Email: <a href= "mailto: ${manager.email}">${manager.email}</a></p>
      <p class="card-text">Office Number: ${manager.office}</p>
    </div>
  </div>`
}
const engineerTemplate= (engineer) =>{
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer ${engineer.name}</h5>
      <p class="card-text">ID: ${engineer.id}</p>
      <p class="card-text">Email: <a href= "mailto: ${engineer.email}">${engineer.email}</a></p>
      <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}"target="_blank">${engineer.github}</a></p>
    </div>
  </div>`
}
const internTemplate= (intern) =>{
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern: ${intern.name}</h5>
      <p class="card-text">ID: ${intern.id}</p>
      <p class="card-text">Email: <a href= "mailto: ${intern.email}">${intern.email}</a></p>
      <p class="card-text">School: ${intern.school}</p>
    </div>
  </div>`
}


const genHtml =(workspace) =>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WorkSpace</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>

    
    ${workspace.filter(employee =>{
        if(employee.getRole()=== "Manager"){
            return employee
        }}).map(manager =>{
            return managerTemplate(manager)
        }).join("")}
    ${workspace.filter(employee =>{
        if(employee.getRole()=== "Engineer"){
            return employee
        }}).map(engineer =>{
            return engineerTemplate(engineer)
        }).join("")}
    ${workspace.filter(employee =>{
        if(employee.getRole()=== "Intern"){
            return employee
        }}).map(intern =>{
            return internTemplate(intern)
        }).join("")}
    
</body>
</html>`}

module.exports= genHtml