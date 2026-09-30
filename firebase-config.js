// Firebase Configuration & Service Module
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInAnonymously, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  serverTimestamp 
} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyD8Hhh7_ilJUz9oMcdgBVS2pTuNAIqplRE",
  authDomain: "myfirstproject-4ee8d.firebaseapp.com",
  projectId: "myfirstproject-4ee8d",
  storageBucket: "myfirstproject-4ee8d.firebasestorage.app",
  messagingSenderId: "977119061725",
  appId: "1:977119061725:web:e91d68870ca82af6f21d34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default {
  app,
  auth,
  db
};
