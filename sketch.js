var cursor; 
var ground, ground2, ground3, ground4, ground5, ground6, ground7;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6; 
var wall1, wall2, wall3, wall4;
var score;
var seconds = 30;
var gameState = "play";
function preload() {

}


function setup() {
    createCanvas(1000, 500);

    cursor = createSprite(50, 100, 20, 20);

    ground = createSprite(300, 200, 1000, 10);
    obstacle1 = createSprite(300, 190, 200, 20);
    obstacle1.shapeColor = "red"
    obstacle2 = createSprite(400, 100, 20, 20);
    obstacle2.shapeColor = "red"
    obstacle3 = createSprite(500, 100, 30, 30);
    obstacle3.shapeColor = "red"
    wall1 = createSprite(500, 10, 1000, 1)
    obstacle3.velocityY = -3
    obstacle4 = createSprite(600, 100, 30, 30);
    obstacle4.shapeColor = "red"
    obstacle4.velocityY = -3

    obstacle5 = createSprite(700, 100, 30, 30);
    obstacle5.shapeColor = "red"
    obstacle5.velocityY = -3
    score = 0;
    ground2 = createSprite(0, 450, 200, 10);
    ground3 = createSprite(150, 460, 100, 10);
    ground4 = createSprite(275, 450, 150, 10);
    ground5 = createSprite(400, 460, 100, 10);
    ground6 = createSprite(525, 450, 150, 10);
    ground7 = createSprite(800, 460, 400, 10);
    obstacle6 = createSprite(60, 380, 100, 100);
    wall3 = createSprite(0,330, 10, 250);
    wall3.shapeColor = "lime"
    obstacle6.velocityX = 15;
    obstacle6.shapeColor = "red"
    grounds = new Group();
    grounds.add(ground7)
    grounds.add(ground6)
    grounds.add(ground5)
    grounds.add(ground4)
    grounds.add(ground3)
    grounds.add(ground2)






}

function draw() {
    background(220);
    if(gameState == "play"){
        cursor.velocityY =  cursor.velocityY + 0.8;
        if(keyDown(RIGHT_ARROW)){
            cursor.x = cursor.x + 10;
        }
        if(keyDown(LEFT_ARROW)){
            cursor.x = cursor.x -10;
        }
        cursor.collide(ground);
        if(keyDown(UP_ARROW) && cursor.position.y == 185){
            cursor.velocityY = -13;
        }
        if(keyDown(UP_ARROW) && cursor.position.y == 445){
            cursor.velocityY = -13;
        }
        if(keyDown(UP_ARROW) && cursor.position.y == 435){
            cursor.velocityY = -13;
        }
    }
    textSize(16);

    text("score: " + score, 930, 30);
 
    fill(0, 102, 153);
    
    
    
    var ground2group = new Group();
    

            cursor.collide(ground2group);

    console.log(cursor.position.y);
    if(cursor.isTouching(obstacle1) || cursor.isTouching(obstacle2)||cursor.isTouching(obstacle3)||cursor.isTouching(obstacle4)||cursor.isTouching(obstacle5)||cursor.isTouching(obstacle6)){
        cursor.position.x = 50;
        cursor.position.y = 100;
    }
    wall1.immovable = true;
   if(obstacle3.bounceOff(wall1)){
       obstacle3.velocityY = 12;
   }
   if(obstacle3.bounceOff(ground)){
    obstacle3.velocityY = -12;
}
if(obstacle4.bounceOff(wall1)){
    obstacle4.velocityY = 12;
}
if(obstacle4.bounceOff(ground)){
 obstacle4.velocityY = -12;
}
if(obstacle5.bounceOff(wall1)){
    obstacle5.velocityY = 12;
}
if(obstacle5.bounceOff(ground)){
 obstacle5.velocityY = -12;
}
if(obstacle6.position.x == 1050){
    obstacle6.position.x = 0;
}
if(frameCount%seconds == 0){
    score += 1;
}
if(cursor.isTouching(wall3)){
 text("You Completed The level. Your Score Is "+score, 500, 300);
    obstacle6.velocityX = 0;
    cursor.velocityX = 0;
    seconds = 0;
    gameState = "end";
}
if(gameState == "end"){
    cursor.velocityY = 0;
}
cursor.collide(grounds);
    drawSprites();
}