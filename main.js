function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modleLoaded);
    poseNet.on('pose', gotPoses)
}

function modleLoaded() {
    console.log("PoseNet is initliazied");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background('#40C9FF');
}
