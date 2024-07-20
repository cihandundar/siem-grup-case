import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDePbdrQ6dbvcaM6tT8tQ8aYh_tDfVK-5Y",
  authDomain: "siem-grup-case.firebaseapp.com",
  projectId: "siem-grup-case",
  storageBucket: "siem-grup-case.appspot.com",
  messagingSenderId: "748445362529",
  appId: "1:748445362529:web:45a460694adff717613d20",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
