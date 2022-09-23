import { Router } from 'express';
import { CreateTiposController } from '../controller/tipos/CreateTiposController.js';
import { GetAllTiposController } from '../controller/tipos/GetAllTiposController.js';
import { GetByIdTiposController} from '../controller/tipos/GetByIdTiposController.js';

const tipoRouter = Router();

const createTipoController = new CreateTiposController();
const getAllTiposController = new GetAllTiposController();
const getByIdTiposController = new GetByIdTiposController();

tipoRouter.get('/tipos',getAllTiposController.handle)
tipoRouter.post('/tipos', createTipoController.handle);
tipoRouter.get('/tipos/:id',getByIdTiposController.handle);

export { tipoRouter };