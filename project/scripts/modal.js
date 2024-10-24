export const displayAgencyDetail = (agency) => {
    const agenciesModal = document.querySelector("dialog");

    const image = document.createElement("img");
    image.setAttribute("id", "agencyImage"); 

    if (agency.image_url) {
        image.setAttribute("src", agency.logo_url);
        image.setAttribute("alt", agency.name);
    } else {
        image.setAttribute("src", "images/placeholder.webp");
        image.setAttribute("alt", "No image available");
    }

    image.setAttribute("style", "max-width: 300px; height: auto;");
    image.setAttribute("loading", "lazy");

    agenciesModal.innerHTML = `
        <button id="closeModal">X</button>
        <h2>${agency.name}</h2>
        <h3>Country: ${agency.country_code}</h3>
        <p>${agency.description}</p>
        <h3>Agency Icon</h3>
    `;

    agenciesModal.appendChild(image);

    agenciesModal.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        agenciesModal.close();
    });
};