class Chicken extends MovableObject {

    width = 70;
    heigth = 90
    y = 330;
    constructor(path){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 300 + Math.random() * 500;
    }
}