let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${month}/${day}/${year}`;

document.getElementById('year').innerHTML = `&copy${year} | Erik Rutledge <br> United States of America`
document.getElementById('lastModified').innerHTML = `Last Modified ${fullDate}`
