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
var tutorialBG;

//Text
var textPondScene_01;
var textPondScene_02;
var textTreeScene;
var textHugScene;
var textSnowScene_01;
var textSnowScene_02;
var textTitle;
var textAuthor;
var textGecko;
var textTutorial;
var textTutorialHelp;
var textStart;
var textCredits;

//Scenes =============================================================================================================
var titlePage = true;
var tutorial = false;
var treeScene = false;
var windScene = false;
var snowScene = false;
var creditScene = false;

//Transformations ====================================================================================================
	//Canvas
var canvasCenterX;
var canvasCenterY;
var pageTurnRightX;
var pageTurnLeftX;
	//Duck
		//Title Page
var duckPinXt;
var duckPinYt;
		//Wind Scene
var duckPinXw;
var duckPinYw;
var deathPinX;
var deathPinY;

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
	var duckHugMag = 50;
	var duckHugAnimPoint = 0;
	var duckHugDir = -1;

	//Death
var deathAnimState = 0;	//0 = Idle, 1 = Hug
	var deathIdleMag = 63;
	var deathIdleAnimPoint = 0;
	var deathIdleDir = 1;
	var deathHugMag = 50;
	var deathHugAnimPoint = 0;
	var deathHugDir = 1;

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
	tutorialBG = loadImage("src/Textures/tutorialBG.png");

	//Text
	textPondScene_01 = loadImage("src/Text/text1.png");
	textPondScene_02 = loadImage("src/Text/text2.png");
	textTreeScene = loadImage("src/Text/text3.png");
	textHugScene = loadImage("src/Text/text4.png");
	textSnowScene_01 = loadImage("src/Text/text5.png");
	textSnowScene_02 = loadImage("src/Text/text6.png");
	textTitle = loadImage("src/Text/textTitle.png");
	textAuthor = loadImage("src/Text/textAuthor.png");
	textGecko = loadImage("src/Text/textGeckoPress.png");
	textTutorial = loadImage("src/Text/textTutorialButton.png");
	textTutorialHelp = loadImage("src/Text/textTutorial.png");
	textStart = loadImage("src/Text/textStart.png");
	textCredits = loadImage("src/Text/textCredits.png");
}

function setup() {
	colorMode(HSB);
	angleMode(DEGREES);

	createCanvas(windowWidth,windowHeight);

	//Setup Transformation Variables
		//Canvas
	canvasCenterX = windowWidth/2;
	canvasCenterY = windowHeight/2;
	pageTurnRightX = windowWidth-200;
	pageTurnLeftX = 200;
		//Duck
			//Title Page
	duckPinXt = canvasCenterX;
	duckPinYt = windowHeight-95;
			//Wind Scene
	duckPinXw = canvasCenterX-75;
	duckPinYw = windowHeight-95;
	deathPinX = canvasCenterX+75;
	deathPinY = windowHeight-225;

	background(90);
	imageMode(CENTER);
}

function draw() {
	background(35,30,255);

	//Title Page
	if (titlePage) {
		//Duck
			var duckPinWLx = duckPinXt + 25;	//Left Wing X
			var duckPinWLy = duckPinYt - 125;	//Left Wing Y
			var duckPinWRx = duckPinXt + 20;	//Right Wing X
			var duckPinWRy = duckPinYt - 135;	//Right Wing Y
			var duckPinNx = duckPinXt + 2.5;	//Neck X
			var duckPinNy = duckPinYt - 190;	//Neck Y
			var duckPinHx = -7.5;				//Head X
			var duckPinHy = -120;				//Head Y
			var duckPinFLx = duckPinXt - 20;	//Left Foot X
			var duckPinFLy = duckPinYt + 20;	//Left Foot Y
			var duckPinFRx = duckPinXt + 12.5;	//Right Foot X
			var duckPinFRy = duckPinYt + 20;	//Right Foot Y

		//Draw the Text ===================================================================================
		image(textTitle, canvasCenterX, 180, 600,125);
		image(textAuthor, canvasCenterX, 100, 500,75);
		image(textGecko, windowWidth-175, windowHeight - 57.5, 350,50);
		rectMode(CENTER);
		fill(35,255,255);
		rect(canvasCenterX - 100, 230, 180,30);
		image(textTutorial, canvasCenterX - 100, 230, 350,50);
		rect(canvasCenterX + 100, 230, 180,30);
		image(textStart, canvasCenterX + 100, 232, 350,50);

		//Draw the Duck ===================================================================================
		push();
		translate(duckPinWLx,duckPinWLy);
		rotate(duckRotWL);
		image(duck_WingImg_02, 0,0, 400,400);	//Left Wing
		pop();

		push();
		translate(duckPinFRx,duckPinFRy);
		rotate(duckRotFR);
		image(duck_FootLeftImg, 0,0, 400,400);	//Right Foot
		pop();

		push();
		translate(duckPinFLx,duckPinFLy);
		rotate(duckRotFL);
		image(duck_FootLeftImg, 0,0, 400,400);	//Left Foot
		pop();

		push();
		translate();
		translate(duckPinXt,duckPinYt);
		rotate(duckRot);
		image(duck_TorsoSideImg, 0,0, 400,400);	//Torso
		pop();

		push();
		translate(duckPinNx,duckPinNy);
		rotate(duckRotN);
		image(duck_NeckImg, 0,0, 400,400);		//Neck
		pop();

		push();
		translate(duckPinNx,duckPinNy);
		rotate(duckRotN);
		translate(duckPinHx,duckPinHy);
		rotate(duckRotH);
		image(duck_HeadImg, 0,0, 400,400);		//Head
		pop();

		push();
		translate(duckPinWRx,duckPinWRy);
		rotate(duckRotWR);
		image(duck_WingImg_02, 0,0, 400,400);	//Right Wing
		pop(); 

		//Animate the Duck ================================================================================
		if (duckAnimState == 0) {
			if (duckIdleAnimPoint == duckIdleMag || duckIdleAnimPoint == 0) {
				duckIdleDir *= -1;
			}
			duckRotN += duckIdleDir/10;	//Neck
			duckRotH += duckIdleDir/10;	//Head

			duckRotWR = accelerationZ+50;
			duckRotWL = accelerationZ+55;

			if (duckIdleDir == -1) {
				duckIdleAnimPoint++;	//Animation Point
			}
			else if (duckIdleDir == 1) {
				duckIdleAnimPoint--;	//Animation Point
			}
		}
	}

	//Tutorial
	else if (tutorial) {
		image(tutorialBG,canvasCenterX,canvasCenterY,windowWidth,windowHeight);
		image(textTutorialHelp, canvasCenterX,canvasCenterY);
	}

	//Tree Scene
	else if (treeScene) {

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
	else if (windScene) {
		//Character Pin Points (For Animating Characters)
			//Death
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

			//Duck ===============================================================================
		push();
		translate(duckPinWLx,duckPinWLy);
		rotate(duckRotWL);
		image(duck_WingImg_02, 0,0,400,400);	//Left Wing
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

			//Death =============================================================================

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

			//Duck ==============================================================================================
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
		translate(duckPinWRx,duckPinWRy);
		rotate(duckRotWR);
		image(duck_WingImg_02, 0,0,400,400);	//Right Wing
		pop(); 

			//Death =========================================================================
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

		//Environment =======================================================================================
			//Tulip
		push();
		translate(canvasCenterX - 150, windowHeight - 50);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX - 300, windowHeight - 50);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX + 165, windowHeight - 50);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX + 305, windowHeight - 50);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();
		push();
		translate(canvasCenterX + 250, windowHeight - 50);
		rotate(tulipRot);
		image(tulipImg, 0,0,400,400);
		pop();

		image(textHugScene, 280,125,500,100);

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
				//Hug Animation
		if (duckAnimState == 1) {
			if (duckHugAnimPoint < duckHugMag) {
				duckRotN -= duckHugDir/2;
				duckRotH -= duckHugDir/5;
				duckRotWR += duckHugDir;
				duckRotWL += duckHugDir;
				duckHugAnimPoint++;
			}
		}

			//Death
				//Idle Animation
		if(deathAnimState == 0) {
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

				//Hug Animation
		if (deathAnimState == 1) {
			if(deathHugAnimPoint < deathHugMag){
				deathRotAL += deathHugDir;
				deathRotAR += deathHugDir/2;
				deathRotN -= deathHugDir/10;
				deathHugAnimPoint++;
				deathPinX--;
			}
		}

			//Tulips
				//Idle Animation
		if(tulipAnimState == 0) {
			if (tulipIdleAnimPoint == tulipIdleMag || tulipIdleAnimPoint == 0) {
				tulipIdleDir *= -1;
			}
			tulipRot = -accelerationZ;

			if (tulipIdleDir == 1) {
				tulipIdleAnimPoint++;
			}
			else if (tulipIdleDir == -1) {
				tulipIdleAnimPoint--;
			}
		}
	}

	//Snow Scene
	else if (snowScene) {
		background(135,100,100);

		//Paralax Layers
			//X Offset
		var plxLayerX_01 = accelerationX/layer_01_xOffset*10;
		var plxLayerX_02 = accelerationX/layer_02_xOffset*10;
		var plxLayerX_03 = accelerationX/layer_03_xOffset*10;
		var plxLayerX_04 = accelerationX/layer_04_xOffset*10;
			//Y Offset
		var plxLayerY_01 = accelerationY/layer_01_yOffset*10;
		var plxLayerY_03 = accelerationY/layer_03_yOffset*10;

		image(SnowFallImg_01, canvasCenterX - plxLayerX_04-250, canvasCenterY + plxLayerY_01-250, windowWidth + 500, windowHeight + 500); //Snow Layer 1 (Far)
		image(death_SittingImg_02,canvasCenterX - plxLayerX_01,windowHeight-250); //Death
		image(duck_DeadImg,canvasCenterX - plxLayerX_02,windowHeight-100, 800,200); //Duck
		image(SnowFall_MotionBlurImg, canvasCenterX - plxLayerX_03-250, canvasCenterY + plxLayerY_03-250, windowWidth + 500, windowHeight + 500); //Snow_MotionBlur (Close)
		image(textSnowScene_01, 300 - plxLayerX_01,125,500,75);
	}

	//Credit Scene
	else if (creditScene) {
		image(death_SittingImg_01, windowWidth - 270, windowHeight - 270);
		image(textCredits, canvasCenterX,canvasCenterY);
	}
}

function touchStarted() {
	//Title Page ======================================================================================
	if (titlePage) {
		if(touchX < canvasCenterX-10 && touchX > canvasCenterX-190 && touchY < 245 && touchY > 215) {
			titlePage = false;
			windScene = false;
			snowScene = false;
			treeScene = false;
			creditScene = false;
			tutorial = true;
			resetAnimations();
		}
		else if(touchX < canvasCenterX+190 && touchX > canvasCenterX+10 && touchY < 245 && touchY > 215) {
			titlePage = false;
			windScene = false;
			snowScene = false;
			tutorial = false;
			creditScene = false;
			treeScene = true;
			resetAnimations();
		}
	}

	//Tutorial ========================================================================================
	else if (tutorial) {
		windScene = false;
		snowScene = false;
		treeScene = false;
		tutorial = false;
		creditScene = false;
		titlePage = true;
		resetAnimations();
	}

	//Tree Scene ======================================================================================
	else if (treeScene) {
		if (touchX > pageTurnRightX) {
			treeScene = false;
			snowScene = false;
			titlePage = false;
			tutorial = false;
			creditScene = false;
			windScene = true;
			resetAnimations();
		}
		else if (touchX < pageTurnLeftX) {
			//Go back to title page
			treeScene = false;
			windScene = false;
			snowScene = false;
			tutorial = false;
			creditScene = false;
			titlePage = true;
			resetAnimations();
		}
	}
	//Wind Scene ======================================================================================
	else if (windScene)	{
		if (touchX > pageTurnRightX) {
			treeScene = false;
			windScene = false;
			titlePage = false;
			tutorial = false;
			creditScene = false;
			snowScene = true;
			resetAnimations();
		}
		else if (touchX < pageTurnLeftX) {
			windScene = false;
			snowScene = false;
			titlePage = false;
			tutorial = false;
			creditScene = false;
			treeScene = true;
			resetAnimations();
		}
		else if (touchX < canvasCenterX+300 && touchX > canvasCenterX-300 && touchY > canvasCenterY-300) {
			duckAnimState = 1;	//Hug
			deathAnimState = 1;	//Hug
		}
	}
	//Snow Scene ======================================================================================
	else if (snowScene)	{
		if (touchX > pageTurnRightX) {
			//go to credits
			snowScene = false;
			treeScene = false;
			windScene = false;
			titlePage = false;
			tutorial = false;
			creditScene = true;
			resetAnimations();
		}
		else if (touchX < pageTurnLeftX) {
			snowScene = false;
			treeScene = false;
			titlePage = false;
			tutorial = false;
			creditScene = false;
			windScene = true;
			resetAnimations();
		}
	}
	//Credits =========================================================================================
	else if (creditScene) {
		if (touchX > pageTurnRightX) {
			treeScene = false;
			titlePage = false;
			tutorial = false;
			creditScene = false;
			windScene = false;
			snowScene = true;
			resetAnimations();
		}
	}
}

function resetAnimations() {
	duckAnimState = 0;
	deathAnimState = 0;
	duckHugAnimPoint = 0;
	deathHugAnimPoint = 0;

	duckPinXw = canvasCenterX-75;
	duckPinYw = windowHeight-95;
	deathPinX = canvasCenterX+75;
	deathPinY = windowHeight-225;

	//Duck
		//Wind Scene
	duckRotWR = 50;	//Right Wing Rotation
	duckRotWL = 50;	//Left Wing Rotation
	duckRotN = 0;	//Neck Rotation
	duckRotH = 0;	//Head Rotation
	duckRotFR = 0;	//Right Foot Rotation
	duckRotFL = 0;	//Left Foot Rotation
	duckRot = 0;	//Torso Rotation
		//Tree Scene
	duckNeckRot = -10;
	duckHeadRot = 10;
	//Death
		//Wind Scene
	deathRotAR = -10;	//Right Arm Rotation
	deathRotAL = -15;	//Left Arm Rotation
	deathRotN = 0;		//Neck Rotation
	deathRotHL = 0;		//Left Hand Rotation
	deathRotHR = 0;		//Right Hand Rotation
	deathRotFL = 0;		//Left Foot Rotation
	deathRotFR = 0;		//Right Foot Rotation
	deathRot = 0;		//Torso Rotation
		//Tree Scene
	deathHeadRot = 0;	//Head Rotation

	//Environment
	tulipRot = 0;	//Tulip Rotation

}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
	canvasCenterX = windowWidth/2;
	canvasCenterY = windowHeight/2;
}