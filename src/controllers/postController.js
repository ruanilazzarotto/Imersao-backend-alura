import { getTodosPosts } from "../models/postModels.js";
import { criarPost, atualizarPost } from "../models/postModels.js";

export async function listarPosts(req, res)
{
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
};

export async function postarNovoPost(req, res){
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    }catch(erro){
        console.erro(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"})
    }
};

export async function uploadImagem(req, res) {
    console.log(file);
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function atualizarNovoPost(req, res){
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    }
    try{
        const postCriado = await atualizarPost(id, novoPost);
        res.status(200).json(postCriado);
    }catch(erro){
        console.erro(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"})
    }
};
