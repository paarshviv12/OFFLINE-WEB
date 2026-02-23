const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Match CSS size
canvas.width = 420;
canvas.height = 320;

let textY = 160;
let direction = 1;

const bubbles = Array.from({ length: 12 }, () => ({
  x: Math.random() * canvas.width,
  y: canvas.height + Math.random() * 200,
  radius: Math.random() * 8 + 4,
  speed: Math.random() * 0.6 + 0.3
}));

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#AE989A");
  gradient.addColorStop(1, "#9A5554");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBubbles() {
  bubbles.forEach(bubble => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(251, 235, 226, 0.5)";
    ctx.fill();

    bubble.y -= bubble.speed;

    if (bubble.y < -10) {
      bubble.y = canvas.height + 20;
      bubble.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();
  drawBubbles();

  textY += 0.3 * direction;
  if (textY > 170 || textY < 150) direction *= -1;

  requestAnimationFrame(animate);
}

animate();
