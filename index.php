<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heatmap</title>    
    <link rel="stylesheet" href="node_modules\bootstrap\dist\css\bootstrap.min.css">
    <script src='node_modules\bootstrap\dist\js\bootstrap.min.js'></script>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="css/heatmap.css">
</head>
<body>
    <div class="container">
        <div class="row">&nbsp;</div>
        <div class="row">            
            <div class="row">&nbsp;</div>
            <h1>Heatmap</h1>
            <div id="heatmap" class="heatmap d-flex justify-content-center p-0"></div>                     
            <div class="legendaColor d-flex justify-content-center p-0">&nbsp;</div>
            <div id="legendaText" class="legendaText d-flex justify-content-between p-0"></div>
        </div>
        <div class="row">&nbsp;</div>
        <div class="d-flex justify-content-start align-items-center">
            <div class=""> 
                <label>Escala de 0 até&nbsp;</label>           
                <input id="maxEscalaDados" class="col-6 text-center" type="text" name="maxEscalaDados" value="100"></input>            
            </div>
            <div class="p-0">
                <button id="btnEscala" class="btn btn-primary btn-sm">Aplicar</button>
            </div>
        </div>
    </div>    
    <script src="js/heatmap.js"></script>    
</body>
</html>