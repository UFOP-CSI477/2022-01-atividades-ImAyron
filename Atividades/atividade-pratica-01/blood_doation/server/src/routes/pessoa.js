import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
const pessoaRouter = Router();

const createPessoaController = new CreatePessoaController();
const getAllPessoaController = new GetAllPessoaController();

pessoaRouter.get('/pessoas',getAllPessoaController.handle);
pessoaRouter.post('/pessoas', createPessoaController.handle);

export { pessoaRouter };