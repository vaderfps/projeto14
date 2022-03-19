var bow , arrow,  background, blue, red, pink, green
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  if(frameCount % 100 == 0){
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 60 === 0) {
   switch(select_balloon == 1){
    case 1: red.addImage(red_balloonImage)//chamar o balãovermelho
    break;
    case 2: blue.addImage(blue_balloonImage)//chamar o balãoazul
    break;
    case 3: green.addImage(green_balloonImage)//chamar o balãoverde
    break;
    case 4: pink.addImage(pink_balloonImage)//chamar o balãorosa
    break;
    default: break;
  }}
}
  redBalloon()
  greenBalloon()
  blueBalloon()
  pinkBalloon()

  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //crieSprite para o balão 
  var blue = createSprite(0, Math.round(random(20,370)),10,10)
  //adicioneImagem para o balão
  blue.addImage(blue_balloonImage)
  //adicione velocidade para fazer o balão se mover
  blue.velocityX = 3
  //mudar a dimensão do balão
  blue.lifetime = 150
  //atribua tempo de vida ao balão}
  blue.scale = 0.1
  }

function greenBalloon() {
  //crieSprite para o balão
  var green = createSprite(0, Math.round(random(20,370)),10,10)
  //adicioneImagem para o balão
  green.addImage(green_balloonImage)
  //adicione velocidade para fazer o balão se mover
  green.velocityX = 3
  //mudar a dimensão do balão
  green.lifetime = 150
  //atribua tempo de vida ao balão}
  green.scale = 0.1
}


function pinkBalloon() {
  //crieSprite para o balão
  var pink = createSprite(0, Math.round(random(20,370)),10,10)
  //adicioneImagem para o balão
  pink.addImage(pink_balloonImage)
  //adicione velocidade para fazer o balão se mover
  pink.velocityX = 3
  //mudar a dimensão do balão
  pink.lifetime = 150
  //atribua tempo de vida ao balão
  pink.scale = 0.1
}