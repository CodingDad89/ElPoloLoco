class Cloud extends MovableObject{

    y = 20;
    width = 500;
    heigth = 350;

    constructor(path){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 100 + Math.random() * 500;
    }
}