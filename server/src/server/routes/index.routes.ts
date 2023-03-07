import { Router } from "express";
import MenuController from "../../controllers/MenuController";
import TipoDespesaController from "../../controllers/TipoDespesaController";
import UsuarioController from "../../controllers/UsuarioController";

const Routes = Router();

Routes.get("/usuario", UsuarioController.list);

Routes.get("/menu", MenuController.list);

Routes.get("/tipo-despesa", TipoDespesaController.list)
Routes.post("/tipo-despesa", TipoDespesaController.create)
Routes.put("/tipo-despesa", TipoDespesaController.create)

export default Routes;