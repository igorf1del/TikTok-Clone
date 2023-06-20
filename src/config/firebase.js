import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyC-gLmTPXr0LPctzQaj3bRAFmlIh9aVzrk",
  authDomain: "tiktok---jornada-6f48f.firebaseapp.com",
  projectId: "tiktok---jornada-6f48f",
  storageBucket: "tiktok---jornada-6f48f.appspot.com",
  messagingSenderId: "51043286859",
  appId: "1:51043286859:web:cc59a39be2865166a372ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;