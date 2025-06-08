// importarProductos.js
import admin from "firebase-admin";
import { readFile } from "fs/promises";

// Leer la clave desde el archivo JSON
const serviceAccount = JSON.parse(
  await readFile(new URL('./serviceAccountKey.json', import.meta.url))
);

// Inicializar Firebase Admin con credenciales
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Cargar productos desde productos.json
const productos = JSON.parse(
  await readFile(new URL('./productos.json', import.meta.url))
);

// Subir productos a la colección "productos"
for (const producto of productos) {
  await db.collection("productos").add(producto);
  console.log(`Producto agregado: ${producto.nombre}`);
}

console.log("Todos los productos fueron importados correctamente.");
