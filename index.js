//Used to transform hamburger menu and open/close when clicked on small screens
function fnOpenMenu(hamburgerMenuElement) {
  hamburgerMenuElement.classList.toggle("open");
}

//Used to scroll to contact me section
function fnContactMe() {
  console.log("here");
  document.getElementById("contact-section").scrollIntoView();
}
