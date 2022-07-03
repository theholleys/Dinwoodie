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
