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
        const name = document.createElement("h3"); 
        const country = document.createElement("h4");
        const image = document.createElement("img")
        const foundingyear = document.createElement("p");
        const moredetailsbtn = document.createElement("button");


        name.innerHTML = `Name: ${agency.name}`; 
        country.innerHTML = `Country: ${agency.country_code}`;
        foundingyear.innerHTML = `Foundin Year: ${agency.founding_year}`;
        moredetailsbtn.innerHTML = "More Details";

        if (agency.image_url) {
            image.setAttribute("src", agency.logo_url);
            image.setAttribute("alt", agency.name);
            image.setAttribute("width", "250"); 
            image.setAttribute("height", "250");
        } else {   
            image.setAttribute("src", "images/placeholder.webp"); 
            image.setAttribute("alt", "No image available");
            image.setAttribute("width", "250"); 
            image.setAttribute("height", "250");
        }

        image.setAttribute("loading", "lazy");


        card.appendChild(image); 
        card.appendChild(name); 
        card.appendChild(country); 
        card.appendChild(foundingyear); 
        card.appendChild(moredetailsbtn);

        moredetailsbtn.addEventListener("click", () => {
            displayAgencyDetail(agency);
        });

        agenciesmain.appendChild(card); 
    });
}

