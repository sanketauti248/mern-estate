// firebase.js

import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-3aec9.firebaseapp.com",
  projectId: "mern-realestate-3aec9",
  storageBucket: "mern-realestate-3aec9.appspot.com",
  messagingSenderId: "927147783743",
  appId: "1:927147783743:web:af4a8c0eb8cc1ad6e6ea8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; // Exporting the app object
