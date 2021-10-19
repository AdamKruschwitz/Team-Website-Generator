
function _generateIcon(employee) {
    //TODO
}

function _generateCard(employee) {
    return ""
}

function generateWebsite(employees) {
    console.log("generating html based off data:", data);

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
        cards += _generateCard(employee) += "\n\n";
    }
    return htmlStart + cards + htmlEnd;
}

module.exports = generateWebsite;