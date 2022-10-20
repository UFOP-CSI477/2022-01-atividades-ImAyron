import { Router } from 'express';
import { CreateUnidadesController} from '../controller/unidades/CreateUnidadesController.js';
import { GetAllUnidadesController } from '../controller/unidades/GetAllunidadesController.js';


const unidadeRouter= Router();

const getAllunidadesController= new GetAllUnidadesController();
const createUnidadesController=new CreateUnidadesController();

unidadeRouter.post('/unidades', createUnidadesController.handle);
unidadeRouter.get('/unidades',getAllunidadesController.handle);

export{unidadeRouter};