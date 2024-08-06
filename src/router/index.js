import express  from 'express';
import EstacaoController from '../controller/EstacaoController.js';


const router = express.Router();

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({ message: "API funcionando!" });
    });

    app.use(
        router.get("/dados", EstacaoController.getEstacoes),
        router.post("/dados", EstacaoController.createEstacao)        
    );
};

export default routes;