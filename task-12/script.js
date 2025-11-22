const img = document.querySelector("img");
const icon = document.querySelector(".icon");

img.addEventListener("dblclick", () => {
  icon.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  img.style.pointerEvents = "none";
  setTimeout(() => {
    icon.style.transform = "translate(-50%, -300%) scale(0) rotate(50deg)";
  }, 1000);

  setTimeout(() => {
    icon.style.transform = "translate(-50%, -50%) scale(0) rotate(0deg)";
    img.style.pointerEvents = "auto";
  }, 2000);
});
