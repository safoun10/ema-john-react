import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyChyD25gtQJkoRQ4frLg7RVGUktbB5zqNs",
    authDomain: "ema-john-firebase-auth-safoun.firebaseapp.com",
    projectId: "ema-john-firebase-auth-safoun",
    storageBucket: "ema-john-firebase-auth-safoun.appspot.com",
    messagingSenderId: "1044970821239",
    appId: "1:1044970821239:web:359391027567fbffe71872"
};

const app = initializeApp(firebaseConfig);

export default app;