
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const topNavBar= () => {
  const navClass = document.querySelector("top-nav-bar");
  if (navClass.className === "top-nav") {
    navClass.className += " responsive"
  } else {
      navClass.classList("top-nav")
  }
}
/*sign up */
const modal = document.querySelector('#sign-up');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* sign in */
const modal_signin = document.querySelector('#sign-in');
window.onclick = function(event) {
  if (event.target == modal_signin) {
    modal.style.display = "none";
  }
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
