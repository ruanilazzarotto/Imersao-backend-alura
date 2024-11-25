import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/update/:id", atualizarNovoPost);

}

export default routes;
