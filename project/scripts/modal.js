export const displayAgencyDetail = (agency) => {
    const agenciesModal = document.querySelector("dialog");
    console.log(agenciesModal);

    agenciesModal.innerHTML = `
        <button id="closeModal">X</button>
        <h2>${agency.name}</h2>
        <h3>Country: ${agency.country_code}</h3>
        <p>Total Launch Count: ${agency.total_launch_count}</p>
        <p>${agency.description}</p>
    `;

    agenciesModal.showModal();
    const closeModal = document.getElementById("closeModal"); 
    closeModal.addEventListener("click", () => {
        agenciesModal.close()
    })

}