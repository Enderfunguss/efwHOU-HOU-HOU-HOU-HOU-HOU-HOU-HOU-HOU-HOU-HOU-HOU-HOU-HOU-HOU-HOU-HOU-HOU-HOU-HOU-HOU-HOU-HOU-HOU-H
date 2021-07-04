noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(700,100);
    
    canvas = createCanvas(500,450);
    canvas.position(700,550);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('posenet good!');
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        rightWristX = result[0].pose.rightWrist.x;
        leftWristX = result[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log('difference = ' , difference);
        console.log('noseX = ' + noseX + ' noseY = ' + noseY);
    }
}

function draw(){
    background('#0000FF');
    textSize(difference);
    text('me da best',noseX,noseY);
    fill('red');
    document.getElementById('size').innerHTML = 'font size : ' + difference + 'px';
}