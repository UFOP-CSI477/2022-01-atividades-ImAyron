import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacaoController.js';
import { GetAllDoacaoController } from '../controller/doacoes/GetAllDoacaoController.js';
import { GetByIdDoacaoController} from '../controller/doacoes/GetByIdDoacaoController.js';


const doacaoRouter = Router();

const getAllDoacaoController = new GetAllDoacaoController();
const createDoacaoController = new CreateDoacaoController();
const getByIdDoacaoController = new GetByIdDoacaoController();

doacaoRouter.post('/doacoes', createDoacaoController.handle);
doacaoRouter.get('/doacoes',getAllDoacaoController.handle);
doacaoRouter.get('/doacoes/:id',getByIdDoacaoController.handle);

export { doacaoRouter };