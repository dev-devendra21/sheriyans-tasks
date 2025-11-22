const keyNote = document.querySelectorAll(".piano-key");

const whiteKeys = {
  z: "./audio/30.mp3",
  x: "./audio/31.mp3",
  c: "./audio/32.mp3",
  q: "./audio/33.mp3",
  w: "./audio/34.mp3",
  e: "./audio/35.mp3",
  r: "./audio/36.mp3",
  t: "./audio/37.mp3",
  y: "./audio/38.mp3",
  u: "./audio/39.mp3",
  i: "./audio/40.mp3",
  o: "./audio/41.mp3",
  p: "./audio/42.mp3",
  "[": "./audio/43.mp3",
  "]": "./audio/44.mp3",
  v: "./audio/45.mp3",
  b: "./audio/46.mp3",
  n: "./audio/47.mp3",
  m: "./audio/48.mp3",
  ",": "./audio/49.mp3",
  ".": "./audio/50.mp3",
};

const blackKeys = {
  s: "./audio/28.mp3",
  d: "./audio/29.mp3",
  2: "./audio/51.mp3",
  3: "./audio/52.mp3",
  4: "./audio/53.mp3",
  6: "./audio/54.mp3",
  7: "./audio/55.mp3",
  9: "./audio/56.mp3",
  0: "./audio/57.mp3",
  "-": "./audio/58.mp3",
  f: "./audio/60.mp3",
  g: "./audio/61.mp3",
  j: "./audio/62.mp3",
  k: "./audio/63.mp3",
  l: "./audio/60.mp3",
};

document.body.addEventListener("keydown", (e) => {
  keyNote.forEach((key) => {
    if (key.getAttribute("data-note") == e.key) {
      key.classList.add("active");
      setTimeout(() => {
        key.classList.remove("active");
      }, 200);
    }
  });

  const audio = new Audio(whiteKeys[e.key] || blackKeys[e.key]);
  audio.play();
});
