import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Contact Page Loaded");

  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your message has been sent!");
      contactForm.reset();
    });
  }
});
