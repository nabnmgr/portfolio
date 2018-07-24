document.querySelector(".to-projects").addEventListener("click", toProjects);

document.querySelector(".to-contact").addEventListener("click", toContact);

document.querySelector(".to-top").addEventListener("click", function() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

function toProjects(e) {
  e.preventDefault();
  document.querySelector(".projects").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function toContact(e) {
  e.preventDefault();
  console.log("hi");
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

let contactTop = document.querySelector(".contact").offsetTop;
console.log(contactTop);
