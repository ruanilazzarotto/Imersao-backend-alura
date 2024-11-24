import 'dotenv/config';
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.MONGO_CONNECTION_STRING);

export async function getTodosPosts(){
    const db = conexao.db("Imersao_Instabyte");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}
