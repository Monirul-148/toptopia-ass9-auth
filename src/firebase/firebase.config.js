import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQgnghZrS8woAwRdjXKfdUBdfw85JMF0",
  authDomain: "toytopia-ass9-auth.firebaseapp.com",
  projectId: "toytopia-ass9-auth",
  storageBucket: "toytopia-ass9-auth.appspot.com", // firebasestorage.app → app
  messagingSenderId: "1080687904323",
  appId: "1:1080687904323:web:7cdbc6ffd367af848df6f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;
