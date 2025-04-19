export const open_sidebar = () => {
  const html = document.documentElement;
  const body = document.body;
  const root = document.querySelector("#root");
  const layout = document.querySelector(".layout");
  const main = document.querySelector(".main");
  const sidebar = document.querySelector(".sidebar");

  if (!layout) return;

  const isOpen = getComputedStyle(layout).transform !== "none";

  html.style.overflow = isOpen ? "" : "hidden";
  body.style.overflow = isOpen ? "" : "hidden";
  root.style.overflow = isOpen ? "" : "hidden";
  layout.style.transform = isOpen ? "none" : "translate(50%, 0px)";

  if (layout.style.transform === "translate(50%, 0px)") {
    layout.addEventListener("click", open_sidebar);
    main.style.pointerEvents = "none";
    sidebar.style.position = "fixed";
  } else if (layout.style.transform === "none") {
    layout.removeEventListener("click", open_sidebar);
    main.style.pointerEvents = "";
    sidebar.style.position = "absolute";
  }
};