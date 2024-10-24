import { displayAgencyDetail } from "./modal.js";

export const displayAgencies = (agencies, agenciesmain, filterYear) => {
    agenciesmain.innerHTML = "";

    const filteredAgencies = agencies
    .filter(agency => agency.founding_year)
    .filter(agency => {
        if (!filterYear) {
            return true;
        }
        return filterYear === "before2000" 
            ? agency.founding_year < 2000 
            : agency.founding_year >= 2000;
    });


    filteredAgencies.forEach(agency => {
        const card = document.createElement("section")
        const name = document.createElement("h2"); 
        const country = document.createElement("h3");
        const type = document.createElement("h4");
        const foundingyear = document.createElement("p");
        const moredetailsbtn = document.createElement("button");


        name.innerHTML = agency.name; 
        country.innerHTML = `Country: ${agency.country_code}`;
        type.innerHTML = `Agency Type: ${agency.type}`;
        foundingyear.innerHTML = `Foundin Year: ${agency.founding_year}`;
        moredetailsbtn.innerHTML = "More Details";

        card.appendChild(name); 
        card.appendChild(country); 
        card.appendChild(type);
        card.appendChild(foundingyear); 
        card.appendChild(moredetailsbtn);

        moredetailsbtn.addEventListener("click", () => {
            displayAgencyDetail(agency);
        });

        agenciesmain.appendChild(card); 
    });
}

