class MovableObject{
    x = 120;
    y = 220;
    img;
    width = 100;
    heigth = 150;
    imageCache = [];
    speed = 0.15;
    otherDirection = false;


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

    
}

