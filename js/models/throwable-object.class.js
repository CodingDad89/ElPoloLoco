class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.width = 80;
        this.heigth = 60;
        this.throw();
    }

    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}