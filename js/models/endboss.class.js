class Endboss extends MovableObject {
    imagesWalking = [
        `img/4_enemie_boss_chicken/2_alert/G5.png`,
        `img/4_enemie_boss_chicken/2_alert/G6.png`,
        `img/4_enemie_boss_chicken/2_alert/G7.png`,
        `img/4_enemie_boss_chicken/2_alert/G8.png`,
        `img/4_enemie_boss_chicken/2_alert/G9.png`,
        `img/4_enemie_boss_chicken/2_alert/G10.png`,
        `img/4_enemie_boss_chicken/2_alert/G11.png`,
        `img/4_enemie_boss_chicken/2_alert/G12.png`,
 
    ]

    y = 280;

    constructor() {
        super().loadImage(`img/4_enemie_boss_chicken/2_alert/G5.png`);
        this.loadImages(this.imagesWalking); 
        this.x = 700;

        
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 200);
    }
};
