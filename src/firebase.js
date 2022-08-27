import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMJMK0UQciPs-7Vd9kYO1LTWFvKGQQM-Y",
  authDomain: "bookmark-landing-page-8b90e.firebaseapp.com",
  projectId: "bookmark-landing-page-8b90e",
  storageBucket: "bookmark-landing-page-8b90e.appspot.com",
  messagingSenderId: "298401470471",
  appId: "1:298401470471:web:bc5fa1e3e628fe12e572a2",
  measurementId: "G-67CPD9BSW5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore=getFirestore(app);

