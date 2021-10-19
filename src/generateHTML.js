
function _generateIcon(employee) {
    //TODO
    return "";
}

function _generateCard(employee) {
    let icon = _generateIcon(employee);
    let cardStart = `<div class="col-12 col-md-6 col-xl-3">
    <article class="card p-0 shadow">
        <div class="card-body  bg-primary text-white">
            <h2 class="card-title">${employee.getName()}</h2> 
            <h3 class="lead">${icon}${employee.getRole()}</h3>
        </div>
        <div class="card-body bg-grey">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: ${employee.getEmail()}</li>`
    let cardEnd = `
    </ul>
</div>
</article>
</div>`;
    let specialItem = "";
    switch(employee.getRole()) {
        case "Manager":
            specialItem = `<li class="list-group-item">Office number: ${employee.officeNumber}</li>`;
            break;
        case "Engineer":
            specialItem = `<li class="list-group-item">GitHub: ${employee.getGithub()}</li>`;
            break;
        case "Intern":
            specialItem = `<li class="list-group-item">School: ${employee.getSchool()}</li>`
    }

    return cardStart + specialItem + cardEnd;
}

function generateWebsite(employees) {
    console.log("generating html based off data:", employees);

    let htmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>==CHANGE ME==</title>
</head>
<body>
    <nav class="nav bg-red p-5 justify-content-center text-white">
        <h1 class="display-1">My Team</h1>
    </nav>
    <main class="container">
        <div class="row flex-wrap pt-4 g-4">`;
    
    let htmlEnd = `
            
        </div>
    </main>
</body>
</html>`
    let cards = ""
    for(let employee of employees) {
        cards += _generateCard(employee) + "\n\n";
    }
    return htmlStart + cards + htmlEnd;
}

module.exports = generateWebsite;