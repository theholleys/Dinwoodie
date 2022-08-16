const toggleButton = document.getElementsByClassName("toggle-button")[0]
const headerLinks = document.getElementsByClassName("header")[0]
const barOne = document.getElementsByClassName("bar-one")[0]
const barTwo = document.getElementsByClassName("bar-two")[0]
const barThree = document.getElementsByClassName("bar-three")[0]

toggleButton.addEventListener("click", (menuItems) => {
    headerLinks.classList.toggle("active");
    toggleButton.classList.toggle("active");
    barOne.classList.toggle("active");
    barTwo.classList.toggle("active");
    barThree.classList.toggle("active");
})


const acceptCookies = document.getElementById("accept-cookies");
const declineCookies = document.getElementById("decline-cookies");
const cookieModal = document.querySelector(".cookie-modal");
const googleMap = document.querySelector(".mapouter");

acceptCookies.addEventListener('click', () => {
    //cookieModal.style.display = "none";
    document.cookie = "mapsEnabled=true;";
    const mapsEnabled = "TRUE";
    console.log(mapsEnabled);
})

declineCookies.addEventListener('click', () => {
    //cookieModal.style.display = "none";
    //googleMap.style.display = "none";
    document.cookie = "mapsEnabled=false;";
    const mapsEnabled = "FALSE";
    console.log(mapsEnabled);
})
