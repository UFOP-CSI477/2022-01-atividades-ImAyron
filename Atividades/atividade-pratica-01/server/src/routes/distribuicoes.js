import { Router } from 'express';
import { CreateDistribuicoesController } from '../controller/distribuicoes/CreateDistribuicoesController.js';
import { GetAllDistribuicoesController} from '../controller/distribuicoes/GetAllDistribuicoesController.js';


const distribuicaoRouter = Router();
const getAllDistribuicoesController=new GetAllDistribuicoesController()
const createDistribuicoesController=new CreateDistribuicoesController();

distribuicaoRouter.post('/distribuicoes',createDistribuicoesController.handle);
distribuicaoRouter.get('/distribuicoes',getAllDistribuicoesController.handle);
export{distribuicaoRouter};