/**
 * Exemplo Capturar valores da url
 * query strings (?nome=claudio) e path (/administrador)
 *
 * Exemplo de Teste:
 * http://localhost:3000/?nome=claudio&idade=24&sexo=masculino
 * nome : claudio
 * idade : 24
 * sexo : masculino
 *
 */

var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    response.writeHead(200,  {"Content-Type": "text/html"});
    response.write("<h1> Dados Query String </h1>");

    //url.parse(request.url, true) faz um parse da url obtida
    var result = url.parse(request.url, true);

    for(var key in result.query){
        response.write("<h2>" + key + " : " + result.query[key]+"</h2>");
    }

    response.end();
});

server.listen(3000, function () {
    console.log('Servidor em execução')
});