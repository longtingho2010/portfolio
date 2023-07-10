//toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

//scroll sections
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((a) => {
        a.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });

      //active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  //sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //Remove navbar when it is clicked
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
});

//Send Email
const form = document.querySelector("#form");
const sendMessage = document.querySelector(".send-message");
const msg = document.querySelector("#user-message");
const userEmail = document.querySelector("#user-email");
const userName = document.querySelector("#user-name");

// const sendEmail = (el) => {
//   el.preventDefault();
//   Email.send({
//     SecureToken: "467dc8a6-6136-4386-8bfe-7cb0a5647150",
//     To: "longtingho2010@gmail.com",
//     From: userEmail.value,
//     Subject: "Contact Form",
//     Body: msg.value,
//   }).then((message) => alert(message));

//   form.reset();
// };

// form.addEventListener("submit", sendEmail);
