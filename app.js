const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth =document.getElementById("line-width")

ctx.lineWidth = lineWidth.value;
canvas.width = 800;
canvas.height = 800;

let isPainting = false

function onMove (event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke()
        return
    }
    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY)
}

function startPainting () {
    isPainting = true
}

function cancelPainting() {
    isPainting = false
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)

lineWidth.addEventListener("change", onLineWidthChange)