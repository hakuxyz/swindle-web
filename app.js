document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("pre").forEach(function (block) {
  var button = document.createElement("button");
  button.className = "copy";
  button.type = "button";
  button.textContent = "copy";
  button.addEventListener("click", function () {
    var text = block.querySelector("code").innerText;
    navigator.clipboard.writeText(text).then(function () {
      button.textContent = "copied";
      setTimeout(function () { button.textContent = "copy"; }, 1200);
    });
  });
  block.appendChild(button);
});
var navLinks = document.querySelectorAll(".links a[href^='#']");
var sections = Array.prototype.map.call(navLinks, function (a) {
  return document.querySelector(a.getAttribute("href"));
});
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      navLinks.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach(function (s) { if (s) observer.observe(s); });
