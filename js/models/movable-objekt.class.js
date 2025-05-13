class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.4;
    energy = 100;

    applyGravity() {
        
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration; }
        }, 1000 / 80)
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        }
        return this.y < 210;
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
        this.speedY = 14;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&    
        this.y + this.heigth > mo.y &&
        this.x < mo.x + mo.width &&
        this.y < mo.y + mo.heigth;
    
    }

    hit() {
        this.energy -= 5;
        if(this.energy <= 0) {
            this.energy = 0;
            
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        return this.energy < 100 && this.energy > 0;
    }
}

