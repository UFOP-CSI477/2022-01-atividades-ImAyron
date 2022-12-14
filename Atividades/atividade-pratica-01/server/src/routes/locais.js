import { Router } from "express";

import { CreateLocalController } from '../controller/local/CreateLocalController.js';
import { GetAllLocalController } from "../controller/local/GetAllLocalController.js";
import { GetByIdLocalController } from "../controller/local/GetByIdLocalController.js";
import { UpdateLocalController } from "../controller/local/UpdateLocalController.js";
import { DeletelocalController } from "../controller/local/DeleteLocalController.js";
import { GetByNameLocalController } from "../controller/local/GetByNameLocalController.js";

const localRouter = Router();

const createLocalController= new CreateLocalController();
const getAllLocalController=new GetAllLocalController();
const getByidLocalController = new GetByIdLocalController();
const updateLocalController =new UpdateLocalController();
const deleteLocalController = new DeletelocalController();
const getByNameLocalController= new GetByNameLocalController();

localRouter.get('/locais',getAllLocalController.handle);
localRouter.post('/locais',createLocalController.handle);
localRouter.get('/locais/:id',getByidLocalController.handle);
localRouter.put('/locais',updateLocalController.handle);
localRouter.delete('/locais/:id', deleteLocalController.handle);
localRouter.get('/local/:nome',getByNameLocalController.handle);

export { localRouter }