class Cloud extends MovableObject{

    y = 20;
    width = 500;
    heigth = 250;

    constructor(path){
        super().loadImage('img/5_background/layers/4_clouds/full.png');
        this.x = 100 + Math.random() * 500;
        this.animate();
    }

    animate() {
     this.moveLeft();
    }

}