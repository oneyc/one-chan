import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCQ1KNtGaJznUvtZ7U08toxrQse6_Qynqo",
  authDomain: "imageboard-df0cd.firebaseapp.com",
  projectId: "imageboard-df0cd",
  storageBucket: "imageboard-df0cd.appspot.com",
  messagingSenderId: "260546524341",
  appId: "1:260546524341:web:5b1cdb439a3f9f3a75bafc"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)