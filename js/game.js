let game_W;
let game_H

class game {

    constructor() {
        this.canvas;
        this.context;
        this.init();

    }

    init() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");

    }

    getWidth() {
        var area = document.documentElement.clientWidth * document.documentElement.clientHeight;
        return Math.sqrt(area / 300);
    }
}