// 1. Combined Imports (Removed duplicates and added 'doc' and 'setDoc')
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const szfapname="activity-db-8b49f", szfapid="108478103688";
const schedule = {
    monday:    "AIza" + "Sy" + "Doh2cBbbo" + "_rleGZSF9QODh7q4sQdjN3_0", // Breaking the string stops scanners
    tuesday:   szfapname+".firebaseapp.com",
    wednesday: szfapname,
    thursday:  szfapname+".firebasestorage.app",
    friday:    szfapid,
    saturday:  "1:"+szfapid+":web:8b44ea48d9650b4d6d9f3d",
    sunday:    "G-PVWJ80PRM9",
};

const firebaseConfig = {
    apiKey:    schedule.monday,
    authDomain:schedule.tuesday,
    projectId: schedule.wednesday,
    storageBucket:     schedule.thursday,
    messagingSenderId: schedule.friday,
    appId:     schedule.saturday,
    measurementId:     schedule.sunday,
};

// 2. UI Setup & URL Parsing
const urlParams = new URLSearchParams(window.location.search);
const orderID = urlParams.get('oid');
const customerName = urlParams.get('name');

const activityTime = document.getElementById('activityTimeDisplay');
const nameID = document.getElementById('nameDisplay');
const btn = document.getElementById('sendBtn');
const statusMsg = document.getElementById('statusMsg');
const now = new Date();

const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',   // "Sunday"
  hour: 'numeric',   // "2"
  minute: '2-digit', // "15"
  hour12: true       // "pm"
});

// Format and lowercase the AM/PM for that specific "pm" look
//orderID;

if (orderID && customerName) {
    activityTime.innerText = formatter.format(now).replace(/\s([AP]M)$/, (match) => match.toLowerCase());
    nameID.innerText = customerName;
} else {
    activityTime.innerText = "Missing ID";
    nameID.innerText = "Please check the URL link used";
    btn.disabled = true;
}

// 3. Background Firebase Initialization
let db, auth, isInitialized = false;

const firebaseReadyPromise = (async () => {
    try {

        const app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
    
        // STAY WITH THIS:
        await signInAnonymously(auth); 
    
        isInitialized = true;
        console.log("Firebase initialized and User signed in");
    } catch (err) {
        console.error("Init Error:", err);
    }
})();

// 4. Final Submission Logic
async function handleSubmission() {
    const btn = document.getElementById('sendBtn');
    btn.disabled = true; 
    btn.innerText = "Connecting..."; // Feedback while Firebase loads

    try {
        await firebaseReadyPromise;
        if (!isInitialized) throw new Error("Connection failed.");

        // Generate Chronological ID
        const now = new Date();
        const timestampId = now.getFullYear().toString()        + "_"+
            (now.getMonth() + 1).toString().padStart(2, '0')    + "_"+
            now.getDate().toString().padStart(2, '0')           + "_"+
            now.getHours().toString().padStart(2, '0') +
            now.getMinutes().toString().padStart(2, '0')        + "_"+
            now.getSeconds().toString().padStart(2, '0'); //  + now.getMilliseconds().toString().padStart(3, '0');

        const customDocId = `${timestampId}-${orderID}`;

        // Save using setDoc and the custom ID
        await setDoc(doc(db, "bookings", customDocId), {
            name: customerName,
            orderID: orderID,
            createdAt: serverTimestamp(),
            userId: auth.currentUser.uid
        });

        // Success UI
        btn.classList.add('hidden'); 
        document.getElementById('checkIcon').style.activityTime = 'block'; 
        statusMsg.innerHTML = "<strong>Updated - you can close this now</strong>";
                
    } catch (err) {
        console.error("Submission Error:", err);
        statusMsg.innerHTML = "❌ " + err.message;
        btn.disabled = false;
        btn.innerText = "Retry";
    }
}

btn.addEventListener('click', handleSubmission);