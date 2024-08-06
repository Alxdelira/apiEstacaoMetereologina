import express from "express";
import db from "./config/db_config.js";
import cors from "cors";
import routes from "./router/index.js";

function conect_db() {
    db.on('error', (error) => console.log(error));
    db.once('open', () => console.log('Conexão estabelecida com sucesso!'));
}
conect_db();
const app = express();

app.use(cors());
app.use(express.json());

routes(app);

export default app;