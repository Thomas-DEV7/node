import { getUsers } from "../models/user.js";  // Importando a função do modelo

export default async function getAllUsers(req, res) {
    try {
        const users = await getUsers();  // Chama a função para obter os usuários
        res.status(200).json(users);  // Retorna os usuários com status 200
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuários", error: error.message });
    }
}
