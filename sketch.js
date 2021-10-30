var gun,gunan;
var target,targetImg,targetGroup,target2,target3,target4;
var bul,bullet,bulGroup;
var backImg,backImg2;
var isDestroyed = false;
var score = 0


function preload(){
    gunan = loadImage("m1887.png")
    targetImg = loadImage("target.png")
    bullet = loadImage("bullet.png")
    backImg = loadImage("background.png")
    gsound = loadSound("M1887.mp3")
    target2 = loadImage("target2.png")
    target3 = loadImage("target3.png")
    target4 = loadImage("target4.png")
    backImg2 = loadImage("p.jpg")
  
}
function setup() {
    createCanvas(1500, 750);

   
    

    gun = createSprite(100,670,30,40)
    gun.addImage(gunan)
    gun.scale = 0.2

    target = createSprite(60,200,50,70)
    target.addImage(targetImg)
    target.scale = 0.2
    target.velocityY = 2

    bulGroup = new Group()
    targetGroup = new Group()
  }
  
  function draw() {
    if(score<100){
      background( backImg);
    }else{
      background( backImg2);
    }
   
    fill("red")
    textSize(40)
    text(score,1200,50)
    
    if(keyDown("left")){
        gun.x = gun.x-30
    }
    if(keyDown("right")){
        gun.x = gun.x+30
    }
    if(keyDown("space")){
        bul = createSprite(100,600,5,10)
        bulGroup.add(bul)
        bul.addImage(bullet)
        bul.scale =0.2
        gsound.play();
        bul.x = gun.x
        target.depth = bul.depth;
        bul.depth = bul.depth + 1;
            
        bul.velocityY = -10
    }
    if(target.y >600 ){
        gun.visible = false
        gameOver()
    }
    rtarget();
    rla();
   // target.overlap(bulGroup, function(collector, collected) {
       
        //collected is the sprite in the group collectibles that triggered
        //the event
       // collected.remove();
     // });
     if(target.isTouching(bulGroup)){
         console.log("www")
         target.visible=false
        isDestroyed = true
     }
    drawSprites();
  }
  function rtarget(){
  
     if( isDestroyed){
         x = random(100,1500)
         y = random(50,400)
         target = createSprite(x,y,50,70)
          
          var rand = Math.round(random(1,4));
          switch(rand) {
            case 1:target.addImage(targetImg);
                   target.scale = 0.2
                    break;
            case 2: target.addImage(target2);
                    break;
            case 3:target.addImage(target3);
                    break;
            case 4:target.addImage(target4);
                 target.scale = 0.5
                    break;
            default: break;
          }
          
          target.velocityY = +(2 + score/50);
          score += 10
          isDestroyed = false
     }
  }
  function rla(){
    if (frameCount % 400 === 0) {
      x = random(100,1500)
         y = random(50,400)
      la = createSprite(x,y,50,70)
      la.addImage(lImg)
    la.velocityY = 2
    la.scale = 0.2
    }
  }
  function gameOver() {
    swal(
      {
        title: `Game Over!!!`,
        text: "Thanks for playing!!",
        imageUrl:
          "https://e7.pngegg.com/pngimages/752/485/png-clipart-ajin-demi-human-kei-nagai-anime-%E4%BA%9A%E4%BA%BA-manga-anime-monochrome-cartoon.png",
        imageSize: "150x150",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
  }
  

  