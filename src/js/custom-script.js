document.addEventListener("DOMContentLoaded", function () {
  // Formulir Kontak
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name && email && message) {
      messageDiv.style.display = "block";
      messageDiv.textContent =
        "Terima kasih, " + name + "! Pesan Anda telah dikirim.";
      messageDiv.style.color = "#28a745";
      form.reset();
    } else {
      messageDiv.style.display = "block";
      messageDiv.textContent = "Silakan isi semua field!";
      messageDiv.style.color = "#dc3545";
    }

    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 5000);
  });

  // FAB Animasi Klik
  const fabItems = document.querySelectorAll(".fab-item");
  fabItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.style.transform = "scale(1.2)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);
    });
  });

  // Smooth Scroll
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});
