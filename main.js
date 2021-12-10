function setup(){
    canvas=createCanvas(500,500)
    canvas.position(600,150)
    video=createCapture(VIDEO)
    video.position(20,20)
    video.size(550,720)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
    }
    function draw(){
    background("#4272f5")
    
    
    }
    function modelLoaded(){
        console.log("pose net is loaded")
    }
    function gotPoses(results){
    if(results.length>0)
    {console.log(results)}
    }
    