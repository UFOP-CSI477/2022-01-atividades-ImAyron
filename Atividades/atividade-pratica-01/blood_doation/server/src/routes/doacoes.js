import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacaoController.js';

const doacaoRouter = Router();

const createDoacaoController = new CreateDoacaoController();

doacaoRouter.post('/doacoes', createDoacaoController.handle);

export { doacaoRouter };