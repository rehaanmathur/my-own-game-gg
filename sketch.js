var wall1, wall2, wall3, wall4, maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8 , maze9, maze10, maze11, maze12, maze13,
    maze14, maze15, maze16, maze17, maze18, maze19, maze20, maze21, maze22, maze23, maze24, maze25, maze26, maze27, maze28, maze29,
    maze30, maze31, maze32, maze33, maze34, maze35, maze36, maze37, maze38, maze39, maze40, maze41, maze42;

    gameState = "start";
    var time =0;

function preload(){
    playerimg = loadImage('images/the boi for the game.png');
    evilscience = loadImage('images/evilscience.png');
    soliders = loadImage('images/gamesolider.png');
    sadImg = loadImage('images/sad.png');
    restartImg = loadImage("images/restart.jpg");
    
}

function setup(){
    createCanvas(displayWidth-50,displayHeight-70);
    wall1 = createSprite(100,400, 10, 550);
    wall1.shapeColor = "brown";

    wall2 = createSprite(700,125, 1200, 10);
    wall2.shapeColor = "brown";
    
    wall3 = createSprite(1300,400, 10, 550);
    wall3.shapeColor = "brown";

    wall4 = createSprite(700, 675, 1200, 10);
    wall4.shapeColor = "brown";

   

    maze1 = createSprite(200, 200, 10, 150);
    maze1.shapeColor = "brown";

    maze2 = createSprite(300, 300, 10, 150);
    maze2.shapeColor = "brown";

    maze3 = createSprite(400, 200, 10, 150);
    maze3.shapeColor = "brown";

    maze4 = createSprite(500, 300, 10, 150);
    maze4.shapeColor = "brown";

    maze5 = createSprite(348, 378, 500, 10);
    maze5.shapeColor = "brown";

    maze6 = createSprite(250, 450, 100, 10);
    maze6.shapeColor = "brown";

    maze7 = createSprite(205, 525, 10, 150);
    maze7.shapeColor = "brown";

    maze8 = createSprite(230, 600, 100, 10);
    maze8.shapeColor = "brown";

    maze9 = createSprite(370, 525, 10, 150);
    maze9.shapeColor = "brown";

    maze10 = createSprite(420, 540, 100 ,10);
    maze10.shapeColor = "brown";

    maze11 = createSprite(500, 600, 100, 10);
    maze11.shapeColor = "brown";

    maze12 = createSprite(530, 525, 10, 150);
    maze12.shapeColor = "brown";

    maze13 = createSprite(550, 452, 100, 10);
    maze13.shapeColor = "brown";

    maze14 = createSprite(700, 530, 100, 10);
    maze14.shapeColor = "brown";

    maze15 = createSprite(650, 585, 10, 100);
    maze15.shapeColor = "brown";

    maze16 = createSprite(680, 480, 10, 100);
    maze16.shapeColor = "brown";

    maze17 = createSprite(730, 435, 100 , 10);
    maze17.shapeColor = "brown";

    maze18 = createSprite(830, 530, 10, 100);
    maze18.shapeColor = "brown";

    maze19 = createSprite(730, 598, 60, 10);
    maze19.shapeColor = "brown";

    maze20 = createSprite(950, 450, 100, 10);
    maze20.shapeColor = "brown";

    maze21 = createSprite(920, 550, 10, 75);
    maze21.shapeColor = "brown";

    maze22 = createSprite(1050, 522, 100, 10);
    maze22.shapeColor = "brown";

    maze23 = createSprite(1100, 620, 75, 10);
    maze23.shapeColor = "brown";

    maze24 = createSprite(999, 630, 10, 50);
    maze24.shapeColor = "brown";

    maze25 = createSprite(1200, 525, 10, 150);
    maze25.shapeColor = "brown";

    maze26 = createSprite(1150, 452, 100 , 10);
    maze26.shapeColor = "brown";

    maze27 = createSprite(1050, 350, 100, 10);
    maze27.shapeColor = "brown";

    maze28 = createSprite(1200, 330, 10, 100);
    maze28.shapeColor = "brown";

    maze29 = createSprite(650, 200, 100, 10);
    maze29.shapeColor = "brown";

    maze30 = createSprite(700, 278, 10, 150);
    maze30.shapeColor = "brown";

    maze31 = createSprite(830, 278, 10, 150);
    maze31.shapeColor = "brown";

    maze32 = createSprite(950, 278, 100, 10);
    maze32.shapeColor = "brown";

    maze33 = createSprite(1200, 150, 10, 50);
    maze33.shapeColor = "brown";

    maze34 = createSprite(1100, 210, 10, 50);
    maze34.shapeColor = "brown";

    maze35 = createSprite(950, 180, 10, 50);
    maze35.shapeColor = "brown";

    player = createSprite(150,300);
    player.addImage(playerimg);
    player.scale = 0.1

    solider1 = createSprite(850,400);
    solider1.addImage(soliders)
    solider1.scale = 0.12

    
    solider2 = createSprite(550,320);
    solider2.addImage(soliders);
    solider2.scale = 0.12

    solider3 = createSprite(950,545);
    solider3.addImage(soliders);
    solider3.scale = 0.12

    scientist = createSprite(1230,520);
    scientist.addImage(evilscience);
    scientist.scale = 0.4

    sad = createSprite(700,250);
    sad.addImage(sadImg);
    sad.scale = 0.3;
    sad.visible = false;

    
    restart = createSprite(700,500);
    restart.addImage(restartImg);
    restart.scale = 0.1;
    restart.visible = false;
    
    



}
function draw(){
    background("#FFFACD");
    textSize(20);
    fill("black");
    text("Time : " +time,600,50)
    
    if(gameState == "start"){
        time =time + Math.round(getFrameRate() / 60);
        if(keyDown('W')){
            player.y = player.y - 5;
        }
        if(keyDown('S')){
            player.y = player.y +5;
        }
    
        if(keyDown('A')){
            player.x = player.x -5;
        }
    
        if(keyDown('D')){
            player.x  = player.x + 5;
        }
    
        if(frameCount==50){
            solider1.velocityX = -6
        }
    
        if(frameCount==50){
            solider2.velocityY = -7
        }
        if(frameCount==50){
            solider3.velocityY = -8
        }
    
        if(player.isTouching(solider1)){
            location.reload();
        }
    
        if(player.isTouching(solider2)){
            location.reload();
        }
    
        if(player.isTouching(solider3)){
            location.reload();
        }
        if(player.isTouching(scientist)){
            maze1.visible = false;
            maze2.visible = false;
            maze3.visible = false;
            maze4.visible = false;
            maze5.visible = false;
            maze6.visible = false;
            maze7.visible = false;
            maze8.visible = false;
            maze9.visible = false;
            maze10.visible = false;
            maze11.visible = false;
            maze12.visible = false;
            maze13.visible = false;
            maze14.visible = false;
            maze15.visible = false;
            maze16.visible = false;
            maze17.visible = false;
            maze18.visible = false;
            maze19.visible = false;
            maze20.visible = false;
            maze21.visible = false;
            maze22.visible = false;
            maze23visible = false;
            maze24.visible = false;
            maze25.visible = false;
            maze26.visible = false;
            maze27.visible = false;
            maze28.visible = false;
            maze29.visible = false;
            maze30.visible = false;
            maze31.visible = false;
            maze32.visible = false;
            maze33.visible = false;
            maze34.visible = false;
            maze35.visible = false;
           wall1.visible = false;
           wall2.visible = false;
           wall3.visible = false;
           wall4.visible = false;
           solider1.visible = false;
           solider2.visible = false;
           solider3.visible = false;
           player.visible = false;
           scientist.visible = false;
           solider1.velocityX = 0;
           solider2.velocityX = 0;
           solider3.velocityX = 0;
           solider1.velocityY = 0;
           solider2.velocityY = 0;
           solider3.velocityY = 0;
           gameState = "medium";
           
        
           
            
        }
        if(time == 300){
            gameState = "end";
        }
    }
    else if(gameState == "end"){
        background("black");
        sad.visible = true;
        restart.visible=true;
        maze1.visible=false;
        textSize(80);
        fill("red");
        text("You Loose!!!",450,150);
        textSize(30);
        fill("yellow");
        text("Click the button below to restart the game",400,400);
    }
    else if (gameState == "medium"){
        background("blue")
           fill("red")
           text("you have saved the world!",200,200);
         textSize(90);
         fill("red")
         text("you are a hero!",600,200)
         textSize(60);
           restart.visible=true;

    }
    if(mousePressedOver(restart)){
        gameState = "start";
        sad.visible = false;
        restart.visible = false;
        time = 0;
        maze1.visible = true;
        maze2.visible = true;
        maze3.visible = true;
        maze4.visible = true;
        maze5.visible = true;
        maze6.visible = true;
        maze7.visible = true;
        maze8.visible = true;
        maze9.visible = true;
        maze10.visible = true;
        maze11.visible = true;
        maze12.visible = true;
        maze13.visible = true;
        maze14.visible = true;
        maze15.visible = true;
        maze16.visible = true;
        maze17.visible = true;
        maze18.visible = true;
        maze19.visible = true;
        maze20.visible = true;
        maze21.visible = true;
        maze22.visible = true;
        maze23visible = true;
        maze24.visible = true;
        maze25.visible = true;
        maze26.visible = true;
        maze27.visible = true;
        maze28.visible = true;
        maze29.visible = true;
        maze30.visible = true;
        maze31.visible = true;
        maze32.visible = true;
        maze33.visible = true;
        maze34.visible = true;
        maze35.visible = true;
       wall1.visible = true;
       wall2.visible = true;
       wall3.visible = true;
       wall4.visible = true;
       solider1.visible = true;
       solider2.visible = true;
       solider3.visible = true;
       player.visible = true;
       scientist.visible = true;
       location.reload();
      
       

    
    }
    if(gameState == "end"){
        maze1.visible = false;
        maze2.visible = false;
        maze3.visible = false;
        maze4.visible = false;
        maze5.visible = false;
        maze6.visible = false;
        maze7.visible = false;
        maze8.visible = false;
        maze9.visible = false;
        maze10.visible = false;
        maze11.visible = false;
        maze12.visible = false;
        maze13.visible = false;
        maze14.visible = false;
        maze15.visible = false;
        maze16.visible = false;
        maze17.visible = false;
        maze18.visible = false;
        maze19.visible = false;
        maze20.visible = false;
        maze21.visible = false;
        maze22.visible = false;
        maze23visible = false;
        maze24.visible = false;
        maze25.visible = false;
        maze26.visible = false;
        maze27.visible = false;
        maze28.visible = false;
        maze29.visible = false;
        maze30.visible = false;
        maze31.visible = false;
        maze32.visible = false;
        maze33.visible = false;
        maze34.visible = false;
        maze35.visible = false;
       wall1.visible = false;
       wall2.visible = false;
       wall3.visible = false;
       wall4.visible = false;
       solider1.visible = false;
       solider2.visible = false;
       solider3.visible = false;
       player.visible = false;
       scientist.visible = false;
       solider1.velocityX = 0;
       solider2.velocityX = 0;
       solider3.velocityX = 0;
       solider1.velocityY = 0;
       solider2.velocityY = 0;
       solider3.velocityY = 0;
    }
    
    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(maze1);
    player.collide(maze2);
    player.collide(maze3);
    player.collide(maze4);
    player.collide(maze5);
    player.collide(maze6);
    player.collide(maze7);
    player.collide(maze8);
    player.collide(maze9);
    player.collide(maze10);
    player.collide(maze11);
    player.collide(maze12);
    player.collide(maze13);
    player.collide(maze14);
    player.collide(maze15);
    player.collide(maze16);
    player.collide(maze17);
    player.collide(maze18);
    player.collide(maze19);
    player.collide(maze20);
    player.collide(maze21);
    player.collide(maze22);
    player.collide(maze23);
    player.collide(maze24); 
    player.collide(maze25);
    player.collide(maze26);
    player.collide(maze27);
    player.collide(maze28);
    player.collide(maze29);
    player.collide(maze30);
    player.collide(maze31);
    player.collide(maze32);
    player.collide(maze33);
    player.collide(maze34);
    player.collide(maze35);

   
    



    solider1.bounceOff(wall1);
        solider1.bounceOff(wall2);
        solider1.bounceOff(wall3);
        solider1.bounceOff(wall4);
        solider1.bounceOff(maze1);
        solider1.bounceOff(maze2);
        solider1.bounceOff(maze3);
        solider1.bounceOff(maze4);
        solider1.bounceOff(maze5);
        solider1.bounceOff(maze6);
        solider1.bounceOff(maze7);
        solider1.bounceOff(maze8);
        solider1.bounceOff(maze9);
        solider1.bounceOff(maze10);
        solider1.bounceOff(maze11);
        solider1.bounceOff(maze12);
        solider1.bounceOff(maze13);
        solider1.bounceOff(maze14);
        solider1.bounceOff(maze15);
        solider1.bounceOff(maze16);
        solider1.bounceOff(maze17);
        solider1.bounceOff(maze18);
        solider1.bounceOff(maze19);
        solider1.bounceOff(maze20);
        solider1.bounceOff(maze21);
        solider1.bounceOff(maze22);
        solider1.bounceOff(maze23);
        solider1.bounceOff(maze24);
        solider1.bounceOff(maze25);
        solider1.bounceOff(maze26);
        solider1.bounceOff(maze27);
        solider1.bounceOff(maze28);
        solider1.bounceOff(maze29);
        solider1.bounceOff(maze30);
        solider1.bounceOff(maze31);
        solider1.bounceOff(maze32);
        solider1.bounceOff(maze33);
        solider1.bounceOff(maze34);
        solider1.bounceOff(maze35);


        solider2.bounceOff(wall1);
        solider2.bounceOff(wall2);
        solider2.bounceOff(wall3);
        solider2.bounceOff(wall4);
        solider2.bounceOff(maze1);
        solider2.bounceOff(maze2);
        solider2.bounceOff(maze3);
        solider2.bounceOff(maze4);
        solider2.bounceOff(maze5);
        solider2.bounceOff(maze6);
        solider2.bounceOff(maze7);
        solider2.bounceOff(maze8);
        solider2.bounceOff(maze9);
        solider2.bounceOff(maze10);
        solider2.bounceOff(maze11);
        solider2.bounceOff(maze12);
        solider2.bounceOff(maze13);
        solider2.bounceOff(maze14);
        solider2.bounceOff(maze15);
        solider2.bounceOff(maze16);
        solider2.bounceOff(maze17);
        solider2.bounceOff(maze18);
        solider2.bounceOff(maze19);
        solider2.bounceOff(maze20);
        solider2.bounceOff(maze21);
        solider2.bounceOff(maze22);
        solider2.bounceOff(maze23);
        solider2.bounceOff(maze24);
        solider2.bounceOff(maze25);
        solider2.bounceOff(maze26);
        solider2.bounceOff(maze27);
        solider2.bounceOff(maze28);
        solider2.bounceOff(maze29);
        solider2.bounceOff(maze30);
        solider2.bounceOff(maze31);
        solider2.bounceOff(maze32);
        solider2.bounceOff(maze33);
        solider2.bounceOff(maze34);
        solider2.bounceOff(maze35);


        solider3.bounceOff(wall1);
        solider3.bounceOff(wall2);
        solider3.bounceOff(wall3);
        solider3.bounceOff(wall4);
        solider3.bounceOff(maze1);
        solider3.bounceOff(maze2);
        solider3.bounceOff(maze3);
        solider3.bounceOff(maze4);
        solider3.bounceOff(maze5);
        solider3.bounceOff(maze6);
        solider3.bounceOff(maze7);
        solider3.bounceOff(maze8);
        solider3.bounceOff(maze9);
        solider3.bounceOff(maze10);
        solider3.bounceOff(maze11);
        solider3.bounceOff(maze12);
        solider3.bounceOff(maze13);
        solider3.bounceOff(maze14);
        solider3.bounceOff(maze15);
        solider3.bounceOff(maze16);
        solider3.bounceOff(maze17);
        solider3.bounceOff(maze18);
        solider3.bounceOff(maze19);
        solider3.bounceOff(maze20);
        solider3.bounceOff(maze21);
        solider3.bounceOff(maze22);
        solider3.bounceOff(maze23);
        solider3.bounceOff(maze24);
        solider3.bounceOff(maze25);
        solider3.bounceOff(maze26);
        solider3.bounceOff(maze27);
        solider3.bounceOff(maze28);
        solider3.bounceOff(maze29);
        solider3.bounceOff(maze30);
        solider3.bounceOff(maze31);
        solider3.bounceOff(maze32);
        solider3.bounceOff(maze33);
        solider3.bounceOff(maze34);
        solider3.bounceOff(maze35);


        


        


        

    













    drawSprites();

}
