import mongoose from "mongoose";


const EstacaoSchema = new mongoose.Schema({
    pacotesRecebidos: {
        type: String,
        required: true
    },
    sensorId: {
        type: String,
        required: true
    },
    temperatura: {
        type: String,
        required: true
    },
    umidade: {
        type: String,
        required: true
    },
    posicaoVento: {
        type: String,
        required: true
    },
    velocidadeVento: {
        type: String,
        required: true
    },
    posicaoVentoGraus: {
        type: String,
        required: true
    },
    chuva: {
        type: String,
        required: true
    },
    bateria: {
        type: String,
        required: true
    },
}, { timestamps: true });

const EstacaoModel = mongoose.model("Estacao", EstacaoSchema);

export default EstacaoModel;



