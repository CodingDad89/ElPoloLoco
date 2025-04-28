class MovableObject{
    x = 120;
    y = 220;
    img;
    width = 100;
    heigth = 150;
    imageCache = [];


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
        console.log("moving left");
        
    }

    
}

