import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';

const pessoaRouter = Router();

const createPessoaController = new CreatePessoaController();

pessoaRouter.post('/pessoas', createPessoaController.handle);

export { pessoaRouter };