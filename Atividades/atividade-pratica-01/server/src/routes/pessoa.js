import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoaController.js';
import { UpdatePessoaController } from '../controller/pessoas/UpdatePessoaController.js';
import { DeletePessoaController } from '../controller/pessoas/DeletePessoaController.js';
import { GetByNamePessoaController } from '../controller/pessoas/GetByNamePessoaController.js';

const pessoaRouter = Router();

const createPessoaController = new CreatePessoaController();
const getAllPessoaController = new GetAllPessoaController();
const getByIdPessoaController = new GetByIdPessoaController();
const updatePessoaController = new UpdatePessoaController();
const deletePessoaController = new DeletePessoaController();
const getByNamePessoaController= new GetByNamePessoaController();

pessoaRouter.get('/pessoas',getAllPessoaController.handle);
pessoaRouter.post('/pessoas', createPessoaController.handle);
pessoaRouter.get('/pessoas/:id', getByIdPessoaController.handle);
pessoaRouter.put('/pessoas',updatePessoaController.handle);
pessoaRouter.delete('/pessoas/:id',deletePessoaController.handle);
pessoaRouter.get('/pessoa/:nome',getByNamePessoaController.handle);

export { pessoaRouter };