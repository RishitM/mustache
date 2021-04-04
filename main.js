var noseX=0
var noseY=0
function preload(){
mustache=loadImage("https://i.postimg.cc/3R4DFqrR/istockphoto-485318064-612x612-removebg-preview.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    console.log("version of ml5= ", ml5.version);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(mustache,noseX,noseY,80,80);
}
function takePic(){
save("Now you are a clown");
};
function modelLoaded(){
    console.log("Posenet Configured!!!!!");
};
function gotPoses(results){
    if (results.length>0){
console.log(results);}
noseX=results[0].pose.nose.x;
noseX=noseX-35;
noseY=results[0].pose.nose.y;
noseY=noseY-10;
console.log(noseX," is the x of the nose and, ",noseY,"is the y of the nose")
}