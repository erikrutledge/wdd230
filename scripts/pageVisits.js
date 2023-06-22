const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Is this the first visit?
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} 
else {
    visitsDisplay.textContent = "Your 1st visit, Welcome!";
}

// Increment the number of page views.
numVisits++;

// Store new number of page visits in local storage.
localStorage.setItem("numVisits-ls", numVisits);