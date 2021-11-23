// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSEGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAN5QV5vQxc4_Irr0lI1TeZx8NYPH2O6bs",
  authDomain: "react-messenger-5d2e3.firebaseapp.com",
  databaseURL: "http://react-messenger-5d2e3.firebaseio.com",
  projectId: "react-messenger-5d2e3",
  storageBucket: "react-messenger-5d2e3.appspot.com",
  messagingSenderId: "424480422406",
  appId: "1:424480422406:web:6f7c49ff8eaf86dbc66187",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
