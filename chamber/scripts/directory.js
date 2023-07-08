const linksURL = "https://erikrutledge.github.io/wdd230/chamber/data/members.json";
const destination = document.querySelector('#content');

async function getMembers() {
    const response = await fetch("../data/members.json"); // linksURL
    const data = await response.json();
    displayGrid(data.members);
}

function displayGrid(members) {
    members.forEach(member => {
        // Create all the grid elements
        const card = document.createElement("section");

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

        // Add the elements to the card
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        // Add card to the content section of the page 
        destination.appendChild(card);
    });
}
getMembers();

function displayList(data) {

}