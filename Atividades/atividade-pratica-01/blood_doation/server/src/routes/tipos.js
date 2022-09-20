import { Router } from 'express';
import { CreateTiposController } from '../controller/tipos/CreateTiposController.js';
import { GetAllTiposController } from '../controller/tipos/GetAllTiposController.js';
import { GetAllTiposController } from '../controller/tipos/GetAllTiposController.js';

const tipoRouter = Router();

const createTipoController = new CreateTiposController();
const getAllTiposController = new GetAllTiposController();

tipoRouter.get('/tipos',getAllTiposController.handle)
tipoRouter.post('/tipos', createTipoController.handle);

export { tipoRouter };