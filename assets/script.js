const toggleButton = document.getElementsByClassName("toggle-button")[0]
const headerLinks = document.getElementsByClassName("header")[0]

toggleButton.addEventListener("click", (menuItems) => {
    headerLinks.classList.toggle("active")
})
