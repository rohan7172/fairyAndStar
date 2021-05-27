var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {density:1.0, restitution:0.5, isStatic:true});
	World.add(world, starBody);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

	star.x=starBody.position.x;
	star.y=starBody.position.y;

	if(keyDown(LEFT_ARROW)){
		fairy.x=fairy.x-10;
	}else{fairy.x=fairy.x}

	if(keyDown(RIGHT_ARROW)){
		fairy.x=fairy.x+10;
	}else{fairy.x=fairy.x}

	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}
	
	if(starBody.position.y>515&&
		fairy.x>520&&
		fairy.x<600){
		Matter.Body.setStatic(starBody,true);
	}

  drawSprites();
}
