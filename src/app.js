window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".keys div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#8ef6e4",
    "#9896f1",
    "#d59bf6",
    "#edb1f1",
    "#a8e6cf",
    "#fdffab",
  ];

  keys.forEach((key, index) => {
    key.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubble(index);
    });
  });

  const createBubble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
