class BackgroundObject extends MovableObject {
    width = 720;
    heigth = 480;
 
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}