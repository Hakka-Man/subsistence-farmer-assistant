//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8M8JXrcoyOC6xmUMLBO1FvchytXvF6X8",
  authDomain: "subsistence-farmer-assistant.firebaseapp.com",
  projectId: "subsistence-farmer-assistant",
  storageBucket: "subsistence-farmer-assistant.appspot.com",
  messagingSenderId: "488299636099",
  appId: "1:488299636099:web:c4d72dfbbee3a6acb2c2b6",
  measurementId: "G-NJX9FS6E95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);