const express = require("express");
const cors = require("cors");
const { WebpayPlus, Options, Environment } = require("transbank-sdk");

const app = express();
app.use(cors());
app.use(express.json());

// ------- 1.  Credenciales de integración -------
const options = new Options(
  "597055555532",                                        // Commerce Code
  "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C", // API Key Secret
  Environment.Integration
);

const tx = new WebpayPlus.Transaction(options);

// ------- 2.  Endpoint que llama el frontend ------
app.post("/crear-transaccion", async (req, res) => {
  const { monto } = req.body;
  const buyOrder  = "orden_"  + Date.now();
  const sessionId = "sesion_" + Date.now();
  const returnUrl = "http://localhost:5500/exito.html";

  try {
    const response = await tx.create(buyOrder, sessionId, monto, returnUrl);
    console.log("Transacción creada:", response.token);
    res.json({ url: response.url, token: response.token });
  } catch (err) {
    console.error("Error creando transacción:", err);
    res.status(500).send("Error en transacción");
  }
});

// ------- 3.  Levantar servidor -------------------
app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});
