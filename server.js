// server.js
// ------------------------------
// Este archivo SÍ usa Node.js.
// Express es una librería creada para Node.js.
// ------------------------------

const express = require('express');      // ← Importamos la librería de Node.js
const path = require('path');

const app = express();
const PORT = 3000;

// Servimos los archivos que estén en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en: http://localhost:${PORT}`);
});
