import { Router } from "express";

import { CreateLocalController } from '../controller/local/CreateLocalController.js';

const localRouter = Router();

const createLocalController= new CreateLocalController();

localRouter.post('/locais',createLocalController.handle);

export { localRouter }