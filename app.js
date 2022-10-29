const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(215, 150, 15, 100)
ctx.fillRect(350, 150, 15, 100)
ctx.fillRect(260, 150, 60, 200)

ctx.arc(290, 100, 40, 0, 2 * Math.PI)
ctx.fill()

ctx.beginPath()
ctx.fillStyle = "white"
ctx.arc(305, 85, 5, Math.PI, 2 * Math.PI)
ctx.arc(275, 85, 5, Math.PI, 2 * Math.PI)
ctx.fill()