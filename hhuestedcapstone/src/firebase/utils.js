import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO1fP8XNKM_1aaisUUCjWfFIXH9aUBpnQ",
  authDomain: "hhuestedcapstone.firebaseapp.com",
  projectId: "hhuestedcapstone",
  storageBucket: "hhuestedcapstone.appspot.com",
  messagingSenderId: "617873746646",
  appId: "1:617873746646:web:308d9a21e9ef278d687777",
  measurementId: "G-PE104J43FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firebase Auth Provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt : "select_account"
});
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export {app, auth};
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);