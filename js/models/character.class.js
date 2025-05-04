class Character extends MovableObject {

    width = 150;
    heigth = 200;
    imagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ]
    currentImage = 0;
    world;

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesWalking)
        this.animate();
    }
    

    animate() {

        setInterval(() => {
            if(this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.x += this.speed + 5;
                this.otherDirection = false;
                }
            
            if(this.world.keyboard.left && this.x > 0) {
                this.x -= this.speed + 5;
                this.otherDirection = true;
                }
            this.world.camera_x = -this.x + 100;

        }, 1000 / 60)

        setInterval(() => {
            
            if(this.world.keyboard.right || this.world.keyboard.left ) {
            this.x += this.speed;
            this.playAnimation(this.imagesWalking);
            }
        }, 50);
    }

    jump() {

    }
}