//Duck Images
	//Poses
var duck_FrontImg;
var duck_StandingImg;
var duck_AnnoyedImg;
var duck_LeanImg;
var duck_LookBackImg_01;
var duck_LookBackImg_02;
var duck_ScaredImg;
var duck_WalkImg;
var duck_WalkFastImg;
var duck_DeadImg;
	//Body Parts
var duck_TorsoFrontImg;
var duck_TorsoSideImg;
var duck_NeckImg;
var duck_HeadImg;
var duck_FootLeftImg;
var duck_FootRightImg;
var duck_WingImg_01;
var duck_WingImg_02;

//Death Images
	//Poses
var death_FrontImg;
var death_AnnoyedImg;
var death_HandsOnHipsImg;
var death_LookBackImg;
var death_SittingImg_01;
var death_SittingImg_02;
var death_StandingImg_01;
var death_StandingImg_02;
var death_TalkImg;
	//Body Parts
var death_HeadImg_01;
var death_HeadImg_02;
var death_HeadImg_03;
var death_HeadImg_04;
var death_HeadImg_05;
var death_HeadImg_06;
var death_HeadImg_07;
var death_TorsoImg;
var death_ArmImg;
var death_FootImg;
var death_HandImg;

//Environment Images
var SnowFallImg_01;
var SnowFallImg_02;
var SnowFallImg_03;
var SnowFall_MotionBlurImg;
var tulipImg;

//Scenes ====================================================================================================
var windScene = true;
var snowScene = false;

//Transformations ====================================================================================================
	//Canvas
var canvasCenterX;
var canvasCenterY;
	//Duck
		//Wind Scene
var duckPinXw;
var duckPinYw;

var duckRotWR = 50;	//Right Wing Rotation
var duckRotWL = 50;	//Left Wing Rotation
var duckRotN = 0;	//Neck Rotation
var duckRotH = 0;	//Head Rotation
var duckRotFR = 0;	//Right Foot Rotation
var duckRotFL = 0;	//Left Foot Rotation
var duckRot = 0;	//Torso Rotation
	//Death
		//Wind Scene
var deathRotAR = -10;	//Right Arm Rotation
var deathRotAL = -15;	//Left Arm Rotation
var deathRotN = 0;		//Neck Rotation
var deathRotHL = 0;		//Left Hand Rotation
var deathRotHR = 0;		//Right Hand Rotation
var deathRotFL = 0;		//Left Foot Rotation
var deathRotFR = 0;		//Right Foot Rotation
var deathRot = 0;		//Torso Rotation

	//Environment
var tulipRot = 0;	//Tulip Rotation

//Animation States ====================================================================================================
	//Duck
var duckAnimState = 0;	//0 = Idle, 1 = Hug
	var duckIdleMag = 50;
	var duckIdleAnimPoint = 0;
	var duckIdleDir = 1;
	var duckHugMag = 25;
	var duckHugAnimPoint = 0;
	var duckHugDir = 1;

	//Death
var deathAnimState = 0;	//0 = Idle
	var deathIdleMag = 63;
	var deathIdleAnimPoint = 0;
	var deathIdleDir = 1;

	//Tulips
var tulipAnimState = 0; //0 = Idle, 1 = Blow Left, 2 = Blow Right
	var tulipIdleMag = 50;
	var tulipIdleAnimPoint = 0;
	var tulipIdleDir = -1;

	var tulipBLMag = 24;
	var tulipBLAnimPoint = 0;
	var tulipBLDir = -1;

//Paralax Layers ====================================================================================================
	//X Offset
var layer_01_xOffset = 20;
var layer_02_xOffset = 10;
var layer_03_xOffset = 8;
var layer_04_xOffset = 30;

	//Y Offset
var layer_01_yOffset = 20;
var layer_03_yOffset = 8;

// ====================================================================================================
function preload() {
	//Duck Images
		//Poses
	duck_FrontImg = loadImage("src/Duck/Poses/Duck_Front.png");
	duck_Standing = loadImage("src/Duck/Poses/Duck_Standing.png");
	duck_AnnoyedImg = loadImage("src/Duck/Poses/Duck_Annoyed.png");
	duck_LeanImg = loadImage("src/Duck/Poses/Duck_Lean.png");
	duck_LookBackImg_01 = loadImage("src/Duck/Poses/Duck_LookBack_01.png");
	duck_LookBackImg_02 = loadImage("src/Duck/Poses/Duck_LookBack_02.png");
	duck_ScaredImg = loadImage("src/Duck/Poses/Duck_Scared.png");
	duck_WalkImg = loadImage("src/Duck/Poses/Duck_Walk.png");
	duck_WalkFastImg = loadImage("src/Duck/Poses/Duck_Walk_Fast.png");
	duck_DeadImg = loadImage("src/Duck/Poses/Duck_Dead.png");
		//Body Parts
	duck_TorsoFrontImg = loadImage("src/Duck/BodyParts/Duck_Torso_Front.png");
	duck_TorsoSideImg = loadImage("src/Duck/BodyParts/Duck_Torso_Side.png");
	duck_NeckImg = loadImage("src/Duck/BodyParts/Duck_Neck.png");
	duck_HeadImg = loadImage("src/Duck/BodyParts/Duck_Head.png");
	duck_FootLeftImg = loadImage("src/Duck/BodyParts/Duck_Foot_Left.png");
	duck_FootRightImg = loadImage("src/Duck/BodyParts/Duck_Foot_Right.png");
	duck_WingImg_01 = loadImage("src/Duck/BodyParts/Duck_Wing_01.png");
	duck_WingImg_02 = loadImage("src/Duck/BodyParts/Duck_Wing_02.png");

	//Death Images
		//Poses
	death_FrontImg = loadImage("src/Death/Poses/Death_Front.png");
	death_AnnoyedImg = loadImage("src/Death/Poses/Death_Annoyed.png");
	death_HandsOnHipsImg = loadImage("src/Death/Poses/Death_HandsOnHips.png");
	death_LookBackImg = loadImage("src/Death/Poses/Death_LookBack.png");
	death_SittingImg_01 = loadImage("src/Death/Poses/Death_Sitting.png");
	death_SittingImg_02 = loadImage("src/Death/Poses/Death_Sitting_01.png");
	death_StandingImg_01 = loadImage("src/Death/Poses/Death_Standing.png");
	death_StandingImg_02 = loadImage("src/Death/Poses/Death_Standing_01.png");
	death_TalkImg = loadImage("src/Death/Poses/Death_Talk.png");
		//Body Parts
	death_HeadImg_01 = loadImage("src/Death/BodyParts/Death_Head_01.png");
	death_HeadImg_02 = loadImage("src/Death/BodyParts/Death_Head_02.png");
	death_HeadImg_03 = loadImage("src/Death/BodyParts/Death_Head_03.png");
	death_HeadImg_04 = loadImage("src/Death/BodyParts/Death_Head_04.png");
	death_HeadImg_05 = loadImage("src/Death/BodyParts/Death_Head_05.png");
	death_HeadImg_06 = loadImage("src/Death/BodyParts/Death_Head_06.png");
	death_HeadImg_07 = loadImage("src/Death/BodyParts/Death_Head_07.png");
	death_TorsoImg = loadImage("src/Death/BodyParts/Death_Torso.png");
	death_ArmImg = loadImage("src/Death/BodyParts/Death_Arm.png");
	death_FootImg = loadImage("src/Death/BodyParts/Death_FootSide.png");
	death_HandImg = loadImage("src/Death/BodyParts/Death_Hand.png");

	//Environment Images
		//Snow
	SnowFallImg_01 = loadImage("src/Textures/SnowFall_01.png");
	SnowFallImg_02 = loadImage("src/Textures/SnowFall_02.png");
	SnowFallImg_03 = loadImage("src/Textures/SnowFall_03.png");
	SnowFall_MotionBlurImg = loadImage("src/Textures/SnowFall_MotionBlur.png");
	tulipImg = loadImage("src/Misc/Tulip.png");
}

function setup() {
	colorMode(HSB);
	angleMode(DEGREES);

	createCanvas(windowWidth,windowHeight);

	//Setup Transformation Variables
		//Canvas
	canvasCenterX = windowWidth/2;
	canvasCenterY = windowHeight/2;
		//Duck
			//Wind Scene
	duckPinXw = canvasCenterX-100;
	duckPinYw = windowHeight-200;

	background(90);
	imageMode(CENTER);
}

function draw() {
	background(35,30,255);

	//Wind Scene
	if (windScene) {
		//Character Pin Points (For Animating Characters)
			//Death
		var deathPinX = canvasCenterX+150;	//Torso X
		var deathPinY = windowHeight-450;	//Torso Y
			var deathPinSLx = deathPinX+50;		//Left Shoulder X
			var deathPinSLy = deathPinY-230;	//Left Shoulder Y
			var deathPinSRx = deathPinX-50;		//Right Shoulder X
			var deathPinSRy = deathPinY-230;	//Right Shoulder Y
			var deathPinALx = deathPinX+30;		//Left Ankle X
			var deathPinALy = deathPinY+335;	//Left Ankle Y
			var deathPinARx = deathPinX-80;		//Right Ankle X
			var deathPinARy = deathPinY+335;	//Right Ankle Y
			var deathPinNx = deathPinX;			//Neck X
			var deathPinNy = deathPinY-310;		//Neck Y
			var deathPinHLx = -85;				//Left Hand X
			var deathPinHLy = 250;				//Left Hand Y
			var deathPinHRx = -85;				//Right Hand X
			var deathPinHRy = 250;				//Right Hand Y

			//Duck
			var duckPinWLx = duckPinXw + 15;	//Left Wing X
			var duckPinWLy = duckPinYw - 310;	//Left Wing Y
			var duckPinWRx = duckPinXw + 20;	//Right Wing X
			var duckPinWRy = duckPinYw - 300;	//Right Wing Y
			var duckPinNx = duckPinXw + 5;		//Neck X
			var duckPinNy = duckPinYw - 380;	//Neck Y
			var duckPinHx = -15;				//Head X
			var duckPinHy = -240;				//Head Y
			var duckPinFLx = duckPinXw - 25;	//Left Foot X
			var duckPinFLy = duckPinYw + 40;	//Left Foot Y
			var duckPinFRx = duckPinXw + 25;	//Right Foot X
			var duckPinFRy = duckPinYw +40;		//Right Foot Y

		//Draw Characters
			//Death =============================================================================================

		push();
		translate(deathPinSRx,deathPinSRy);
		rotate(deathRotAR);
		translate(deathPinHRx,deathPinHRy);
		rotate(deathRotHR);
		image(death_HandImg, 0,0);	//Right Hand
		pop();

		push();
		translate(deathPinSRx,deathPinSRy);
		rotate(deathRotAR);
		image(death_ArmImg, 0,0);	//Right Arm
		pop();

		push();
		translate(deathPinALx,deathPinALy);
		rotate(deathRotFL);
		image(death_FootImg, 0,0);	//Left Foot
		pop();

		push();
		translate(deathPinARx,deathPinARy);
		rotate(deathRotFR);
		image(death_FootImg, 0,0);	//Right Foot
		pop();

		push();
		translate(deathPinX,deathPinY);
		rotate(deathRot);
		image(death_TorsoImg, 0,0,400,400);		//Torso
		pop();

		push();
		translate(deathPinNx,deathPinNy);
		rotate(deathRotN);
		image(death_HeadImg_01, 0,0);	//Head
		pop();

		push();
		translate(deathPinSLx,deathPinSLy);
		rotate(deathRotAL);
		translate(deathPinHLx,deathPinHLy);
		rotate(deathRotHL);
		image(death_HandImg, 0,0);	//Left Hand
		pop();

		push();
		translate(deathPinSLx,deathPinSLy);
		rotate(deathRotAL);
		image(death_ArmImg, 0,0);	//Left Arm
		pop(); 

			//Duck ==============================================================================================
		duckPinXw = canvasCenterX-150;
		duckPinYw = windowHeight-200;

		push();
		translate(duckPinWLx,duckPinWLy);
		rotate(duckRotWL);
		image(duck_WingImg_02, 0,0);	//Left Wing
		pop();

		push();
		translate(duckPinFRx,duckPinFRy);
		rotate(duckRotFR);
		image(duck_FootLeftImg, 0,0);	//Right Foot
		pop();

		push();
		translate(duckPinFLx,duckPinFLy);
		rotate(duckRotFL);
		image(duck_FootLeftImg, 0,0);	//Left Foot
		pop();

		push();
		translate();
		translate(duckPinXw,duckPinYw);
		rotate(duckRot);
		image(duck_TorsoSideImg, 0,0);	//Torso
		pop();

		push();
		translate(duckPinNx,duckPinNy);
		rotate(duckRotN);
		image(duck_NeckImg, 0,0);		//Neck
		pop();

		push();
		translate(duckPinNx,duckPinNy);
		rotate(duckRotN);
		translate(duckPinHx,duckPinHy);
		rotate(duckRotH);
		image(duck_HeadImg, 0,0);		//Head
		pop();

		push();
		translate(duckPinWRx,duckPinWRy);
		rotate(duckRotWR);
		image(duck_WingImg_02, 0,0);	//Right Wing
		pop(); 

		//Environment =======================================================================================
			//Tulip
		push();
		translate(canvasCenterX - 350, canvasCenterY + 420);
		rotate(tulipRot);
		image(tulipImg, 0,0);
		pop();
		push();
		translate(canvasCenterX - 500, canvasCenterY + 420);
		rotate(tulipRot);
		image(tulipImg, 0,0);
		pop();
		push();
		translate(canvasCenterX + 365, canvasCenterY + 420);
		rotate(tulipRot);
		image(tulipImg, 0,0);
		pop();
		push();
		translate(canvasCenterX + 505, canvasCenterY + 420);
		rotate(tulipRot);
		image(tulipImg, 0,0);
		pop();
		push();
		translate(canvasCenterX + 450, canvasCenterY + 420);
		rotate(tulipRot);
		image(tulipImg, 0,0);
		pop();

		//Animate ===========================================================================================
			//Duck
				//Idle Animation
		if(duckAnimState == 0) {
			if (duckIdleAnimPoint == duckIdleMag || duckIdleAnimPoint == 0) {
				duckIdleDir *= -1;
			}
			duckRotN += duckIdleDir/10;		//Neck
			duckRotWR += duckIdleDir/10;	//Right Wing
			duckRotWL += duckIdleDir/10;	//Left Wing
			duckRotH += duckIdleDir/10;		//Head

			if (duckIdleDir == -1) {
				duckIdleAnimPoint++;	//Animation Point
			}
			else if (duckIdleDir == 1) {
				duckIdleAnimPoint--;	//Animation Point
			}
		}

			//Death
				//Idle Animation
		if(deathAnimState == 0){
			if (deathIdleAnimPoint == deathIdleMag || deathIdleAnimPoint == 0) {
				deathIdleDir *= -1;
			}
			deathRotN += deathIdleDir/10;
			deathRotAL += deathIdleDir/15;
			deathRotAR += deathIdleDir/15;

			if (deathIdleDir == -1) {
				deathIdleAnimPoint++;
			}
			else if (deathIdleDir == 1) {
				deathIdleAnimPoint--;
			}
		}

			//Tulips
				//Idle Animation
		if(tulipAnimState == 0) {
			if (tulipIdleAnimPoint == tulipIdleMag || tulipIdleAnimPoint == 0) {
				tulipIdleDir *= -1;
			}
			tulipRot += tulipIdleDir/20;

			if (tulipIdleDir == 1) {
				tulipIdleAnimPoint++;
			}
			else if (tulipIdleDir == -1) {
				tulipIdleAnimPoint--;
			}
		}
				//Blow Left Animation
		if(tulipAnimState == 1) {
			if (tulipBLAnimPoint == tulipBLMag || tulipBLAnimPoint == -70) {
				tulipBLDir *= -1;
			}
			tulipRot += tulipBLDir;

			if (tulipBLDir == -1) {
				tulipBLAnimPoint++;
			}
			else if (tulipBLDir == 1) {
				tulipBLAnimPoint--;
			}
		}
	}	// -/Draw

	//Snow Scene
	if (snowScene) {
		background(135,100,100);

		//Paralax Layers
			//X Offset
		var plxLayerX_01 = mouseX/layer_01_xOffset;
		var plxLayerX_02 = mouseX/layer_02_xOffset;
		var plxLayerX_03 = mouseX/layer_03_xOffset;
		var plxLayerX_04 = mouseX/layer_04_xOffset;
			//Y Offset
		var plxLayerY_01 = mouseY/layer_01_yOffset;
		var plxLayerY_03 = mouseY/layer_03_yOffset;

		image(SnowFallImg_01, canvasCenterX + plxLayerX_04-250, canvasCenterY + plxLayerY_01-250, windowWidth + 500, windowHeight + 500); //Snow Layer 1 (Far)
		image(death_SittingImg_02,canvasCenterX + plxLayerX_01,windowHeight-400); //Death
		image(duck_DeadImg,canvasCenterX + plxLayerX_02,windowHeight-250, 800,200); //Duck
		image(SnowFall_MotionBlurImg, canvasCenterX + plxLayerX_03-250, canvasCenterY + plxLayerY_03-250, windowWidth + 500, windowHeight + 500); //Snow_MotionBlur (Close)
	}
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
	canvasCenterX = windowWidth/2;
	canvasCenterY = windowHeight/2;
}