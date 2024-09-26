const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.getElementById("cards")

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}


const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const h2 = document.createElement("h2");
        const img = document.createElement("img");

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        img.setAttribute("src", prophet.imageurl);
        img.setAttribute("alt", `Image of ${prophet.name} ${prophet.lastname}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "340");
        img.setAttribute("height", "400");

        card.appendChild(h2);
        card.appendChild(img);

        cards.appendChild(card);
    });
}

getProphetData(url);