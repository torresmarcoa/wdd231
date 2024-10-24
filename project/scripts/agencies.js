import { displayAgencies } from "./displayAgencies.js";

const url = `https://ll.thespacedevs.com/2.2.0/agencies/?limit=18&ordering=-total_launch_count&mode=listd&format=json`;

const agenciesmain = document.getElementById("agenciesgrid");

const before2000Btn = document.getElementById("before2000");
const after2000Btn = document.getElementById("after2000");
const allBtn = document.getElementById("all");

let agenciesData = [];

async function agenciesjson() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            agenciesData = data.results
            displayAgencies(agenciesData, agenciesmain);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

agenciesjson();

before2000Btn.addEventListener("click", () => {
    displayAgencies(agenciesData, agenciesmain, "before2000");
});

after2000Btn.addEventListener("click", () => {
    displayAgencies(agenciesData, agenciesmain, "after2000");
})

allBtn.addEventListener("click", () => {
    displayAgencies(agenciesData, agenciesmain);
})