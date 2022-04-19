const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const personagens = require('./src/routes/personagens.routes');
const connectToDatabase = require('./src/database/database');

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/personagens', personagens);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
