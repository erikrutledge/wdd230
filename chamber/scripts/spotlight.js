const splight = document.querySelector('#splight');
const membersurl = "https://erikrutledge.github.io/wdd230/chamber/data/members.json" // "../data/members.json"

async function getMembers() {
    const response = await fetch(membersurl);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(data) {
    const counter = 0;
    while (counter <= 2) {
        let member = Math.floor(Math.random() * 8)
        if (data[member].membership === "Gold" | member.membership === "Silver") {
            const thumbnail = document.createElement("img");
            const name = document.createElement("a");

            thumbnail.setAttribute('src', data[member].icon);
            thumbnail.setAttribute('alt', "A thumbnail image for a company.");
            name.setAttribute('href', data[member].website);
            name.textContent = data[member].name;

            splight.appendChild(thumbnail);
            splight.appendChild(name);
            counter++
        }
    }
}
