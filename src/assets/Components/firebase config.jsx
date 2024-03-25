// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTeVQvnCrf27p2HVCVBBcYd4ZZ6zlVGE4",
  authDomain: "todo-45200.firebaseapp.com",
  projectId: "todo-45200",
  storageBucket: "todo-45200.appspot.com",
  messagingSenderId: "987428394644",
  appId: "1:987428394644:web:6fb7597c34be155aa8c681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const database = getDatabase(app);  
export default database;   