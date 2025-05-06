// src/firebase.config.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBFp5UNBc6cwxKKK2aDhWADtTujB4Sgito",
  authDomain: "ai-skills-notification.firebaseapp.com",
  projectId: "ai-skills-notification",
  messagingSenderId: "707945912911",
  appId: "1:707945912911:web:ed7581b52ca7a871c9683a",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
