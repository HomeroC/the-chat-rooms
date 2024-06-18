
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxbC4VTH5aZWQc488BtvVogLK4poTKdN0",
  authDomain: "chat-app-a32f2.firebaseapp.com",
  projectId: "chat-app-a32f2",
  storageBucket: "chat-app-a32f2.appspot.com",
  messagingSenderId: "734782264174",
  appId: "1:734782264174:web:f40aa546498d8ecc1ca77f",
  measurementId: "G-JJQGKCS54B",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);
