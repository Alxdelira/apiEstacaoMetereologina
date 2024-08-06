import EstacaoModel from "../model/EstacaoModel.js";



export default class EstacaoController {
    static async createEstacao(req, res) {
        try {
            const {
                pacotesRecebidos,
                sensorId,
                temperatura,
                umidade,
                posicaoVento,
                velocidadeVento,
                posicaoVentoGraus,
                chuva,
                bateria
            } = req.body;

            const novoDado =  await EstacaoModel.create({
                pacotesRecebidos,
                sensorId,
                temperatura,
                umidade,
                posicaoVento,
                velocidadeVento,
                posicaoVentoGraus,
                chuva,
                bateria
            });

            return res.status(201).json(novoDado);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ code: 500, message: "Erro interno no Servidor", error: true });
        }
    }
    static async getEstacoes(req, res) {
        try {
            const estacoes = await EstacaoModel.find();
            return res.status(200).json(estacoes);
        } catch (error) {
            return res.status(500).json({ code: 500, message: "Erro interno no Servidor", error: true });
        }
    }

}