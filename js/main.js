// Selectors

// functions
function displayHamburgerMenu() {
  console.log("clicked");
  const hamMenu = document.getElementById("nav-menu-mobile");
  let style = getComputedStyle(hamMenu);
  if (style.display == "none") {
    hamMenu.style.display = "block";
  } else {
    hamMenu.style.display = "none";
  }
}

function expandNavItems(target) {
  let childNodes = target.children;

  for (let i = 0; i < childNodes.length; i++) {

    if (childNodes[i].classList.contains("sub-menu__mobile")) {
      let styleDisplay = getComputedStyle(childNodes[i]).display;

      if (styleDisplay == "none") {
        childNodes[i].style.display = "block";
      } else {
        childNodes[i].style.display = "none";
      }
    }
  }
}

// event bubbling
document.body.addEventListener("click", (event) => {
  target = event.target;

  // Hamburger menu expansion
  if (target.id == "burger") {
    displayHamburgerMenu();
  }

  if (target.classList.contains("nav-item__mobile")) {
    expandNavItems(target);
    
  }

  
});
