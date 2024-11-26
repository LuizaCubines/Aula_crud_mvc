
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/controllers');
const app = express();
//Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');
//Middleware body-parser faz o o parsing (análise) de dados de formulários enviados pelo POST
app.use(bodyParser.urlencoded({extended:false}));
//Rotas
app.get('/', userController.getAllUsers);
app.get('/edit/:id', userController.getUserById);
app.post('/edit/:id', userController.updateUser);
//app.get('/add', (req,res) => res.render('addd'));
//app.post('/add', userController.addUser);

//Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});