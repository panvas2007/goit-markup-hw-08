(() => {
  const menuBtnRef = document.querySelector("[data-menu-btn]");
  const mobileMenuRef = document.querySelector("[data-menu-container]");

  menuBtnRef.addEventListener("click", () => {
    const bodyNoScroll = document.querySelector("[data-nonScroll]");
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    bodyNoScroll.classList.toggle("no-scroll");
  });
})();
