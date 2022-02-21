nose_x = 0;
nose_y = 0;
difference = 0;
right_wrist_x = 0;
left_wrist_x = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(550,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function draw() {
    document.getElementById("square_side").innerHTML = "width and height of the square will be = "+difference+"px"
    background("#a6deff");
    fill("#53cf74");
    stroke("#000000");
    square(nose_x,nose_y,difference);
}

function modelLoaded() {
    console.log("posenet model is loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("x = "+nose_x+", y = "+nose_y);
        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log(difference+" , "+right_wrist_x+" , "+left_wrist_x);
    }
}

