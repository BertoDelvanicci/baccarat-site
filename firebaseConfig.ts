import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHOU39mHVhCiijbpu9bbc9NWLpSljRIB8",
  authDomain: "baccarat-b5fe1.firebaseapp.com",
  projectId: "baccarat-b5fe1",
  storageBucket: "baccarat-b5fe1.firebasestorage.app",
  messagingSenderId: "540071625609",
  appId: "1:540071625609:web:5bacad8882edcdc8ab1758",
  measurementId: "G-M9M7VMTL6H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebaseConfig;
