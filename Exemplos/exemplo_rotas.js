/**
 * Exemplo 1 - Rotas
 */
var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200,  {"Content-Type": "text/html"});

    if(request.url == '/'){
        //http://localhost:3000/
        response.write("<h1> Página de Raiz. </h1>");
    }else if(request.url == "/pagina1"){
        //http://localhost:3000/pagina1
        response.write("<h1> Página 1</h1>");
    }else{
        response.write("<h1> Rota não existe! </h1>");
    }

    response.end();
})

server.listen(3000, function () {
    console.log('Servidor em execução')
});