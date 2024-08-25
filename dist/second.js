"use strict";
class _Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class _Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log('Creating a story on YouTube');
    }
}
