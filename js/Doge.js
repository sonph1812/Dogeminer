let dogeIM = new Image()
dogeIM.src = "image/miner.jpeg"

class doge {
    constructor(game) {
this.game =game

    }

    move() {
        this.y = this.y + this.speed
        this.y = this.y - this.speed
    }

    draw() {
        this.draw(this.IM, this.x - this.width / 8, this.y - this.height / 8, this.width, this.height);

    }

    checkCollision() {
        if (this.x + this.width > innerWidth)
            this.y += this.y;
        this.y -= this.y;


    }
}
let wagon = new doge()
wagon.draw()
wagon.checkCollision()
wagon.move()