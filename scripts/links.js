const baseURL = "https://erikrutledge.github.io/wdd230/";
const linksURL = "https://erikrutledge.github.io/wdd230/data/links.json";
const container = document.querySelector('#links');

async function getLinks() {
    const response = await fetch('linksURL'); //../data/links.json
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}

// Loop through each week and create a list element for each.
function displayLinks(data) {
    data.forEach(week => {
        const li = document.createElement("li");
        li.textContent = `${week.week}: `;

        // Loop through each activity and create a link for each.
        week.links.forEach(link => {
            const activity = document.createElement("a");
            activity.textContent = `${link.title} | `
            activity.setAttribute('href', link.url);
            // Add each activity to the week
            li.appendChild(activity);
        });
        // Add each week to the list
        container.appendChild(li);
    });
}
getLinks();
