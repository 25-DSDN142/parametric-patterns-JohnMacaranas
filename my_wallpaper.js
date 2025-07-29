//your parameter variables go here!
let topLeft = 'Lily' //define top elements (Cat, Capybara, Monkey, Lily, Boat)
let topRight = 'Capybara'
let botLeft = 'Cat'
let botRight = 'Lily'
let iconSize = 50; //icon size 25-75
let iconTilt = 20; //tilt in degrees
let lilyRotation = 190;



let pupilColour = 50;
let catColour = 50;
let centre = 100;
let quart = 200/4



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(25, 59, 92); //light honeydew green colour
}

function my_symbol(){ // do not rename this function. Treat this similarly to a Draw function

  push();
  sketch1(); //background pattern
  pop();
  
  push();
  translate(quart, quart)
  rotate(iconTilt);
  if(topLeft === 'Cat'){
  Cat();
  } else if (topLeft === 'Capybara'){
    Capybara();
  } else if (topLeft === 'Lily'){
    Lily();
  } else if (topLeft === 'Monkey'){ 
    fill(187, 191, 182);
    ellipse(0, 0, 50, 50);
  } else if (topLeft === 'Boat'){
    fill(64, 48, 39);
    rect(0, 0, 50, 50);
  } else {
  }
  pop();

  push();
  translate(quart*3, quart)
  rotate(-iconTilt);
  if(topRight === 'Cat'){
  Cat();
  } else if (topRight === 'Capybara'){
    Capybara();
  } else if (topRight === 'Lily'){
    Lily();

  } else if (topRight === 'Monkey'){ 
    fill(187, 191, 182);
    ellipse(0, 0, 50, 50);
  } else if (topRight === 'Boat'){
    fill(64, 48, 39);
    rect(0, 0, 50, 50);
  } else {
  }
  pop();

  push();
  translate(quart+quart/2, quart*3)
  rotate(iconTilt);
  if(botLeft === 'Cat'){
  Cat();
  } else if (botLeft === 'Capybara'){
    Capybara();
  } else if (botLeft === 'Lily'){
    Lily();

  } else if (botLeft === 'Monkey'){ 
    fill(187, 191, 182);
    ellipse(0, 0, 50, 50);
  } else if (botLeft === 'Boat'){
    fill(64, 48, 39);
    rect(0, 0, 50, 50);
  } else {
  }
  pop();

  push();
  translate(quart*3+quart/2, quart*3)
  rotate(-iconTilt);
  if(botRight === 'Cat'){
  Cat();
  } else if (botRight === 'Capybara'){
    Capybara();
  } else if (botRight === 'Lily'){
    Lily();

  } else if (botRight === 'Monkey'){ 
    fill(187, 191, 182);
    ellipse(0, 0, 50, 50);
  } else if (botRight === 'Boat'){
    fill(64, 48, 39);
    rect(0, 0, 50, 50);
  } else {
  }
  pop();


}
  

function Cat(){
scale(0.85);
translate(-100, -100);
let eyeX = centre - iconSize*0.25;
let pupil = iconSize*0.4;
let LcatEdge = centre-iconSize/2
let RcatEdge = centre+iconSize/2
fill(catColour);
strokeWeight(0);
ellipse(centre, centre, iconSize, iconSize-iconSize/4);

beginShape()
vertex(LcatEdge+LcatEdge*0.01, centre);
vertex(LcatEdge, centre-iconSize/2);
vertex(centre, centre*0.9);
endShape(CLOSE);

beginShape()
vertex(RcatEdge, centre);
vertex(RcatEdge, centre-iconSize/2);
vertex(centre, centre*0.9);
endShape(CLOSE);

fill(218, 194, 50);
push();
translate(eyeX, centre);
rotate(135);
ellipse(0, 0, iconSize*0.25, iconSize*0.4);
pop();

push();
translate(eyeX + iconSize/2, centre);
rotate(45);
ellipse(0, 0, iconSize/4, iconSize*0.4);
pop();


fill(pupilColour);
ellipse(eyeX, centre, pupil/4, pupil*0.75);
push();
translate(iconSize/2, 0);
ellipse(eyeX, centre, pupil/4, pupil*0.75);
pop();
}

function Capybara(){
  translate(-80, -100);
  fill(115, 67, 40); //capybara brown
  strokeWeight(0);
  
  beginShape(); //ear
  vertex(centre+iconSize/2, centre-iconSize*0.65);
  vertex(centre- iconSize*0.9, centre+iconSize/4);
  vertex(centre+iconSize*0.4, centre);
  endShape(CLOSE);

  push(); //inner ear
  fill(247, 200, 173); //inner ear colour
  scale(0.5);
  translate(centre+iconSize*0.4, centre-iconSize/2)
  beginShape();
  vertex(centre+iconSize/2, centre-iconSize*0.65);
  vertex(centre- iconSize*0.9, centre+iconSize/4);
  vertex(centre+iconSize*0.4, centre);
  endShape(CLOSE);
  pop();
  
  ellipse(centre, centre, iconSize, iconSize); //main head

  beginShape(); //snout
  vertex(centre, centre+iconSize/2);
  vertex(centre-iconSize*0.9, centre+iconSize/2);
  vertex(centre-iconSize, centre);
  vertex(centre-iconSize*0.2, centre-iconSize*0.45);
  endShape(CLOSE);

  fill(pupilColour); //eye
  ellipse(centre-iconSize*0.3, centre-iconSize*0.05, iconSize/5, iconSize/6);

  beginShape(); //nose
  vertex(centre-iconSize, centre);
  vertex(centre-iconSize*0.8, centre-iconSize*0.11);
  vertex(centre-iconSize*0.95, centre+iconSize*0.25);
  endShape(CLOSE);

  fill(250); //highlight
  ellipse(centre-iconSize*0.25, centre-iconSize*0.05, iconSize/16, iconSize/16);


}

function Lily(){
  rotate(lilyRotation);
  lily = createGraphics(200, 200);
  
  lily.pixelDensity(5);

  lily.fill(32, 107, 40);
  lily.strokeWeight(0);
  lily.ellipse(centre, centre, iconSize*1.1, iconSize*1.1);
  
  lily.fill(92, 173, 62);
  lily.ellipse(centre, centre, iconSize, iconSize);
  
  lily.erase();
  lily.triangle(centre, centre+iconSize/4, centre, centre+iconSize, centre+iconSize*0.1, centre+iconSize*0.75);
  lily.triangle(centre-iconSize*0.1, centre-iconSize/3, centre+iconSize*0.02, centre-iconSize, centre-iconSize*0.8, centre-iconSize*0.75);
  lily.beginShape();
  lily.vertex(centre, centre+iconSize*0.02);
  // lily.bezierVertex(centre, centre+iconSize*2, centre-iconSize*1, centre, centre-iconSize*9, centre-iconSize*0.5);
  lily.endShape(CLOSE)
  lily.noErase();
 
    image(lily, 0, 0);

}

function bubbles(){

  fill(250);
  strokeWeight(0);
  
  beginShape();
  vertex(10, 50);
  bezierVertex(10, 10, 20, 10, 50, 10);
  bezierVertex(80, 10, 60, 40, 50, 50);
  bezierVertex(30, 70, 10, 60, 10, 50);
  bezierVertex()
  endShape(CLOSE);
  
  beginShape();
  vertex(80, 20);
  bezierVertex(90, 10, 110, 10, 120, 40);
  bezierVertex(120, 60, 160, 60, 170, 80);
  bezierVertex(190, 130, 40, 90, 70, 40);
  endShape(CLOSE);
  
  beginShape();
  vertex(40, 80);
  bezierVertex(50, 60, 60, 70, 60, 70);
  bezierVertex(70, 80, 70, 90, 70, 90);
  bezierVertex(70, 120, 30, 90, 40, 80);
  endShape(CLOSE);
  
  ellipse(60, 60, 5, 5);
  ellipse(30, 75, 10, 10);
}

function sketch1(){
let pCols = 8; //number of circles in a row
let thickness = 1; //line thickness
let numLines = 3; //number of inner lines from 1-3
let corners = false; //circle or square
let R = 60; //rgb colour vaules
let G = 189;
let B = 230;


let tiles = 200/ pCols;

  var rows = 0
  while (rows < pCols*2){
    if(rows % 2 == 0){
      fill(R, G, B);
      translate(-tiles/2, -tiles/2);
    } else{
      fill(R, G, B);
      translate(tiles/2, -tiles/2);
    }
    var cols = 0
    while (cols < pCols){
      push();
      // fill(R, G, B);
      stroke(R-50, G-50, B-50);
      strokeWeight (thickness);
      translate(tiles/2, tiles/2);
      if(corners === false){
        if(numLines === 3){
          ellipse(cols*tiles, rows*tiles, tiles, tiles);
          ellipse(cols*tiles, rows*tiles, tiles*0.75, tiles*0.75);
          ellipse(cols*tiles, rows*tiles, tiles/2, tiles/2);
      } else if(numLines === 2){
          ellipse(cols*tiles, rows*tiles, tiles, tiles);
          ellipse(cols*tiles, rows*tiles, tiles/2, tiles/2);
      } else {  
          ellipse(cols*tiles, rows*tiles, tiles, tiles);
      }
    } else {
      rectMode(CENTER);
      if(numLines === 3){
        rect(cols*tiles, rows*tiles, tiles, tiles);
        rect(cols*tiles, rows*tiles, tiles*0.75, tiles*0.75);
        rect(cols*tiles, rows*tiles, tiles/2, tiles/2);
      } else if (numLines === 2){
        rect(cols*tiles, rows*tiles, tiles, tiles);
        rect(cols*tiles, rows*tiles, tiles/2, tiles/2);
      } else {
        rect(cols*tiles, rows*tiles, tiles, tiles);
      }
    }
      pop();

      cols = cols + 1;

    }
    rows = rows + 1;
  }
}
  