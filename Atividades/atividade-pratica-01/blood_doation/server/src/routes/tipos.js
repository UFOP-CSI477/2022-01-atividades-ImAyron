import { Router } from 'express';
import { CreateTiposController } from '../controller/tipos/CreateTiposController.js';


const tipoRouter = Router();

const createTipoController = new CreateTiposController();

tipoRouter.post('/tipos', createTipoController.handle);

export { tipoRouter };