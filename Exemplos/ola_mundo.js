/**
 * EXEMPLO 1 - Olá mundo
 */

var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200,  {"Content-Type": "text/html"});
    response.write("<h1> Olá Mundo! </h1>");
    response.end();
});

server.listen(3000, function () {
    console.log('Servidor Olá Mundo em execução')
});

/**
 * http.createServer() é responsavel por criar um servidor HTTP e o seu callback
 * function(request, response) é executado apenas quando recebe uma requesição
 * server.listen(porto), identifica a porta onde está "rodando"
 */