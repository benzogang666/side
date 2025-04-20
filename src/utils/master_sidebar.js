export const master_sidebar = () => {
  const layout = document.querySelector(".layout");

  if (!layout) return;

  const current_left = layout.style.left;

  if (current_left === "50%") {
    layout.style.left = "0%";
  } else {
    layout.style.left = "50%";
  }
};