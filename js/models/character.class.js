class Character extends MovableObject {
    y = 60;
    width = 150;
    heigth = 200;
    imagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    imagesJumping = [

        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    imagesDead = [

        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
     
    ];

    imagesHurt = [

        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    currentImage = 0;
    world;


    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.applyGravity();
        this.animate();
    }
    

    animate() {

        setInterval(() => {
            if(this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                }
            
            if(this.world.keyboard.left && this.x > 0) {
              this.moveLeft();
                }

            if(this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 100;

        }, 1000 / 60)

        setInterval(() => {
            
            if(this.isDead()) {
                this.playAnimation(this.imagesDead);
                
            } 

            else if(this.world.keyboard.right || this.world.keyboard.left ) {
                this.playAnimation(this.imagesWalking);
            }

            else if(this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            }
            else {
                if(this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            }

        }
        }, 50); 
    }

}