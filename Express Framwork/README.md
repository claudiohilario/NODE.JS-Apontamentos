# Express - Node.js web application framework
![](http://i.imgur.com/lNDMEIn.png)

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
http://expressjs.com/

## Características
- MVR (Model-View-Routes)
- MVC (Model-View-Controller)
- Roteamento de urls via callbacks;
- Middleware;
- Interface RESTFul;
- Suporte a File Uploads;
- Configuração baseado em variáveis de ambiente;
- Suporte a helpers dinâmicos;
- Integração com Template Engines;
- Integração com SQL e NoSQL;

## Extrutura do Express
![](http://i.imgur.com/ASC4Rzb.png)
- **package.json** - Principais informações sobre a aplicação como: nome, autor, versao, dependências etc.
- **public** - pasta pública onde serão armazenado o conteudo estático como imagens, css, javascript etc.
- **app.js** - ficheiro responsável por inicializar o servidor do projeto atraves do comando `node app.js`.
- **routes** - pasta responsável por manter todas as rotas da aplicação
- **views** - pasta que contém todas as views que serão renderizadas pelas rotas.


## Alguns Comandos
**Instalar Express**
```
npm install -g express
sudo npm install -g express-generator
```

**Ver comandos disponiveis**

```
express -h
```

**Criar projeto já com alguns recursos do Express**
```
express nome_projeto --ejs
cd nome_projeto
npm install
```
O comando `npm install` instala todas as dependências contidas no ficheiro package.json

