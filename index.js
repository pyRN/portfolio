//Used to transform hamburger menu and open/close when clicked on small screens
function fnOpenMenu(oHamburgerMenuElement) {
  oHamburgerMenuElement.classList.toggle("open");
}

function fnShowMore() {
  var oEllipsis = document.getElementById("show-more");
  var oMoreText = document.getElementById("more-text");
  var oShowLess = document.getElementById("show-less");

  if (oEllipsis.style.display === "none") {
    oEllipsis.style.display = "inline";
    oShowLess.style.display = "none";
    oMoreText.style.display = "none";
  } else {
    oEllipsis.style.display = "none";
    oShowLess.style.display = "inline";
    oMoreText.style.display = "inline";
  }
}
