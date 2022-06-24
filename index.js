window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if ((document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) && screen.width > 750) {
    document.getElementById("navbar").style.visibility = "hidden";
    document.getElementById("navbar").style.opacity = "0";
  } else {
    document.getElementById("navbar").style.visibility = "visible";
    document.getElementById("navbar").style.opacity = "1";
  }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("footer").style.opacity = "1";
  }else {
    document.getElementById("footer").style.visibility = "hidden";
    document.getElementById("footer").style.opacity = "0";
  }
}


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
