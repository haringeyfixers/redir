//  p=hrc p=crc p=bwf p=ag
// https://bit.ly/hf26h https://haringeyfixers.github.io/redir/go22book.htm?h=A5&p=hrc&b=loc22 h=a5, h=a3
// https://console.firebase.google.com/project/activity-db-8b49f/firestore/databases/-default-/data/~2Fredirect_logs
let ffCalledBy="go22book.htm", urlParams = {}, parm_b="b", parm_h="h", parm_l="l", parm_p="p"; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
let userAgent = navigator.userAgent;
const params = new URLSearchParams(window.location.search);

let ffTarget_URL='https://www.eventbrite.co.uk/cc/haringey-repair-cafes-461019';

let p_bitly    = params.get(parm_b); if (p_bitly==null) {p_bitly="not from Bitly"}// b=bit.ly from which location?
let p_Asize    = params.get(parm_h); // size of medium eg A5
let p_location = params.get(parm_l); // location eg N6 6BJ
let p_topic    = params.get(parm_p); // info about eg hrc - highgate RC

// --- ASSIGNMENT & LOGGING ---
// ffTarget_URL = 
// if (ffTarget_URL==null) {ffTarget_URL='https://www.eventbrite.co.uk/cc/haringey-repair-cafes-461019'}
// console.log("The forward URL is: " + ffTarget_URL);

async function redirectWithBackgroundUpdate(targetUrl, valueX) {
  if ('serviceWorker' in navigator) {
    try {
      // 1. Register/Get the Service Worker
      const registration = await navigator.serviceWorker.register('go22sw.js');
      
      // Ensure the worker is active before sending message
      const worker = registration.active || registration.installing || registration.waiting;

      // 2. Send the data to the worker
      worker.postMessage({
        type: 'UPDATE_FIRESTORE',
        payload: {
          value: valueX,
          referer: document.referrer || "direct",
          timestamp: new Date().toISOString()
        }
      });

      // 3. Redirect immediately
      // The Service Worker will finish the 'waitUntil' task in the background
      window.location.href = targetUrl;

    } catch (error) {
      console.error("Service Worker failed:", error);
      window.location.href = targetUrl; // Fallback redirect
    }
  } else {
    // Fallback if browser doesn't support Service Workers
    window.location.href = targetUrl;
  }
}

// Usage:
const ffOut="Called  by_"+ffCalledBy+", Asize_"+p_Asize+ ", From_"+p_location+", About_"+p_topic+", Bitly_"+p_bitly+", Agent_"+userAgent;
redirectWithBackgroundUpdate(ffTarget_URL,ffOut);

