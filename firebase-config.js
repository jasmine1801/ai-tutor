// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGtZ5NiFTcMjH2bxTOtkQcJeES28YZdz4",
  authDomain: "ai-tutor-912b0.firebaseapp.com",
  projectId: "ai-tutor-912b0",
  storageBucket: "ai-tutor-912b0.firebasestorage.app",
  messagingSenderId: "899835368939",
  appId: "1:899835368939:web:13f4e203266e2aba4ff5ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
