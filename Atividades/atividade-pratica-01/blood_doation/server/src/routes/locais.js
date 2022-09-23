import { Router } from "express";

import { CreateLocalController } from '../controller/local/CreateLocalController.js';
import { GetAllLocalController } from "../controller/local/GetAllLocalController.js";
import { GetByIdLocalController } from "../controller/local/GetByIdLocalController.js";

const localRouter = Router();

const createLocalController= new CreateLocalController();
const getAllLocalController=new GetAllLocalController();
const getByidlocalController = new GetByIdLocalController();

localRouter.get('/locais',getAllLocalController.handle);
localRouter.post('/locais',createLocalController.handle);
localRouter.get('/local/:id',getByidlocalController.handle);

export { localRouter }