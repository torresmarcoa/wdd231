const currentUrl = window.location.href;

const formInformation = currentUrl.split("?"); 

let formData = formInformation[1].split("&"); 

const show = (key) => {
    let result; 
    formData.forEach((element => {
        if (element.startsWith(key)) {
            result = element.split("=")[1].replace("%40", "@").replace("+", " ").replace("%2B", "+");
        }
    }));
    return (result);
}

const showInfo = document.getElementById("thankyoudiv");
showInfo.innerHTML = `
<h4>First Name:</h4>
<p>${show("firstName")}</p>
<h4>Last Name:</h4>
<p>${show("lastName")}</p>
<h4>E-mail</h4>
<p>${show("email")}</p>
<h4>Phone Number</h4>
<p>${show("phone")}</p>
<h4>Preferred Language:</h4>
<p>${show("language")}</p>
`