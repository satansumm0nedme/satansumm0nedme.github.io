let distMouse = 50;
let cols; let rows; let size = 50;
let blocks = [];

function setup(){
    createCanvas(720,480);
    rectMode(CENTER);
    angleMode(DEGREES);
    cols = width/size;
    rows = height/size;

    for (let i=0; i<cols; i ++) {
        blocks[i] = []; 
        for (let j=0; j<rows; j++){
            blocks [i][j] = new Block(size/2 + i*size, size/2 + j*size);
        }
    }
}

function draw(){
    background("#000FFF");
    for (let i=0; i<cols; i ++) {
        for (let j=0; j<rows; j++){
            blocks [i][j].move();
            blocks [i][j].display();
        }
    }



}