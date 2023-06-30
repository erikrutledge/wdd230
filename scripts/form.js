const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#message");

pw2.addEventListener("focusout", checkSame);

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function checkSame() {
    if (pw1.value !== pw2.value) {
        message.textContent = "❗PASSWORDS DO NOT MATCH❗";
        message.style.visibility = "show";
        pw2.style.backgroundColor = "fff0f3";
        pw2.value = ""
        pw2.focus();
    } else {
        message.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
}

function displayRatingValue() {
    rangevalue.innerHTML = `Page Rating: ${range.value} / 10`;
}


