// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


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
// CONTACT FORM - WEB3FORMS
// ===============================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const button = contactForm.querySelector("button");

        button.disabled = true;
        button.textContent = "Sending...";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (result.success) {

                alert("Thank you! Your message has been sent successfully.");

                contactForm.reset();

            } else {

                alert("Sorry, your message could not be sent. Please try again.");

            }

        } catch (error) {

            alert("Something went wrong. Please check your internet connection and try again.");

        }

        button.disabled = false;
        button.textContent = "Send Message";

    });

}