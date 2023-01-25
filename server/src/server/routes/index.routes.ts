import { Router } from "express";
import MenuController from "../../controllers/MenuController";

const Routes = Router();

Routes.get("/menu", MenuController.list);

export default Routes;