import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAsRGADX_Rv-9SDRc9keALP8hTquVIhwfA",
      authDomain: "aftt-c3578.firebaseapp.com",
      projectId: "aftt-c3578",
      storageBucket: "aftt-c3578.appspot.com",
      messagingSenderId: "854931926466",
      appId: "1:854931926466:web:86110b1f10e389d4a0fa5b",
      measurementId: "G-FLCYBJLE5V"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);