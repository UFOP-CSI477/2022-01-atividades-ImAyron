import { Router } from 'express';
import { CreateTiposController } from '../controller/tipos/CreateTiposController.js';
import { GetAllTiposController } from '../controller/tipos/GetAllTiposController.js';
import { GetByIdTiposController} from '../controller/tipos/GetByIdTiposController.js';
import { UpdateTiposController } from '../controller/tipos/UpdateTiposController.js';
import { DeleteTiposController } from '../controller/tipos/DeleteTiposController.js';

const tipoRouter = Router();

const createTipoController = new CreateTiposController();
const getAllTiposController = new GetAllTiposController();
const getByIdTiposController = new GetByIdTiposController();
const updateTiposController =new UpdateTiposController();
const deleteTiposController = new DeleteTiposController();

tipoRouter.get('/tipos',getAllTiposController.handle)
tipoRouter.post('/tipos', createTipoController.handle);
tipoRouter.get('/tipos/:id',getByIdTiposController.handle);
tipoRouter.put('/tipos',updateTiposController.handle);
tipoRouter.delete('/tipos/:id',deleteTiposController.handle);

export { tipoRouter };