class MovableObject{
    x = 120;
    y = 220;
    img;
    width = 100;
    heigth = 150;
    imageCache = [];
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.0;
    energy = 100;

    applyGravity() {
        
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration; }
        }, 1000 / 80)
    }

    isAboveGround() {
        return this.y < 210;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
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

    loadImages(arr) {
        arr.forEach((path) => {
             let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
        });
    }
    moveRight() {
        this.x += this.speed + 5;
        this.otherDirection = false;
    }

    moveLeft() {
        
            this.x -= this.speed + 5;
            this.otherDirection = true;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;  
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++; 
    }

    jump() {
        this.speedY = 30;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.heigth > mo.y &&
        this.x < mo.x + mo.width &&
        this.y < mo.y + mo.heigth;
    
}
}

