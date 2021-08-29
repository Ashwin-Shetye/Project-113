function setup(){
    canvas = createCanvas(600,450);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,200,150,200,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,70);
    circle(50,400,70);
    circle(570,50,70);
    circle(570,400,70);
    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(550,90,20,300);
}
function takeSnapshot(){
    save('student_name.png');
}