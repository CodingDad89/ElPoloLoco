class MovableObject{
    x = 120;
    y = 200;
    img;
    width = 100;
    heigth = 150;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    moveRight() {
        console.log("moving right");
        
    }

    moveLeft() {
        console.log("moving left");
        
    }
}