// Navbar Active + Panah
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active-nav");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active-nav");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Set Nama & Ganti Greeting
function setName() {
  const name = document.getElementById("nameInput").value.trim();
  if (name !== "") {
    document.getElementById("greeting").textContent = `Hi ${name}, Welcome To Website`;
    document.getElementById("nameForm").style.display = "none";
  }
}

// Message Form
function validateForm() {
  alert("Pesan kamu berhasil dikirim!");
  return false; // prevent reload
}
