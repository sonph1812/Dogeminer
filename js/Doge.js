let DogeIM = new Image();
DogeIM.src = "image/miner.jpeg"

class doge {

    speed;

    constructor(game) {
        this.game = game;
        this.init()
    }

    init() {
        this.type = Math.floor(Math.random() * 100000) % 10;
        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
        this.alive = true;
        this.update();

    }

    update() {
        switch (this.type) {
            case 0:
                this.speed = this.game.getWidth() / 20;
                this.width = this.game.getWidth();
                this.height = this.game.getWidth() / 2;
                this.IM = DogeIM;
                this.score = 1;
                break;
            case 1:
                this.speed = this.game.getWidth() / 10;
                this.width = this.game.getWidth();
                this.height = this.game.getWidth() / 2;
                this.IM = DogeIM;
                this.score = 601;
                break;
        }
    }

    randomXY() {

        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
    }
    draw(){
        this.game.context.drawImage(this.IM,this.x -this.width/3,this.y - this.height/3,this.width,this.height)
    }
    size(){
        return Math.sqrt(this.width*this.width+this.height*this.height)
    }
}





