export const displayAgencyDetail = (agency) => {
    const agenciesModal = document.querySelector("dialog");
    
    agenciesModal.innerHTML = `
        <button id="closeModal">X</button>
        <h2>${agency.name}</h2>
        <h3>Country: ${agency.country_code}</h3>
        <p>${agency.description}</p>
    `;

    agenciesModal.showModal();
    const closeModal = document.getElementById("closeModal"); 
    closeModal.addEventListener("click", () => {
        agenciesModal.close()
    })

}