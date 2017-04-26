/**
 * Exemplo separar HTML do Javascript
 * Utilizamos o modulo nativo FS (File System)
 * https://nodejs.org/api/fs.html
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    //__dirname retorna o diretório raiz da aplicação
    fs.readFile(__dirname+'/index.html', function (erro, html) {
        response.writeHead(200,  {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    });



});

server.listen(3000, function () {
    console.log('Servidor em execução')
});