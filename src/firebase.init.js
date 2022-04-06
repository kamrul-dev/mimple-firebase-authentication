// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhB5Z8TAmt6JwG32uq4nrMoK1wX_9jnrA",
  authDomain: "mimple-firebase-authentication.firebaseapp.com",
  projectId: "mimple-firebase-authentication",
  storageBucket: "mimple-firebase-authentication.appspot.com",
  messagingSenderId: "28226681505",
  appId: "1:28226681505:web:4b93fa5797404cd3e8cee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;