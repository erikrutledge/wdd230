let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let fullDate = `${day}/${month}/${year}`;
let modified = document.lastModified;

document.getElementById('year').innerHTML = `&copy${year} | Erik Rutledge`
document.getElementById('lastModified').innerHTML = `Last Modified - ${modified}`


const visitsDisplay = document.querySelector(".visits");
const welcomeMessage = document.querySelector(".welcome");
const today = document.querySelector(".today");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisited = localStorage.getItem("lastVisited") || 0;

today.textContent = `Today is ${weekday[date.getDay()]}`

// Is this the first visit?
if (numVisits !== 0) {
    if (lastVisited == 0) {
        welcomeMessage.textContent = "Back again so soon, Awesome!"
    }
    else if (lastVisited == 1){
        welcomeMessage.textContent = `Last visited yesterday.`;
    }
    else {
        welcomeMessage.textContent = `Last visited ${lastVisited} days ago.`;
    }
    visitsDisplay.textContent = `Total Page Visits: ${numVisits}`;
} 
else {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}

// Increment the number of page views.
numVisits++;

// Store new number of page visits/date in local storage.
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("visitDate", day);