import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacaoController.js';
import { GetAllDoacaoController } from '../controller/doacoes/GetAllDoacaoController.js';

const doacaoRouter = Router();

const getAllDoacaoController = new GetAllDoacaoController();
const createDoacaoController = new CreateDoacaoController();

doacaoRouter.post('/doacoes', createDoacaoController.handle);
doacaoRouter.get('/doacoes',getAllDoacaoController.handle);

export { doacaoRouter };