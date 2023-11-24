const video = document.getElementById("video");
// const image = document.getElementById("image");
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const H = 672;
const W = 1276;
const vidHeight = 824;  // video resolution 824 x 1864
const vidWidth = 1864;
console.log(vidHeight, vidWidth);
video.addEventListener("play", () => {
  const loadVideo = () => {
    const Y = (vidHeight * window.screenY) / H;
    const X = (vidWidth * window.screenX) / W;
    if (!video.paused) {
      ctx.drawImage(
        video,
        X,
        Y,
        (vidWidth * window.outerWidth) / W,
        (vidHeight * window.outerHeight) / H,
        0,
        0,
        canvas.width,
        canvas.height
      );
      setTimeout(loadVideo, 34);
    }
  };
  loadVideo();
});
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "p") {
    video.pause();
  } else if (event.key === "k") {
    video.play();
  }
});

let min = new Date().getMinutes()

const checkTime = setInterval(()=> {
  min = new Date().getMinutes()
  if(min===38) {
    video.play()
    clearInterval(checkTime)
  }
}, 50)
