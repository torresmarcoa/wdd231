import { displayAgencies } from "./displayAgencies.js";

const url = `https://ll.thespacedevs.com/2.2.0/agencies/?limit=15&ordering=-total_launch_count&mode=detailed&format=json`;

const agenciesmain = document.getElementById("agenciesgrid");

async function agenciesjson() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayAgencies(data.results, agenciesmain);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

agenciesjson();
