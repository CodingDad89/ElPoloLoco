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
    acceleration = 2.5;

    applyGravity() {
        
        setInterval(() => {
            if(this.isAboveGround()) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration; }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 210;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
             let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
        });
    }
    moveRight() {
        console.log("moving right");
        
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % this.imagesWalking.length;  
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++; 
    }
    
}

