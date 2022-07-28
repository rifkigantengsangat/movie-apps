import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBIteJ5bTQxJtnzBg6RTazO4vi2mj7a0A",
  authDomain: "angular-cosmos-338902.firebaseapp.com",
  projectId: "angular-cosmos-338902",
  storageBucket: "angular-cosmos-338902.appspot.com",
  messagingSenderId: "1093475017737",
  appId: "1:1093475017737:web:b81241fb9e71b1380284d8",
  measurementId: "G-RPY8CMGNYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
