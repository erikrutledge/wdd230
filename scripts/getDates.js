let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}/${month}/${year}`;
let modified = document.lastModified;

document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = modified