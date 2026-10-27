const express = require('express');
const app = express();
const port = 3000;

// Configura o EJS como motor de telas
app.set('view engine', 'ejs');

const indexGet = (req, res) => {
    res.render('index'); // Procura automaticamente por views/index.ejs
};

app.get('/', indexGet);

app.listen(port, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${port}`);
});