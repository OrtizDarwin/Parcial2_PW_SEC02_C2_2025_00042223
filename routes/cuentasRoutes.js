
import express from "express";
import {
  listOrQueryCuentas,
  getCuentaById
} from "../controllers/cuentasController.js";

const router = express.Router();

// GET cuentas 
router.get("/", listOrQueryCuentas);

// GET cuentas/:id
router.get("/:id", getCuentaById);

export default router;
