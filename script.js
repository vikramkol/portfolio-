
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    function highlightNavLink() {
      let scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks[index].classList.add("active");
        } else {
          navLinks[index].classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", highlightNavLink);
  });




