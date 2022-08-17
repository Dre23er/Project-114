function preload() {

}

function setup() {
    canvas =  createCanvas (400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

}

function modelLoaded() {
}

function draw() {
Image(video,0,0,400,400);
}

function take_snapshot() {
 
}

