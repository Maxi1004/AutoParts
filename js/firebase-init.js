// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyDOR-0SKGUE3SYAN2H7oi7fB_K3oGuIndY",
  authDomain: "autoparts-d2658.firebaseapp.com",
  projectId: "autoparts-d2658",
  storageBucket: "autoparts-d2658.appspot.com",
  messagingSenderId: "350734360550",
  appId: "1:350734360550:web:96bdc460ef2c7cd8524027"
};

// Inicializar Firebase y exportar Auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
