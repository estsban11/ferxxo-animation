document.addEventListener("DOMContentLoaded", function () {
  const highlight = document.getElementById("highlight");
  const backgroundImage = document.getElementById("backgroundImage");

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    highlight.style.left = x + "px";
    highlight.style.top = y + "px";

    if (backgroundImage.style.display !== "block") {
      backgroundImage.style.display = "block";
    }

    backgroundImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
  });
});