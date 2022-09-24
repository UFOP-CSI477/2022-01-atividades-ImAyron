import { Router } from "express";

import { CreateLocalController } from '../controller/local/CreateLocalController.js';
import { GetAllLocalController } from "../controller/local/GetAllLocalController.js";
import { GetByIdLocalController } from "../controller/local/GetByIdLocalController.js";

const localRouter = Router();

const createLocalController= new CreateLocalController();
const getAllLocalController=new GetAllLocalController();
const getByidLocalController = new GetByIdLocalController();

localRouter.get('/locais',getAllLocalController.handle);
localRouter.post('/locais',createLocalController.handle);
localRouter.get('/locais/:id',getByidLocalController.handle);

export { localRouter }