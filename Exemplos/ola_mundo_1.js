/**
 * EXEMPLO 2 - Olá mundo
 * O mesmo código do ola_mundo.js com diferente sintaxe
 */

var http = require('http');


var trataRequisicao = function (request, response) {
    response.writeHead(200,  {"Content-Type": "text/html"});
    response.write("<h1> Olá Mundo! </h1>");
    response.end();
}

var server = http.createServer(trataRequisicao)

var mensagemServidorLigado = function () {
    console.log('Servidor Olá Mundo em execução')
}

server.listen(3000, mensagemServidorLigado);
