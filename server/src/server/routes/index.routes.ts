import { Router } from "express";
import MenuController from "../../controllers/MenuController";
import UsuarioController from "../../controllers/UsuarioController";

const Routes = Router();

Routes.get("/usuario", UsuarioController.list);

Routes.get("/menu", MenuController.list);

export default Routes;