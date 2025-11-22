const btn = document.querySelector("button");
const progressBar = document.querySelector(".progress-bar-overlay");
const title = document.querySelector("h5");

btn.addEventListener("click", () => {
  let width = 0;
  btn.style.pointerEvents = "none";
  const timerId = setInterval(() => {
    width++;
    progressBar.style.width = `${width}%`;
    title.textContent = `${width}%`;
    if (width >= 100) {
      clearInterval(timerId);
      title.textContent = "Completed!";
      width = 0;
      btn.style.pointerEvents = "auto";
    }
  }, 100);
});
