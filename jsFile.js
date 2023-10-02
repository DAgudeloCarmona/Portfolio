var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  
  var clickedTab = document.querySelector(`#${tabname}`);
  clickedTab.classList.add("active-tab");
  clickedTab.parentElement.querySelector('.active-link').classList.remove("active-link");
  clickedTab.classList.add("active-link");
}

var sidemeu = document.querySelector("#sidemenu");

function openmenu(){
  sidemeu.style.right = "0";
}

function closemenu(){
  sidemeu.style.right = "-200px";
}
