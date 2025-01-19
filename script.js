//setup definitions
const gameEnv = {
    canvas: document.createElement("canvas"),
    setup: (function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameEnv, 16.67)
    })(),
    update: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.frames++;
    },
}
