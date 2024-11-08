import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtcfGtE0vvPuei6yXJc-YhVBZ9OXNmZiQ",
  authDomain: "gameonapp-b5394.firebaseapp.com",
  projectId: "gameonapp-b5394",
  storageBucket: "gameonapp-b5394.firebasestorage.app",
  messagingSenderId: "998864917476",
  appId: "1:998864917476:web:e675cdcaf5b92f2fbe2df1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, app};