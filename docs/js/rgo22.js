// https://haringeyfixers.github.io/redir/rgo.htm?h=A4&p=hrc h=a5, h=a3
// https://bit.ly/hf26h https://haringeyfixers.github.io/redir/rgo.htm?h=A5&p=hrc&b=loc22 h=a5, h=a3
// https://console.firebase.google.com/project/activity-db-8b49f/firestore/databases/-default-/data/~2Fredirect_logs
let ffCalledBy="rgo.htm", urlParams = {}, parm_h="h", parm_p="p", parm_b="b"; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
let userAgent = navigator.userAgent;
const params = new URLSearchParams(window.location.search);

let ffTarget_URL='';

let parm11 = params.get(parm_b); if (parm11==null) {parm11="not supplied"}// b=bit.ly from which location?
let parm22 = params.get(parm_h); // size of medium eg A5
let parm33 = params.get(parm_p); // info about eg hrc - highgate RC

// --- Individual events ---
const hfevents = [
	{ date:'14/02/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1978898111522'},
	{ date:'14/03/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306559227'},
	{ date:'11/04/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306563239'},
	{ date:'09/05/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306566248'},
	{ date:'20/06/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306568254'},
	{ date:'11/07/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306576278'},
	{ date:'12/09/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306580290'},
	{ date:'10/10/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306581293'},
	{ date:'14/11/2026',url: 'https://www.eventbrite.co.uk/e/highgate-repair-cafe-registration-1980306583299'},
];

// --- HELPER TO FIX DATE PARSING ---
function parseDMY(s) {
    const [d, m, y] = s.split('/');
    return new Date(y, m - 1, d); // Months are 0-indexed
}

// --- CORE FUNCTION ---
function s22getNearestFutureEvent(eventData, fakeNow = new Date()) {
  return eventData.reduce((nearest, current) => {
    const currentDate = parseDMY(current.date);

    if (currentDate > fakeNow) {
      if (!nearest || currentDate < parseDMY(nearest.date)) { 
        return current;
      }
    }
    return nearest;
  }, null);
}

/**
 * Gets the next event and returns only the URL string.
 */
function getNextEventURL(eventData) {
    const nextEvent = s22getNearestFutureEvent(eventData);
    return nextEvent ? nextEvent.url : null;
}

// --- ASSIGNMENT & LOGGING ---
ffTarget_URL = getNextEventURL(hfevents);
if (ffTarget_URL==null) {ffTarget_URL='https://haringeyfixers.eventbrite.com'}
// comment the below out if you really want an auto-updating one
ffTarget_URL='https://haringeyfixers.eventbrite.com'
console.log("The next event URL is: " + ffTarget_URL);

async function redirectWithBackgroundUpdate(targetUrl, valueX) {
  if ('serviceWorker' in navigator) {
    try {
      // 1. Register/Get the Service Worker
      const registration = await navigator.serviceWorker.register('sw.js');
      
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
redirectWithBackgroundUpdate(ffTarget_URL, parm22+"_"+ffCalledBy+"_"+parm33+"_bitly="+parm11+"_agent="+userAgent);
// if (sw_targ==true) {window.location.href=ffTarget_URL;} else {document.write('There may have been an error - no action possible:'+ffTarget_URL);}
