class StatusBar extends DrawableObject {
    images = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];

    percentage = 100;
    width = 200;
    heigth = 60;
    
    
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png');
        this.loadImages(this.images);
        this.x = 50;
        this.y = 5;
        this.setPercentage(100);
    

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }

    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } 
        else if(this.percentage > 80) {
            return 4;
        }
        else if(this.percentage > 60) {
            return 3;
        }
        else if(this.percentage > 40) {
            return 2;
        }
        else if(this.percentage > 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}