// sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js');

// Initialize Firebase inside the Worker
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

self.addEventListener('message', (event) => {
  if (event.data.type === 'UPDATE_FIRESTORE') {
    const { value, referer, timestamp } = event.data.payload;

    // We use event.waitUntil to keep the worker alive 
    // until the promise (database write) resolves.
    event.waitUntil(
      db.collection("redirect_logs").add({
        value: value,
        referer: referer,
        timestamp: timestamp
      })
      .then(() => console.log("Background update successful"))
      .catch((err) => console.error("Background update failed", err))
    );
  }
});