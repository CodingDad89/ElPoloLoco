class Endboss extends MovableObject {
    imagesWalking = [
        `img/4_enemie_boss_chicken/1_walk/G5.png`,
        `img/4_enemie_boss_chicken/1_walk/G6.png`,
        `img/4_enemie_boss_chicken/1_walk/G7.png`,
        `img/4_enemie_boss_chicken/1_walk/G8.png`,
        `img/4_enemie_boss_chicken/1_walk/G9.png`,
        `img/4_enemie_boss_chicken/1_walk/G10.png`,
        `img/4_enemie_boss_chicken/1_walk/G11.png`,
        `img/4_enemie_boss_chicken/1_walk/G12.png`,
    ]

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G5.png');
        this.loadImages(this.imagesWalking); 
        this.x = 700;
    }
}