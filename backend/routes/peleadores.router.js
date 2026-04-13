import { actualizarPeleador, borrarPeleador, crearPeleador, encontrarPeleador, encontrarPeleadorporid } from "../controllers/peleador.controller.js";
import { Router } from "express";

export const peleadorRouter = Router()

peleadorRouter.post("/peleadores/crear" ,crearPeleador)
peleadorRouter.get("/peleadores",encontrarPeleador )
peleadorRouter.get("/peleadores/:id" ,encontrarPeleadorporid)
peleadorRouter.put("/peleadores/actualizar",actualizarPeleador)
peleadorRouter.delete("/peleadores/borrar",borrarPeleador)
