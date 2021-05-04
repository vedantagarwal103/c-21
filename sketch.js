var fixrect 
var mrect 
var rect1,rect2,rect3
 
function setup() {
  createCanvas(800,400);
  fixrect =  createSprite(400,200,50,100);
fixrect.shapeColor="green"
mrect =  createSprite(600,200,70,50);
mrect.shapeColor="green"
rect1 =  createSprite(700,100,50,50);
rect1.shapeColor="green"
rect2 =  createSprite(200,100,50,50);
rect2.shapeColor="green"
rect3 =  createSprite(50,100,50,50);
rect3.shapeColor="green"
rect1.debug = true
rect2.debug = true
rect3.debug = true
mrect.debug = true
fixrect.debug = true
}

function draw() {
  
  background(5,2,6); 

  mrect.y = mouseY
  mrect.x = mouseX
  
  if(isTouching(mrect,fixrect)){
mrect.shapeColor = "red";
fixrect.shapeColor = "red";
  }
else if(isTouching(mrect,rect1)){
mrect.shapeColor = "red";
rect1.shapeColor = "red";
}

else if(isTouching(mrect,rect2)){
  mrect.shapeColor = "red";
  rect2.shapeColor = "red";
    }
    else if(isTouching(mrect,rect3)){
      mrect.shapeColor = "red";
      rect3.shapeColor = "red";
        }
else{
  
      rect1.shapeColor = "green";

      mrect.shapeColor = "green";
      rect2.shapeColor = "green";

      fixrect.shapeColor = "green";
      rect3.shapeColor = "green";
}
  drawSprites();
}

function isTouching(ob1,ob2){

  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2 
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2
    ){
     
      return true

    }
  else {
   
    return false
    

  }
}