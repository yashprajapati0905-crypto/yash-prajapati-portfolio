// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        `Thank you ${name}! Your message has been received.`
    );

    contactForm.reset();

});