// Mobile navigation
const menuToggle = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  });
}

// Keep the active navigation link in sync with the section currently on screen.
const sections = Array.from(document.querySelectorAll("section[id]"));
const navLinks = Array.from(
  document.querySelectorAll('header .navbar a[href^="#"]'),
);

function updateActiveNavLink() {
  if (!sections.length || !navLinks.length) return;

  const activationLine = window.scrollY + (header?.offsetHeight || 0) + 24;
  let currentSection = sections[0];

  for (const section of sections) {
    if (section.offsetTop <= activationLine) {
      currentSection = section;
    } else {
      break;
    }
  }

  // At the very bottom, keep the last linked section active rather than leaving a stale state.
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 2
  ) {
    currentSection = sections[sections.length - 1];
  }

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection.id}`,
    );
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.classList.remove("fa-times");
    navbar?.classList.remove("active");
  });
});

window.addEventListener("scroll", updateActiveNavLink, { passive: true });
window.addEventListener("resize", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);
updateActiveNavLink();

// Search overlay
const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");
const closeSearch = document.querySelector("#close");

searchIcon?.addEventListener("click", () =>
  searchForm?.classList.toggle("active"),
);
closeSearch?.addEventListener("click", () =>
  searchForm?.classList.remove("active"),
);

// Home slider
if (document.querySelector(".home-slider")) {
  new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
}

// Review slider
if (document.querySelector(".review-slider")) {
  new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

// Dismiss the page loader once after initial load (instead of creating a repeating interval).
function hideLoader() {
  document.querySelector(".loader-container")?.classList.add("fade-out");
}
window.addEventListener("load", () => window.setTimeout(hideLoader, 3000));
