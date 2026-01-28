// sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js');

// Initialize Firebase inside the Worker
const firebaseConfig = {
  apiKey: "AIzaSyDoh2cBbbo_rleGZSF9QODh7q4sQdjN3_0",
  authDomain: "activity-db-8b49f.firebaseapp.com",
  projectId: "activity-db-8b49f",
  storageBucket: "activity-db-8b49f.firebasestorage.app",
  messagingSenderId: "108478103688",
  appId: "1:108478103688:web:8b44ea48d9650b4d6d9f3d"
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

self.addEventListener('install', (event) => {
  // Forces the waiting service worker to become the active service worker
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Forces all open tabs to be controlled by this new worker immediately
  event.waitUntil(clients.claim());
});
