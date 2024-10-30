// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDWZzaXDmqrVFBY-l3Suuxh9JAtH_gwCe4",
  authDomain: "artist-3a20d.firebaseapp.com",
  databaseURL: "https://artist-3a20d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "artist-3a20d",
  storageBucket: "artist-3a20d.appspot.com",
  messagingSenderId: "3023325264",
  appId: "1:3023325264:web:9804dd4efe7baa96132955",
  measurementId: "G-9VM4WCLVLP"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
