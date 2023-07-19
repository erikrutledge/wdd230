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
