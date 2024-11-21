import express from 'express';
import getAllUsers from '../controllers/userController.js';

const router = express.Router();

// Definindo a rota de GET para "/users"
router.get('/users', getAllUsers);

export default router;
