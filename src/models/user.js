import connectDatabase from "../config/dbConfig.js";

export async function getUsers() {
    try {
        const client = await connectDatabase(process.env.DB);
        const db = client.db("users");  // Usa o cliente MongoDB para acessar o banco
        const collection = db.collection("User");
        return await collection.find().toArray();  // Retorna todos os usuários
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        throw error;  // Lança o erro para ser capturado no controller
    }
}
