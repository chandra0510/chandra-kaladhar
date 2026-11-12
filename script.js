const petalLayer = document.querySelector(".petal-layer");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (petalLayer && !reduceMotion) {
  const count = window.innerWidth < 700 ? 8 : 14;

  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--x", `${(Math.random() * 80 - 40).toFixed(1)}vw`);
    petal.style.animationDuration = `${10 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    petal.style.opacity = `${0.25 + Math.random() * 0.45}`;
    petal.style.transform = `scale(${0.7 + Math.random() * 0.8})`;
    petalLayer.appendChild(petal);
  }
}

const tiles = document.querySelectorAll(".reveal");

if (tiles.length) {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    tiles.forEach((tile) => tile.classList.add("is-in"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    tiles.forEach((tile) => observer.observe(tile));

    // Reveal anything already in view on first paint
    requestAnimationFrame(() => {
      tiles.forEach((tile) => {
        const rect = tile.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          tile.classList.add("is-in");
          observer.unobserve(tile);
        }
      });
    });
  }
}
