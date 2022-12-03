/** @type {HTMLCanvasElement} */
//canvas set up
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_HEIGHT = canvas.height = 1000
CANVAS_WIDTH = canvas.width = 500
//variable set up
const numOfEnemies = 20
const enemies = []
let gameFrame = 0
//enemy creation
class Enemy {
    constructor() {
        this.image = new Image()
        this.image.src = 'assets/images/enemy3.png'
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 218
        this.spriteHeight = 177
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        this.x = Math.floor(Math.random() * (canvas.width - this.width ))
        this.y = Math.floor(Math.random() * (canvas.height - this.height))
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.angle = /*Math.random() * 2*/ 0
        this.angleSpeed = Math.random() * 2
        this.curve = Math.random() * 200
    }
    draw(){
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
    update() {
        this.x = this.curve * Math.sin(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2)
        // this.y += Math.sin(this.angle) * this.curve
        this.angle += this.angleSpeed
        if(this.x + this.width < 0) {
            this.x = canvas.width
        }
        if(gameFrame % this.flapSpeed == 0) {
        this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
}
for (let i = 0; i < numOfEnemies; i++) {
    enemies.push(new Enemy)
}


console.log(enemies)
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemies.forEach((enemy) => {
        enemy.draw()
        enemy.update()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()
