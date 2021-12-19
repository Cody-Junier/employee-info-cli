const managerTemplate= (manager) =>{
    return `<div class="card" style="width: 18rem;">
    <div class="card-body p-0">
      <h5 class="card-title bg-danger p-2">Manager ${manager.name}</h5>
      <ul class="card-text">
        <li class="py-1">ID: ${manager.id}</li>
        <li class="py-1">Email: <a href= "mailto: ${manager.email}">${manager.email}</a></li>
        <li class="py-1">Office Number: ${manager.office}</li>
        </ul>
        </div>
  </div>`
}
const engineerTemplate= (engineer) =>{
    return `<div class="card" style="width: 18rem;">
    <div class="card-body p-0">
      <h5 class="card-title bg-info p-2">Engineer ${engineer.name}</h5>
      <ul class="card-text">
      <li class="py-1">ID: ${engineer.id}</li>
      <li class="py-1">Email: <a href= "mailto: ${engineer.email}">${engineer.email}</a></li>
      <li class="py-1">GitHub: <a href="https://github.com/${engineer.github}"target="_blank">${engineer.github}</a></li>
      </ul>
    </div>
  </div>`
}
const internTemplate= (intern) =>{
    return `<div class="card" style="width: 18rem;">
    <div class="card-body p-0">
      <h5 class="card-title bg-warning p-2">Intern: ${intern.name}</h5>
      <ul class="card-text">
      <li class="py-1">ID: ${intern.id}</li>
      <li class="py-1">Email: <a href= "mailto: ${intern.email}">${intern.email}</a></li>
      <li class="py-1">School: ${intern.school}</li>
      </ul>
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
<header>
<h1 class="text-center bg-black text-white p-5">Workspace Info</h1>
</header>
<main class="d-flex justify-content-center">
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
</main>  
</body>
</html>`}

module.exports= genHtml