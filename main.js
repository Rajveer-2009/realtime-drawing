noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
diffrence = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(20, 75);
    canvas = createCanvas(500, 500);
    canvas.position(560, 75);
    poseNet = ml5.poseNet(video, modleLoaded);
    poseNet.on('pose', gotPoses);
}

function modleLoaded() {
    console.log("PoseNet is initliazied");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X: " + noseX + "Nose Y:" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("left Wrist X: " + leftWristX + "right Wrist X:" + rightWristX);
        diffrence = Math.floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#40C9FF');
    fill("#ff0000");
    stroke("black");
    square(noseX, noseY, diffrence);
    document.getElementById("size").innerHTML = "The Width and Height of the Square is: " + diffrence + "px";
}
