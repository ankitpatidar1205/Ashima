importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBFp5UNBc6cwxKKK2aDhWADtTujB4Sgito",
  authDomain: "ai-skills-notification.firebaseapp.com",
  projectId: "ai-skills-notification",
  messagingSenderId: "707945912911",
  appId: "1:707945912911:web:ed7581b52ca7a871c9683a",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("⏰ Background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/default-icon.png",
  });
});
