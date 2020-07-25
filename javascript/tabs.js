function Tabclick(e) {
  let activeTabs = document.querySelectorAll(".active");
  activeTabs.forEach(function (Tab) {
    Tab.className = Tab.className.replace("active", " ");
  });
  e.target.parentElement.className += " active";
  document.getElementById(e.target.href.split("#")[1]).className += " active";
}
const element = document.getElementById("banner4__nav-tab");
element.addEventListener("click", Tabclick, false);
