var block1,block2,block3,block4;
var canvas;
var music;
var ball, edges;

function preload(){
    music = loadSound("music1.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 
    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green"
    
    
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue"

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange"

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "purple"

    ball = createSprite(random(20,800),120, 25,25);
    ball.shapeColor = rgb(300,300,300);
    ball.velocityX = 5;
    ball.velocityY = 10;

}

function draw() {
    background(rgb(200,200,200));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,300);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(270,130,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(160,0,80);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,130,0);
    }

    drawSprites();
}
