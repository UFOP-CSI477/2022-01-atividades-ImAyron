import { Router } from 'express';
import { CreateTiposController } from '../controller/tipos/CreateTiposController.js';
import { GetAllTiposController } from '../controller/tipos/GetAllTiposController.js';
import { GetByIdTiposController} from '../controller/tipos/GetByIdTiposController.js';
import { UpdateTiposController } from '../controller/tipos/UpdateTiposController.js';

const tipoRouter = Router();

const createTipoController = new CreateTiposController();
const getAllTiposController = new GetAllTiposController();
const getByIdTiposController = new GetByIdTiposController();
const updateTiposController =new UpdateTiposController();

tipoRouter.get('/tipos',getAllTiposController.handle)
tipoRouter.post('/tipos', createTipoController.handle);
tipoRouter.get('/tipos/:id',getByIdTiposController.handle);
tipoRouter.put('/tipos',updateTiposController.handle);

export { tipoRouter };