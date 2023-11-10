class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.next = null; // Initialize the 'next' property to null
    }
}
class LinkedList {
    constructor() {
        this.head = null; // Initialize the head of the linked list to null
    }

    // Add a square to the end of the linked list
    addSquare(x, y) {
        const newSquare = new Square(x, y);

        if (!this.head) {
            this.head = newSquare;
        } else {
            newSquare.next = this.head;
            this.head = newSquare;
        }
    }

    removeSquare() {
        let current = this.head;
        while (current.next.next != null) {
            current = current.next;
        }
        current.next = null;
    }

    // Display all squares in the linked list
    display() {
        let current = this.head;
        while (current) {
            fill(0, 150, 75);
            square(current.x, current.y, 10);
            current = current.next;
        }
    }
}

function setup() {
    createCanvas(400, 400);
    frameRate(120);
}
let game = true;
let x = 200;
let y = 200;
let xVelocity = 0;
let yVelocity = 0;
let count = 0;
let eaten = 0;
let lil = new LinkedList();
lil.addSquare(x, y);


function draw() {
    if (game) {
        background(50);
        fill(0, 150, 75);
        displayText();
        square(x, y, 10);
        checkCollision();
        wallCheck();
        //displayText();
        apple();
        scoreUp();
        x += xVelocity;
        y += yVelocity;
        lil.display();
        //console.log(xVelocity, yVelocity);
        //wallCheck();
        //line(lil.head.x, lil.head.y, 0, lil.head.y);
        //checkCollision();
    }
}

function restart() {
    lil.head = null;
    x = 200;
    y = 200;
    xVelocity = 0;
    yVelocity = 0;
    eaten = 0;
    count = 0;
    lil.addSquare(x, y);
    //console.log("hello");
}

function checkCollision() {
    if (eaten === 0 || eaten === 1) {
        return; // Nothing to check if nothing has been eaten
    }
    let current = lil.head.next.next;
    // Avoiding repeated computation
    let currentX, currentY;

    while (current) {
        currentX = current.x;
        currentY = current.y;

        if (x === currentX && y === currentY) {
            xVelocity = 0;
            yVelocity = 0;
            textSize(48);
            fill(255, 0, 0);
            text("Game Over", 200, 200);
            textSize(12);
            fill(255, 0, 0);
            text("Press Space Bar to Restart", 200, 240);
            return;
        }

        current = current.next;
    }
}

function displayText() {
    textSize(18);
    fill(255);
    text("Score = " + round(eaten), 43, 20);
    textSize(12);
    fill(0, 200, 0);
    text("Q to pause", 33, 40);
    textSize(12);
    fill(0, 200, 0);
    text("E to resume", 36, 60);
    textSize(12);
    fill(0, 200, 0);
    text("High Score = " + highScore, 53, 80);
}

function wallCheck() {
    textAlign(CENTER);
    if (x == width - 8 || x == -2) {
        yVelocity = 0;
        xVelocity = 0;
        game = false;
        textSize(48);
        fill(255, 0, 0);
        text("Game Over", 200, 200);
        textSize(12);
        fill(255, 0, 0);
        text("Press Space Bar to Restart", 200, 240);
    }
    if (y == height - 8 || y == -2) {
        yVelocity = 0;
        xVelocity = 0;
        game = false;
        textSize(48);
        fill(255, 0, 0);
        text("Game Over", 200, 200);
        textSize(12);
        fill(255, 0, 0);
        text("Press Space Bar to Restart", 200, 240);
    }
}

let apples = [];
let rx, ry;
let couldEat = 0;
function apple() {
    fill(255, 0, 0);
    if (couldEat == 0) {
        rx = round(random(width - 10) / 10) * 10;
        ry = round(random(height - 10) / 10) * 10;
        apples.push(createVector(rx, ry));
    }
    square(apples[0].x, apples[0].y, 10);
    if (x == apples[0].x && y == apples[0].y) {
        apples.splice(0, 1);
        let spotx = round(random(width - 10) / 10) * 10;
        let spoty = round(random(height - 10) / 10) * 10;
        square(spotx, spoty, 10);
        apples.push(createVector(spotx, spoty));
        eaten++;
        if (eaten > highScore) {
            noLoop();
            const button = document.getElementById('hiddenButton');
            button.style.display = 'block'; // Display the button
            button.addEventListener('click', function () {
                const flag = ('VFZWRFZFWjdjMnhwZEdobGNubGZiR2xzWDNOdVlXdGxmUT09');
                const partDecr = atob(flag);
                alert(partDecr);
            });
        }
    }
    couldEat = 1;
}

// if (eaten > highScore) {
//     const button = document.getElementById('hiddenButton');
//     button.style.display = 'block'; // Display the button
// }

function scoreUp() {
    if (x % 10 == 0 && y % 10 == 0) {
        lil.addSquare(x, y);
        if (count < eaten) {
            //difficulty();
            count++;
            lil.addSquare(x, y);
        }
        lil.removeSquare();
    }
}

let tempx = 0;
let tempy = 0;
let highScore = 1000;
function keyPressed() {
    if (key === "w") {
        yVelocity = -2;
        xVelocity = 0;
        tempx = -2;
        tempy = 0;
        x = round(x / 10) * 10;
        y = round(y / 10) * 10;
    } else if (key === "d") {
        yVelocity = 0;
        xVelocity = 2;
        tempx = 2;
        tempy = 0;
        x = round(x / 10) * 10;
        y = round(y / 10) * 10;
    } else if (key === "s") {
        xVelocity = 0;
        yVelocity = 2;
        tempx = 0;
        tempy = 2;
        x = round(x / 10) * 10;
        y = round(y / 10) * 10;
    } else if (key === "a") {
        xVelocity = -2;
        yVelocity = 0;
        tempx = -2;
        tempy = 0;
        x = round(x / 10) * 10;
        y = round(y / 10) * 10;
    } else if (key === "q") {
        xVelocity = 0;
        yVelocity = 0;
    } else if (key === "e") {
        xVelocity = tempx;
        yVelocity = tempy;
    } else if (key === " ") {
        restart();
        game = true;
        highScore = floor(highScore / 2);
        //draw();
    }
    //console.log(tempx, tempy);
}


