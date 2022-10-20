import { Router } from "express";
import { CreateProdutosController} from "../controller/produtos/CreateProdutosController.js";
import { GetAllProdutosController } from "../controller/produtos/GetAllProdutosController.js";
const produtosRouter= Router();

const createProdutosController =new CreateProdutosController();
const getAllProdutosController=new GetAllProdutosController();

produtosRouter.get('/produtos',getAllProdutosController.handle);
produtosRouter.post('/produtos',createProdutosController.handle);


export{produtosRouter};