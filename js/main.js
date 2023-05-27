// platform drop down start --------------------------------
function platform_dropdown_show() {
  var box = document.getElementById("platform-dropdown");
  box.classList.add('menu-active');
}

function platform_dropdown_hide() {
  var box = document.getElementById("platform-dropdown");
  box.classList.remove('menu-active');
}
// platform drop down end --------------------------------

// resources drop down start --------------------------------
function resources_dropdown_show() {
  var box = document.getElementById("resources-dropdown");
  box.classList.add('menu-active');
}

function resources_dropdown_hide() {
  var box = document.getElementById("resources-dropdown");
  box.classList.remove('menu-active');
}
// resources drop down end --------------------------------

// about drop down start --------------------------------
function about_dropdown_show() {
  var box = document.getElementById("about-dropdown");
  box.classList.add('menu-active');
}

function about_dropdown_hide() {
  var box = document.getElementById("about-dropdown");
  box.classList.remove('menu-active');
}
// about drop down end --------------------------------

// mobile main drop down start -----------------------------------------
function mobile_menu_show() {
  var box = document.getElementById("main-drop-down");
  box.style.display = "block";

  var hamburger = document.getElementById("mobile-nav-expan");
  hamburger.style.display = "none";

  var close_btn = document.getElementById("mobile-nav-close-btn");
  close_btn.style.display = "block";

  var body = document.querySelector('body');
  body.style.overflow = "hidden";
}

function mobile_menu_hide() {
  var box = document.getElementById("main-drop-down");
  box.style.display = "none";

  var close_btn = document.getElementById("mobile-nav-close-btn");
  close_btn.style.display = "none";

  var hamburger = document.getElementById("mobile-nav-expan");
  hamburger.style.display = "block";

  var platform_mobile_menu = document.getElementById("mobile-platform");
  platform_mobile_menu.style.display = "none";

  var box = document.getElementById("mobile-logo");
  box.style.display = "block";

  var platform_expan = document.getElementById("mobile-platform-expan");
  platform_expan.style.display = "none";

  var box = document.getElementById("mobile-resource-expan");
  box.style.display = "none";

  var box = document.getElementById("mobile-resource");
  box.style.display = "none";

  var box = document.getElementById("mobile-about-expan");
  box.style.display = "none";

  var box = document.getElementById("mobile-about");
  box.style.display = "none";

  var body = document.querySelector('body');
  body.style.overflow = "unset";
}
// mobile main drop down end -----------------------------------------

// platform mobile menu start -----------------------------------------
function platform_mobile_menu_show() {
  var box = document.getElementById("mobile-logo");
  box.style.display = "none";

  var platform_mobile_menu = document.getElementById("mobile-platform");
  platform_mobile_menu.style.display = "flex";

  var main_drop_down = document.getElementById("main-drop-down");
  main_drop_down.style.display = "none";

  var platform_expan = document.getElementById("mobile-platform-expan");
  platform_expan.style.display = "block";
}
// platform mobile menu end ------------------------------------------

// platform menu back to main menu start -------------------------------------
function show_mobile_main_menu_platform() {
  var box = document.getElementById("mobile-platform-expan");
  box.style.display = "none";

  var logo = document.getElementById("mobile-logo");
  logo.style.display = "block";

  var platform_mobile_menu = document.getElementById("mobile-platform");
  platform_mobile_menu.style.display = "none";

  var main_drop = document.getElementById("main-drop-down");
  main_drop.style.display = "block";
}
// platform menu back to main menu end -----------------------------------------

function resource_mobile_menu_show() {
  var box = document.getElementById("mobile-resource-expan");
  box.style.display = "block";

  var hamburger = document.getElementById("main-drop-down");
  hamburger.style.display = "none";

  var box = document.getElementById("mobile-logo");
  box.style.display = "none";

  var box = document.getElementById("mobile-resource");
  box.style.display = "flex";
}

function show_mobile_main_menu_resources(){

  var box = document.getElementById("mobile-resource-expan");
  box.style.display = "none";

  var logo = document.getElementById("mobile-logo");
  logo.style.display = "block";

  var main_drop = document.getElementById("main-drop-down");
  main_drop.style.display = "block";

  var box = document.getElementById("mobile-resource");
  box.style.display = "none";
}

function about_mobile_menu_show(){
  var hamburger = document.getElementById("main-drop-down");
  hamburger.style.display = "none";

  var box = document.getElementById("mobile-about-expan");
  box.style.display = "block";

  var box = document.getElementById("mobile-about");
  box.style.display = "flex";

  var box = document.getElementById("mobile-logo");
  box.style.display = "none";
}

function show_mobile_main_menu_about(){
  var box = document.getElementById("mobile-about-expan");
  box.style.display = "none";

  var hamburger = document.getElementById("main-drop-down");
  hamburger.style.display = "block";

  var box = document.getElementById("mobile-logo");
  box.style.display = "block";

  var box = document.getElementById("mobile-about");
  box.style.display = "none";
}
