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
var duck_NeckLeftImg;
var duck_HeadImg;
var duck_HeadLeftImg;
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
var treeImg;
var pondImg;

//Text
var textPondScene_01;
var textPondScene_02;
var textTreeScene;
var textHugScene;
var textSnowScene_01;
var textSnowScene_02;

//Scenes =============================================================================================================
var treeScene = false;
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
		//Tree Scene
var duckNeckRot = -10;
var duckHeadRot = 10;
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
		//Tree Scene
var deathHeadRot = 0;	//Head Rotation

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
	duck_NeckLeftImg = loadImage("src/Duck/BodyParts/Duck_Neck_Left.png");
	duck_HeadImg = loadImage("src/Duck/BodyParts/Duck_Head.png");
	duck_HeadLeftImg = loadImage("src/Duck/BodyParts/Duck_Head_Left.png");
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
	treeImg = loadImage("src/Misc/Tree.png");
	pondImg = loadImage("src/Misc/Pond.png");

	//Text
	textPondScene_01 = loadImage("src/Text/text1.png");
	textPondScene_02 = loadImage("src/Text/text2.png");
	textTreeScene = loadImage("src/Text/text3.png");
	textHugScene = loadImage("src/Text/text4.png");
	textSnowScene_01 = loadImage("src/Text/text5.png");
	textSnowScene_02 = loadImage("src/Text/text6.png");
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
	duckPinXw = canvasCenterX-75;
	duckPinYw = windowHeight-200;

	background(90);
	imageMode(CENTER);
}

function draw() {
	background(35,30,255);

	//Tree Scene
	if (treeScene) {

		var plxTreeY = accelerationY/layer_03_yOffset*50;
			if(accelerationY < 0) {
				plxTreeY = 0;
			}
		var duck_NeckLeftx = windowWidth-380;
		var duck_NeckLefty = windowHeight-430-plxTreeY;

		//Draw Tree, Pond, Duck and Death

		image(pondImg, canvasCenterX - 300, windowHeight + 300 - plxTreeY, 800,500);
		push();
		translate(windowWidth - 280, windowHeight - 470 - plxTreeY);
		rotate(deathHeadRot);
		image(death_HeadImg_05, 0,0, 400,400);	//Death Head
		pop();
		push();
		translate(duck_NeckLeftx, duck_NeckLefty);
		rotate(duckNeckRot);
		image(duck_NeckLeftImg, 0,0, 400,400);	//Duck Neck
		pop();
		push();
		translate(duck_NeckLeftx,duck_NeckLefty);
		rotate(duckNeckRot);
		translate(7,-120);
		rotate(duckHeadRot);
		image(duck_HeadLeftImg, 0,0, 400,400);	//Duck Head
		pop();
		image(treeImg, windowWidth - 300, windowHeight + 100 - plxTreeY);
		image(textTreeScene, canvasCenterX - 200, 200 - plxTreeY, 500,100);

		//Animate Duck and Death
			//Duck
				//Idle Animation
		if(duckAnimState == 0) {
			if (duckIdleAnimPoint == duckIdleMag || duckIdleAnimPoint == 0) {
				duckIdleDir *= -1;
			}
			duckNeckRot += duckIdleDir/10;	//Neck
			duckHeadRot += duckIdleDir/10;	//Head

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
			deathHeadRot += deathIdleDir/10;

			if (deathIdleDir == -1) {
				deathIdleAnimPoint++;
			}
			else if (deathIdleDir == 1) {
				deathIdleAnimPoint--;
			}
		}
	}

	//Wind Scene
	if (windScene) {
		//Character Pin Points (For Animating Characters)
			//Death
		var deathPinX = canvasCenterX+75;	//Torso X
		var deathPinY = windowHeight-325;	//Torso Y
			var deathPinSLx = deathPinX+25;		//Left Shoulder X
			var deathPinSLy = deathPinY-115;	//Left Shoulder Y
			var deathPinSRx = deathPinX-25;		//Right Shoulder X
			var deathPinSRy = deathPinY-115;	//Right Shoulder Y
			var deathPinALx = deathPinX+15;		//Left Ankle X
			var deathPinALy = deathPinY+167.5;	//Left Ankle Y
			var deathPinARx = deathPinX-40;		//Right Ankle X
			var deathPinARy = deathPinY+167.5;	//Right Ankle Y
			var deathPinNx = deathPinX;			//Neck X
			var deathPinNy = deathPinY-155;		//Neck Y
			var deathPinHLx = -42.5;			//Left Hand X
			var deathPinHLy = 125;				//Left Hand Y
			var deathPinHRx = -42.5;			//Right Hand X
			var deathPinHRy = 125;				//Right Hand Y

			//Duck
			var duckPinWLx = duckPinXw + 7.5;	//Left Wing X
			var duckPinWLy = duckPinYw - 155;	//Left Wing Y
			var duckPinWRx = duckPinXw + 10;	//Right Wing X
			var duckPinWRy = duckPinYw - 150;	//Right Wing Y
			var duckPinNx = duckPinXw + 2.5;	//Neck X
			var duckPinNy = duckPinYw - 190;	//Neck Y
			var duckPinHx = -7.5;				//Head X
			var duckPinHy = -120;				//Head Y
			var duckPinFLx = duckPinXw - 12.5;	//Left Foot X
			var duckPinFLy = duckPinYw + 20;	//Left Foot Y
			var duckPinFRx = duckPinXw + 12.5;	//Right Foot X
			var duckPinFRy = duckPinYw + 20;	//Right Foot Y

		//Draw Characters
			//Death =============================================================================================

		push();
		translate(deathPinSRx,deathPinSRy);
		rotate(deathRotAR);
		translate(deathPinHRx,deathPinHRy);
		rotate(deathRotHR);
		image(death_HandImg, 0,0,400,400);	//Right Hand
		pop();

		push();
		translate(deathPinSRx,deathPinSRy);
		rotate(deathRotAR);
		image(death_ArmImg, 0,0,400,400);	//Right Arm
		pop();

		push();
		translate(deathPinALx,deathPinALy);
		rotate(deathRotFL);
		image(death_FootImg, 0,0,400,400);	//Left Foot
		pop();

		push();
		translate(deathPinARx,deathPinARy);
		rotate(deathRotFR);
		image(death_FootImg, 0,0,400,400);	//Right Foot
		pop();

		push();
		translate(deathPinX,deathPinY);
		rotate(deathRot);
		image(death_TorsoImg, 0,0,400,400);		//Torso
		pop();

		push();
		translate(deathPinNx,deathPinNy);
		rotate(deathRotN);
		image(death_HeadImg_01, 0,0,400,400);	//Head
		pop();

		push();
		translate(deathPinSLx,deathPinSLy);
		rotate(deathRotAL);
		translate(deathPinHLx,deathPinHLy);
		rotate(deathRotHL);
		image(death_HandImg, 0,0,400,400);	//Left Hand
		pop();

		push();
		translate(deathPinSLx,deathPinSLy);
		rotate(deathRotAL);
		image(death_ArmImg, 0,0,400,400);	//Left Arm
		pop(); 

			//Duck ==============================================================================================
		duckPinXw = canvasCenterX-75;
		duckPinYw = windowHeight-200;

		push();
		translate(duckPinWLx,duckPinWLy);
		rotate(duckRotWL);
		image(duck_WingImg_02, 0,0,400,400);	//Left Wing
		pop();

		push();
		translate(duckPinFRx,duckPinFRy);
		rotate(duckRotFR);
		image(duck_FootLeftImg, 0,0,400,400);	//Right Foot
		pop();

		push();
		translate(duckPinFLx,duckPinFLy);
		rotate(duckRotFL);
		image(duck_FootLeftImg, 0,0,400,400);	//Left Foot
		pop();

		push();
		translate();
		translate(duckPinXw,duckPinYw);
		rotate(duckRot);
		image(duck_TorsoSideImg, 0,0,400,400);	//Torso
		pop();

		push();
		translate(duckPinNx,duckPinNy);
		rotate(duckRotN);
		image(duck_NeckImg, 0,0,400,400);		//Neck
		pop();

		push();
		translate(duckPinNx,duckPinNy);
		rotate(duckRotN);
		translate(duckPinHx,duckPinHy);
		rotate(duckRotH);
		image(duck_HeadImg, 0,0,400,400);		//Head
		pop();

		push();
		translate(duckPinWRx,duckPinWRy);
		rotate(duckRotWR);
		image(duck_WingImg_02, 0,0,400,400);	//Right Wing
		pop(); 

		//Environment =======================================================================================
			//Tulip
		push();
		translate(canvasCenterX - 150, windowHeight - 150);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX - 300, windowHeight - 150);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX + 165, windowHeight - 150);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX + 305, windowHeight - 150);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX + 250, windowHeight - 150);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
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
			tulipRot = accelerationZ;
			if (tulipRot <= -40) {
				tulipRot = -40;
			}
			if (tulipRot >= 40) {
				tulipRot = 40;
			}

			if (tulipIdleDir == 1) {
				tulipIdleAnimPoint++;
			}
			else if (tulipIdleDir == -1) {
				tulipIdleAnimPoint--;
			}
		}
	}	// -/Draw

	//Snow Scene
	if (snowScene) {
		background(135,100,100);

		//Paralax Layers
			//X Offset
		var plxLayerX_01 = accelerationY/layer_01_xOffset*10;
		var plxLayerX_02 = accelerationY/layer_02_xOffset*10;
		var plxLayerX_03 = accelerationY/layer_03_xOffset*10;
		var plxLayerX_04 = accelerationY/layer_04_xOffset*10;
			//Y Offset
		var plxLayerY_01 = accelerationX/layer_01_yOffset*10;
		var plxLayerY_03 = accelerationX/layer_03_yOffset*10;

		image(SnowFallImg_01, canvasCenterX + plxLayerX_04-250, canvasCenterY + plxLayerY_01-250, windowWidth + 500, windowHeight + 500); //Snow Layer 1 (Far)
		image(death_SittingImg_02,canvasCenterX + plxLayerX_01,windowHeight-350); //Death
		image(duck_DeadImg,canvasCenterX + plxLayerX_02,windowHeight-200, 800,200); //Duck
		image(SnowFall_MotionBlurImg, canvasCenterX + plxLayerX_03-250, canvasCenterY + plxLayerY_03-250, windowWidth + 500, windowHeight + 500); //Snow_MotionBlur (Close)
	}
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
	canvasCenterX = windowWidth/2;
	canvasCenterY = windowHeight/2;
}