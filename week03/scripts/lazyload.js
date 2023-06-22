let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}/${month}/${year}`;
let modified = document.lastModified;

document.getElementById('year').innerHTML = `&copy${year} | Erik Rutledge <br> United States of America`
document.getElementById('modified').innerHTML = `Last Modified - ${modified}`