function draw() {
  const context = document.getElementById("canvas").getContext("2d");

  context.beginPath();
  context.fillStyle = "#f5f5f5";
  context.moveTo(0, 0);
  context.lineTo(300, 0);
  context.lineTo(0, 120);
  context.fill();
}

export default draw;
