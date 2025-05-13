class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 220;
    width = 100;
    heigth = 150;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
    }

    loadImages(arr) {
        arr.forEach((path) => {
             let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
        });
    }

        drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.heigth);
        ctx.stroke();
    }
    }
}