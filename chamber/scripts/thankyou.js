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

const showInfo = document.getElementById("showData");
showInfo.innerHTML = `
<h3>Your information:</h3>
<p>First Name: ${show("firstName")}</p>
<p>Last Name: ${show("lastName")}</p>
<p>E-mail: ${show("email")}</p>
<p>Phone Number: ${show("phone")}</p>
<p>Organization Name: ${show("OrgName")}</p>
<p>Membership Level: ${show("mLevel")}</p>
<p>${show("timestamp").replaceAll("+", " ").replaceAll("%2C", ",").replaceAll("%3A", ":")}</p>
` 
