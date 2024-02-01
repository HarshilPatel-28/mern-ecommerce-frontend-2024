import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBP1C31jdKuOcRTASBcwGEnVdFxZcmiaY",
  authDomain: "mern-ecommerce-2024-dd20a.firebaseapp.com",
  projectId: "mern-ecommerce-2024-dd20a",
  storageBucket: "mern-ecommerce-2024-dd20a.appspot.com",
  messagingSenderId: "312491180328",
  appId: "1:312491180328:web:a891582d8a0889da43901d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider =new GoogleAuthProvider();