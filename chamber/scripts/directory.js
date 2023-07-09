const membersURL = "https://erikrutledge.github.io/wdd230/chamber/data/members.json";

const gridDest = document.querySelector('#grid');
const listDest = document.querySelector('#table');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    createElements(data.members);
    displayGrid();
}

function createElements(members) {
    members.forEach(member => {
        // GRID CONTENT
        // Create all the elements
        const card = document.createElement("div");
        const icon = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");

        // Define the elements by drawing from the JSON
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Icon for ${member.name}`);
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.setAttribute('href', member.website);
        website.textContent = member.website;

        // Add the elements to the card
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        // Add card to the content section of the page 
        gridDest.appendChild(card);

        // LIST CONTENT
        // Create elements to fill the table
        const row = document.createElement("tr");
        const c1 = document.createElement("td")
        const c2 = document.createElement("td")
        const c3 = document.createElement("td")
        const c4 = document.createElement("td")

        c1.textContent = member.name;
        c2.textContent = member.phone;
        c3.textContent = member.membership;
        const webpage = document.createElement("a");
        webpage.setAttribute('href', member.website);
        webpage.textContent = "More Details";
        c4.appendChild(webpage);

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        listDest.appendChild(row);
    })
}

function displayGrid() {
    document.getElementById("grid").style.display = "";
    document.getElementById("table").style.display = "none";

}

function displayTable() {
    document.getElementById("table").style.display = "";
    document.getElementById("grid").style.display = "none";

}
getMembers();