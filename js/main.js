/** @type {HTMLCanvasElement} */
//canvas set up
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_HEIGHT = canvas.height = 1000
CANVAS_WIDTH = canvas.width = 500
//enemy creation
class Enemy {
    constructor() {
        this.x = 10
        this.y = 50
        this.width = 100
        this.height = 100
    }
    draw(){
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    update() {
        this.x++
        this.y++
    }
}
const enemy1 = new Enemy()
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemy1.draw()
    enemy1.update()
    requestAnimationFrame(animate)
}
animate()
