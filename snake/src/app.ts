let lastRenderTime: number = 0;
const SNAKE_SPEED: number = 1;
function main(currentTime: number) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  console.log("render");

  lastRenderTime = currentTime;
}

window.requestAnimationFrame(main);
