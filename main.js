leftWristX = 0;
rightWristX = 0;

difference = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);

    video = createCapture(VIDEO);
    video.size(550 , 550);

    poseNet = ml5.poseNet('pose' , modelLoaded);
    poseNet.on(video , gotResults);
}

function draw(){
    background("#969A97");
    fill('#7da832');
    textSize(difference);
    text("Mayank" , 50 , 100);
}

function modelLoaded(){
    console.log("model has loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);




    }
}

