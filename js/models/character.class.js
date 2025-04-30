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
            if(this.world.keyboard.right) {
                this.x += this.speed;
                }
            
            if(this.world.keyboard.left) {
                this.x -= this.speed;
                }
        }, 1000 / 60)

        setInterval(() => {
            
            if(this.world.keyboard.right) {
            this.x += this.speed;
            let i = this.currentImage % this.imagesWalking.length;  
            let path = this.imagesWalking[i];
            this.img = this.imageCache[path];
            this.currentImage++; 
            }
        }, 50);
    }

    jump() {

    }
}