import express from "express";
import cuentasRoutes from "./routes/cuentasRoutes.js";
import { getCuentasBalance } from "./controllers/cuentasController.js";

const app = express();
const PORT = 3130;

app.use(express.json());

app.use("/cuentas", cuentasRoutes);

// Ruta adicional del 2 Parte
app.get("/cuentasBalance", getCuentasBalance);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
