const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2
canvas.width = 800;
canvas.height = 800;

let isPainting = false

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
]

function onMove (event) {
    if (isPainting) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.strokeStyle = color
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke()
        return
    }
    ctx.moveTo(event.offsetX, event.offsetY)
}

function startPainting () {
    isPainting = true
}

function cancelPainting() {
    isPainting = false
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)