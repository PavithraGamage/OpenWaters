// platform drop down start --------------------------------
function platform_dropdown_show() {
  var box = document.getElementById("platform-dropdown");
  box.style.display = "flex";
}

function platform_dropdown_hide() {
  var box = document.getElementById("platform-dropdown");
  box.style.display = "none";
}
// platform drop down end --------------------------------

// resources drop down start --------------------------------
function resources_dropdown_show() {
  var box = document.getElementById("resources-dropdown");
  box.style.display = "flex";
}

function resources_dropdown_hide() {
  var box = document.getElementById("resources-dropdown");
  box.style.display = "none";
}
// resources drop down end --------------------------------

// about drop down start --------------------------------
function about_dropdown_show() {
  var box = document.getElementById("about-dropdown");
  box.style.display = "flex";
}

function about_dropdown_hide() {
  var box = document.getElementById("about-dropdown");
  box.style.display = "none";
}
// about drop down end --------------------------------

// mobile main drop down start -----------------------------------------
function mobile_menu_show() {
  var box = document.getElementById("main-drop-down");
  box.style.display = "block";

  var hamburger = document.getElementById('mobile-nav-expan');
  hamburger.style.display = "none";

  var close_btn = document.getElementById('mobile-nav-close-btn');
  close_btn.style.display = "block";
}

function mobile_menu_hide() {
  var box = document.getElementById("main-drop-down");
  box.style.display = "none";

  var close_btn = document.getElementById('mobile-nav-close-btn');
  close_btn.style.display = "none";

  var hamburger = document.getElementById('mobile-nav-expan');
  hamburger.style.display = "block";

  var platform_mobile_menu = document.getElementById('mobile-platform');
  platform_mobile_menu.style.display = "none";

  var box = document.getElementById("mobile-logo");
  box.style.display = "block";
}
// mobile main drop down end -----------------------------------------


function platform_mobile_menu_show() {
  var box = document.getElementById("mobile-logo");
  box.style.display = "none";

  var platform_mobile_menu = document.getElementById('mobile-platform');
  platform_mobile_menu.style.display = "block";
}