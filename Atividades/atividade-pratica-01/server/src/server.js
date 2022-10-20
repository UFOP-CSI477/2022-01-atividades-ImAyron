import express from 'express';
import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';
import { localRouter } from './routes/locais.js';
import { pessoaRouter} from './routes/pessoa.js';
import { tipoRouter } from './routes/tipos.js';
import { doacaoRouter } from './routes/doacoes.js';
import { distribuicaoRouter } from './routes/distribuicoes.js';
import { unidadeRouter } from './routes/unidades.js';
import { produtosRouter } from './routes/produtos.js';
import cors from 'cors';

const PORT = 4000; //process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(localRouter);
app.use(pessoaRouter);
app.use(tipoRouter);
app.use(doacaoRouter);
app.use(distribuicaoRouter);
app.use(unidadeRouter);
app.use(produtosRouter);
app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
})