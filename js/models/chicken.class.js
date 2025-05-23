class Chicken extends MovableObject {

    width = 70;
    heigth = 90
    y = 330;
    imagesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ]
    currentImage = 0;

    constructor(path){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 300 + Math.random() * 500;
        this.loadImages(this.imagesWalking); 
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
             this.moveLeft();
             this.otherDirection = false;
        }, 1000 / 10);
       
        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 1000 / 10);
    }
}