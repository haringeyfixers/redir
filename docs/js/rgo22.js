// let ffDebug=false; if (ffDebug==true) {sw_targ=false;console.log (urlParams)}; break; https://haringeyfixers.github.io/redir/rdhfix.htm?h=h42&p=test123
// https://haringeyfixers.github.io/redir/rgo.htm?h=A4&p=hrc h=a5, h=a3
let ffCalledBy="rgo.htm", urlParams = {}, parm_h="h", parm_p="p"; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
const params = new URLSearchParams(window.location.search);

let sw_targ = true;
let ff_targ_text = '';
let ff_targ = '';
let ffURL='';

let parm22 = params.get(parm_h); 
let parm33 = params.get(parm_p);

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

// --- UPDATED CORE FUNCTION ---
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
ffURL = getNextEventURL(hfevents);
if (ffURL==null) {ffURL='https://haringeyfixers.eventbrite.com'}
// comment the below out if you really want an auto-updating one
ffURL='https://haringeyfixers.eventbrite.com'
ff_targ_text='Haringey Fixers';  ff_targ=ffURL
console.log("The next event URL is: " + ffURL);

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
redirectWithBackgroundUpdate(ffURL, parm22+"_"+ffCalledBy+"_"+parm33);
// if (sw_targ==true) {window.location.href=ff_targ;} else {document.write('There may have been an error - no action possible:'+ff_targ);}
