import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA75B8m3_K8-bDsupVBcBaOKDwsML_fwVs",
  authDomain: "chat-app-aae26.firebaseapp.com",
  projectId: "chat-app-aae26",
  storageBucket: "chat-app-aae26.appspot.com",
  messagingSenderId: "176154525159",
  appId: "1:176154525159:web:faa8870d92c73cb0fd1142",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
