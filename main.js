function preload(){

}

function setup(){
    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);

    video = createCapture(VIDEO);
    video.hide();
    video.size(550 , 550);

    poseNet = ml5.poseNet('pose' , modelLoaded);
    poseNet.on(video , gotResults);
}

function draw(){
    background("#969A97");
}

function modelLoaded(){
    console.log("model has loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}