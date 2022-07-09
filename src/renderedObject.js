import Vector2 from './helpers/Vector2.js';
export default class RenderedObject {
    constructor(pos, game) {
        /* Default or Empty Attributes */
        this.size = new Vector2(10, 10);
        this.angle = 0;
        this.ctx = '';
        this.image = null; // Actual DOM image
        this.game = game;
        this.pos = pos;
    }
    draw() {
        if (!this.image)
            return;
        // Set the context's translation.
        let ctx = this.game.contexts[this.ctx];
        ctx.setTransform(1, 0, 0, 1, ((this.pos.x / 10) * this.game.unit - this.game.camera.x) * this.game.zoom, ((this.pos.y / 10) * this.game.unit - this.game.camera.y) * this.game.zoom);
        if (this.angle !== 0)
            ctx.rotate(this.angle);
        // Draw the image with a half-size offset, so that rotating works properly and the coordinate represent the center.
        ctx.drawImage(this.image, ((-(this.size.x / 10) * this.game.unit) / 2) * this.game.zoom, ((-(this.size.y / 10) * this.game.unit) / 2) * this.game.zoom, (this.size.x / 10) * this.game.unit * this.game.zoom, (this.size.y / 10) * this.game.unit * this.game.zoom);
    }
    update() { }
}
