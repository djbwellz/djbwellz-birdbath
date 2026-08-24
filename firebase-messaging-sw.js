importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDUaajApNMSW-WzJDw145hjBHkIo_6OK8M",
  authDomain: "birdbath-notifications.firebaseapp.com",
  projectId: "birdbath-notifications",
  storageBucket: "birdbath-notifications.firebasestorage.app",
  messagingSenderId: "415792980593",
  appId: "1:415792980593:web:d88c14e75c82a1f8ac71d0"
});

firebase.messaging();
