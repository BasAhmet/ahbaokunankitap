import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyActPpb2TrOqKV4OwnxjJ36n33Xoh8ai0g",
  authDomain: "ahbaderskts.firebaseapp.com",
  projectId: "ahbaderskts",
  storageBucket: "ahbaderskts.firebasestorage.app",
  messagingSenderId: "813687362214",
  appId: "1:813687362214:web:d01dfee47affe151f4da67",
  measurementId: "G-NK49PPLC1L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
