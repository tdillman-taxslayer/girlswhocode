movie = video();
movie.source = "anchor_3.mov";
//controls speed of video, anything above one makes it speed up
movie.playbackRate = 1;

//adds graphic (or text) into video
var inset = text("Create the");
var inset2 = text("things you");
var inset3 = text("⋆wish⋆");
var inset4 = text("existed");
//moves graphic horizontally
inset.size = 20;
inset.x = 350;
inset.y = 50;
inset2.size = inset.size;
inset2.x = 350;
inset2.y = inset.y+25;
inset3.size = inset.size;
inset3.x = 366;
inset3.y = inset2.y+25;
inset4.size = inset2.size;
inset4.x = ;


//changes graphic opacity 
inset.opacity = 1;
//^change text color^

//adds text into the video
var my_text = text("hellooooo");
my_text.x = 35;
my_text.y = 100;
my_text.color = "pink"; 
my_text.size = 17;
my_text.font = "bree serif";
