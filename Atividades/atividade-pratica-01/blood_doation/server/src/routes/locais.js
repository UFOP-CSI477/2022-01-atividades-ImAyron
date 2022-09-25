import { Router } from "express";

import { CreateLocalController } from '../controller/local/CreateLocalController.js';
import { GetAllLocalController } from "../controller/local/GetAllLocalController.js";
import { GetByIdLocalController } from "../controller/local/GetByIdLocalController.js";
import { UpdateLocalController } from "../controller/local/UpdateLocalController.js";

const localRouter = Router();

const createLocalController= new CreateLocalController();
const getAllLocalController=new GetAllLocalController();
const getByidLocalController = new GetByIdLocalController();
const updateLocalController =new UpdateLocalController();

localRouter.get('/locais',getAllLocalController.handle);
localRouter.post('/locais',createLocalController.handle);
localRouter.get('/locais/:id',getByidLocalController.handle);
localRouter.put('/locais',updateLocalController.handle);

export { localRouter }