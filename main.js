function preload() { 
}

function setup() {
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video,250,150,200,200);
    fill("red");
    stroke("red");
    circle(50,50,80);

    fill("green");
    stroke("green");
    rect(90,40,460,20)

   
    fill("red");
    stroke("red");
    circle(590,50,80);

    fill("green");
    stroke("green");
    rect(90,430,460,20)
  
    fill("red");
    stroke("red");
    circle(50,430,80);

    fill("green");
    stroke("green");
    rect(40,90,20,300)

    fill("red");
    stroke("red");
    circle(590,430,80);

    fill("green");
    stroke("green");
    rect(590,90,20,300)
}

function take_snapshot() {
    save('student_name.png');
}