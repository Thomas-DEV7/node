import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/routes.js';  // Ajuste o caminho para onde o arquivo routes.js está

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Usa as rotas configuradas em routes.js
app.use(routes);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
