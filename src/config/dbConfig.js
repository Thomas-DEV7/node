import { MongoClient } from "mongodb";

export default async function connectDatabase(url) {
    const client = new MongoClient(url);
    try {
        // console.log("Conectando ao banco de dados...");
        await client.connect();
        console.log("Conexão com MongoDB Atlas bem-sucedida!");
        return client;  // Retorna o MongoClient
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        process.exit(1);  // Encerra a aplicação em caso de erro
    }
}
