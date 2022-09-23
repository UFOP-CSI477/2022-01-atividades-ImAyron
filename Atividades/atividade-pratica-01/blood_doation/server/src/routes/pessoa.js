import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoaController.js';

const pessoaRouter = Router();

const createPessoaController = new CreatePessoaController();
const getAllPessoaController = new GetAllPessoaController();
const getByIdPessoaController = new GetByIdPessoaController();

pessoaRouter.get('/pessoas',getAllPessoaController.handle);
pessoaRouter.post('/pessoas', createPessoaController.handle);
pessoaRouter.get('/pessoas/:id', getByIdPessoaController.handle);

export { pessoaRouter };