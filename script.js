const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

let birds = [];
let targets = [];
let isLaunched = false;
let launchAngle = 0;
let launchPower = 0;
let bird;

class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.color = 'red';
        this.isFlying = false;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.isFlying) {
            this.x += this.velocityX;
            this.y += this.velocityY;
            this.velocityY += 0.5; // Gravitasi
        }
    }
}

class Target {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.color = 'green';
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function init() {
    bird = new Bird(100, 300);
    targets.push(new Target(600, 320));
    targets.push(new Target(650, 280));
    targets.push(new Target(700, 240));
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.draw();
    targets.forEach(target => target.draw());
    bird.update();
    requestAnimationFrame(draw);
}

function launchBird() {
    if (!isLaunched) {
        bird.isFlying = true;
        bird.velocityX = Math.cos(launchAngle) * launchPower;
        bird.velocityY = -Math.sin(launchAngle) * launchPower;
        isLaunched = true;
    }
}

function resetGame() {
    isLaunched = false;
    bird = new Bird(100, 300);
    targets = [];
    targets.push(new Target(600, 320));
    targets.push(new Target(650, 280));
    targets.push(new Target(700, 240));
    draw();
}

document.getElementById('launchButton').addEventListener('click', launchBird);
document.getElementById('resetButton').addEventListener('click', resetGame);

init();
