function navMenuFunction() {
	var x = document.getElementById("navBar");
	if (x.className === "nav-bar") {
    x.className += " nav-bar-responsive";
  } else {
    x.className = "nav-bar";
  }
}