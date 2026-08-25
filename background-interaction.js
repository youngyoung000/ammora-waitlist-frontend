(() => {
  const background = document.querySelector(".interactive-background");
  if (!background || !window.matchMedia("(pointer: fine)").matches) return;

  let frame = 0;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;

  const paint = () => {
    background.style.setProperty("--spot-x", `${pointerX}px`);
    background.style.setProperty("--spot-y", `${pointerY}px`);
    background.classList.add("is-active");
    frame = 0;
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!frame) frame = window.requestAnimationFrame(paint);
  }, { passive: true });

  document.documentElement.addEventListener("mouseleave", () => {
    background.classList.remove("is-active");
  });
})();
