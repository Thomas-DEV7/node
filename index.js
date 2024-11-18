const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Array para simular um banco de dados
const items = [];

// Função para popular o array com dados iniciais
function populateItems() {
    for (let i = 1; i <= 5; i++) {
        items.push({
            id: i,
            name: `Item ${i}`,
            description: `Descrição do Item ${i}`
        });
    }
}

// Popula o array ao iniciar a aplicação
populateItems();

// Rota para criar um item
app.post('/items', (req, res) => {
    const item = req.body;

    // Validação básica para evitar objetos vazios
    if (!item.id || !item.name || !item.description) {
        return res.status(400).send({ error: 'Dados incompletos. Certifique-se de incluir id, name e description.' });
    }

    items.push(item);
    res.status(201).send(item);
});

// Rota para listar todos os itens
app.get('/items', (req, res) => {
    if (items.length === 0) {
        return res.status(404).send({ message: 'Nenhum item encontrado.' });
    }
    res.send(items);
});

// Rota para obter um item por ID
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === id);

    if (item) {
        res.send(item);
    } else {
        res.status(404).send({ error: 'Item não encontrado.' });
    }
});

// Rota para atualizar um item
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex(i => i.id === id);

    if (index !== -1) {
        // Atualiza somente os campos enviados no body
        items[index] = { ...items[index], ...req.body };
        res.send(items[index]);
    } else {
        res.status(404).send({ error: 'Item não encontrado.' });
    }
});

// Rota para deletar um item
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex(i => i.id === id);

    if (index !== -1) {
        items.splice(index, 1);
        res.status(204).send(); // Retorno 204 (sem conteúdo) para deletar
    } else {
        res.status(404).send({ error: 'Item não encontrado.' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
