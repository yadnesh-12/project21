var canvas;
var music;
var obj1; 
var obj2;
var obj3;
var obj4;
var box;
var invisible;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(800,600);
    obj1=createSprite(120,550,150,10);
    obj1.shapeColor="red";
    obj2=createSprite(300,550,150,10);
    obj2.shapeColor="yellow";
    obj3=createSprite(480,550,150,10);
    obj3.shapeColor="green";
    obj4=createSprite(660,550,150,10);
    obj4.shapeColor="blue";

    box=createSprite(400,300,30,30);
    box.shapeColor="orange";
    box.velocityY=3;
    box.velocityX=4;

    invisible=createSprite(400,0,800,10);
    invisible.visible=false;

    

    /*obj1=fixed
    box=moving*/

    //create box sprite and give velocity

}

function draw() {
    background("white");
    
    
    edges=createEdgeSprites();
    
   /* if(box.y - obj3.y <= box.height/2 + obj3.height/2 &&
        obj3.y- box.y <= box.height/2 + obj3.height/2 ){
            box.velocityY=-(box.velocityY);
            box.shapeColor="green";
        }
    if(box.y - obj4.y <= box.height/2 + obj4.height/2 &&
        obj4.y- box.y <= box.height/2 + obj4.height/2 ){
                box.velocityY=-(box.velocityY);
                box.shapeColor="blue";
            }
    if(box.y - obj1.y <= box.height/2 + obj1.height/2 &&
        obj1.y- box.y <= box.height/2 + obj1.height/2 ){
        box.velocityY=-(box.velocityY);
        box.shapeColor="red";
                }  
    if(box.y - obj2.y <= box.height/2 + obj2.height/2 &&
        obj2.y- box.y <= box.height/2 + obj2.height/2 ){
        box.velocityY=-(box.velocityY);
        box.shapeColor="yellow";
                    }*/

    if(box.bounceOff(obj1)){
        music.stop();
        box.shapeColor="red";
        box.velocityX=0;
        box.velocityY=0;
    }
    if(box.bounceOff(obj2)){
        //music.loop();
        box.shapeColor="yellow";
    }
    if(box.bounceOff(obj3)){
        //music.play();
        box.shapeColor="green";
    }
    if(box.bounceOff(obj4) && box.isTouching(obj4)){
        music.loop();
        box.shapeColor="blue";
    }                
      box.bounceOff(invisible);                                    


    box.bounceOff(edges);
    drawSprites();
    //add condition to check if box touching surface and make it box
}
