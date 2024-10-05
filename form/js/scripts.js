const currentUrl = window.location.href;

const everthing = currentUrl.split("?");

let formData = everthing[1].split("&");

function show(cup) {
    let result;
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@").replace("+", " ").replace("%2B", "+");
        }
        
    });
    return (result);
}

const showInfo = document.querySelector("#results");
showInfo.innerHTML =  ` 
<p>Appointment for ${show("firs")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple. </p>
<p>Your Phone: ${show("phone")}</p>
<p>Your E-mail: <a href="mailto:${show("email")} target="_blank"">${show("email")}</a></p>`
