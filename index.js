import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient;
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());


app.post('/users/new', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,

        }
    })
    res.status(201);
    res.send('dados chegando!')
})

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200);
    res.send(users)
})

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
