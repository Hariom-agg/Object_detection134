
 video = "";
  ses = "";
  object = [];


function preload()
{
}


function setup()
{
   canvas = createCanvas(380,380);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   video.size(380,380);
   objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
   document.getElementById("status").innerHTML = "Status = Detecting Objects";

}

function modelLoaded()
{
   console.log("MODELLOADED!")
   ses = "true";
   
}

function gotResults(error,results)
{
    if(error)
    {
       console.log(error);
    }
       console.log(results);
       object = results;
}

function draw()
{
  image(video , 0, 0, 380 , 380);
 
  if(ses != "")
  {
     for( i= 0; i < object.length; i++)
     {
        r = random(255);
        g = random(255);
        b = random(255);
      objectDetector.detect(video , gotResults);
         document.getElementById("status").innerHTML = "Status : Object Detected";
         document.getElementById("Number_objects").innerHTML = "Number of objects Objected:"+ object.length;
         fill(r,g,b);
         textSize(20);
         text(object[i].label ,object[i].x + 15 , object[i].y + 15);
         noFill();
         stroke(r,g,b);
         rect(object[i].x , object[i].y , object[i].width , object[i].height);

     }
  }

  
}

