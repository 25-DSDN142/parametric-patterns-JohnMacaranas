//your parameter variables go here!
let topLeft = 'Lily' //define elements (Cat, Capybara or Lily)
let topRight = ''
let botLeft = ''
let botRight = 'Lily'
let centreIcon = ''
let iconSize = 75; //icon size (25-75 recommended) DOES NOT WORK ON LILY
let catColour = 50; //cat fur colour (black and white values only)
let waterFill = 255; //top water fill (black and white values only) will affect tint of waterLayers
let waterLayer = 3; // 0 - 3
let waterDepth = 75; //distance between waterLayer
let R = 68; //Main background + waterLayers RGB values
let G = 134;
let B = 154;

//unchangable variables
let centre = 100;
let quart = 200/4;

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(R, G, B);
}

function my_symbol(){ // do not rename this function. Treat this similarly to a Draw function

//waterLayer function
if (waterLayer == '3'){
  push();
    translate(waterDepth*2.5, waterDepth+waterDepth*3);
    tint(R+R*0.2, G+G*0.2, B+B*0.2);
    Bubbles();
  pop();

  push();
    translate(waterDepth*2, waterDepth);
    tint(R+R*0.4, G+G*0.4, B+B*0.2);
    Bubbles();
  pop();

  push();
    Bubbles();
  pop();

} else if (waterLayer == '2'){
  push();
    translate(waterDepth*2, waterDepth);
    tint(R+R*0.4, G+G*0.4, B+B*0.2);
    Bubbles();
  pop();

  push();
    Bubbles();
  pop();

} else if (waterLayer == '1'){
  push();
    Bubbles();
  pop();

} else {
}

//element functions
//top left
push();
  translate(quart, quart)
  rotate(10);
  if (topLeft === 'Cat'){
      Cat();
  } else if (topLeft === 'Capybara'){
      translate(iconSize, 0);
      Capybara();
  } else if (topLeft === 'Lily'){
      translate(-100, -100);
      scale(0.5);
      push();
        translate(centre, centre);
        Lily();
      pop();
  } else {
  }
pop();

//top right
push();
  translate(quart*3, quart)
  rotate(-40)
  if (topRight === 'Cat'){
     Cat();
  } else if (topRight === 'Capybara'){
      translate(iconSize/2, 0);
      Capybara();
  } else if (topRight === 'Lily'){
      translate(-100, -100);
      scale(0.5);
      push();
        translate(quart*2, quart*2);
        Lily();
      pop();
  } else {
  }
pop();

//bot left
push();
  translate(quart+quart/2, quart*3)
  rotate(50);
  if (botLeft === 'Cat'){
      translate(0, quart/3);
      Cat();
  } else if (botLeft === 'Capybara'){
      translate(iconSize/4, 0);
      Capybara();
  } else if (botLeft === 'Lily'){
      translate(-100, -100);
      scale(0.5);
      push();
        translate(quart*4, quart*1.5);
        rotate(60);
        Lily();
      pop();
  } else {
  }
pop();

//bot right
push();
  translate(quart*3, quart*3)
  rotate(30)
  if (botRight === 'Cat'){
      Cat();
  } else if (botRight === 'Capybara'){
      translate(quart/2, 0);
      Capybara();
  } else if (botRight === 'Lily'){
      translate(-100, -100);
      scale(0.5);
      push();
        translate(quart*6, quart*6);
        rotate(180);
        Lily();
      pop();
  } else {
  }
pop();

//central icon
if (centreIcon === 'Cat'){
      translate(centre, centre);
      Cat();
  } else if (centreIcon === 'Capybara'){
      translate(iconSize/2, 0);
      Capybara();
  } else if (centreIcon === 'Lily'){
      Lily();
  } else {
  }

}
 
//main draw functions
function Bubbles(){
let bub;

bub = createGraphics(200, 200);

translate(100,100);

bub.pixelDensity(4);

bub.push();
bub.strokeWeight(0);
bub.fill(waterFill);
bub.rect(0, 0, 200, 200);
bub.pop();

bub.erase();
  bub.beginShape();
  bub.vertex(-46, -5);
  bub.bezierVertex(-41, -38, -14, -43, 4, -40);
  bub.bezierVertex(22, -37, 63, -12, 66, 20);
  bub.bezierVertex(70, 53, 30, 88, 0, 81);
  bub.bezierVertex(-30, 74, -30, 66, -29, 61);
  bub.bezierVertex(-28, 57, -12, 42, -7, 29);
  bub.bezierVertex(-2, 16, 1, 10, -9, 2);
  bub.bezierVertex(-28, -4, -38, 10, -46, -5);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(69, 75);
  bub.vertex(69, 75);
  bub.bezierVertex(79, 62, 105, 43, 126, 40);
  bub.bezierVertex(79, 62, 105, 43, 126, 40);
  bub.bezierVertex(146, 37, 154, 42, 163, 56);
  bub.bezierVertex(146, 37, 154, 42, 163, 56);
  bub.bezierVertex(167, 68, 160, 74, 166, 80);
  bub.bezierVertex(167, 68, 160, 74, 166, 80);
  bub.bezierVertex(173, 83, 175, 82, 180, 88);
  bub.bezierVertex(173, 83, 175, 82, 180, 88);
  bub.bezierVertex(185, 93, 192, 128, 179, 146);
  bub.bezierVertex(185, 93, 192, 128, 179, 146);
  bub.bezierVertex(163, 162, 158, 140, 150, 181);
  bub.bezierVertex(163, 162, 158, 140, 150, 181);
  bub.bezierVertex(135, 215, 103, 187, 113, 163);
  bub.bezierVertex(135, 215, 103, 187, 113, 163);
  bub.bezierVertex(118, 152, 129, 128, 120, 106);
  bub.bezierVertex(118, 152, 129, 128, 120, 106);
  bub.bezierVertex(111, 84, 96, 80, 87, 82);
  bub.bezierVertex(111, 84, 96, 80, 87, 82);
  bub.bezierVertex(77, 84, 59, 88, 69, 75);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(66, 59);
  bub.bezierVertex(78, 32, 75, 20, 74, 13);
  bub.bezierVertex(74, 7, 73, -3, 91, -8);
  bub.bezierVertex(109, -13, 120, -1, 122, 3);
  bub.bezierVertex(125, 6, 115, 9, 115, 15);
  bub.bezierVertex(115, 21, 114, 23, 118, 26);
  bub.bezierVertex(121, 29, 122, 31, 109, 35);
  bub.bezierVertex(96, 40, 85, 49, 80, 55);
  bub.bezierVertex(75, 61, 55, 84, 66, 59);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(122, 17);
  bub.bezierVertex(126, 4, 135, 5, 141, 5);
  bub.bezierVertex(147, 5, 150, 5, 154, 8);
  bub.bezierVertex(157, 11, 173, 9, 181, 11);
  bub.bezierVertex(194, 16, 191, 19, 185, 26);
  bub.bezierVertex(179, 33, 174, 39, 172, 43);
  bub.bezierVertex(170, 47, 165, 44, 163, 38);
  bub.bezierVertex(161, 31, 148, 28, 142, 28);
  bub.bezierVertex(136, 28, 118, 31, 122, 17);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(4, 92);
  bub.bezierVertex(13, 90, 29, 88, 36, 84);
  bub.bezierVertex(43, 80, 47, 81, 48, 85);
  bub.bezierVertex(49, 89, 51, 94, 73, 93);
  bub.bezierVertex(95, 92, 120, 101, 119, 131);
  bub.bezierVertex(118, 149, 99, 165, 112, 186);
  bub.bezierVertex(91, 180, 74, 192, 72, 206);
  bub.bezierVertex(52, 163, 25, 151, 6, 152);
  bub.bezierVertex(-6, 152, -6, 131, -7, 122);
  bub.bezierVertex(-6, 110, -5, 95, 4, 92);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(-47, 193);
  bub.bezierVertex(-41, 161, -14, 156, 4, 159);
  bub.bezierVertex(22, 162, 63, 186, 66, 219);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(153, -6);
  bub.bezierVertex(162, 10, 172, -5, 191, 2);
  bub.bezierVertex(201, 10, 199, 17, 193, 29);
  bub.bezierVertex(188, 42, 172, 56, 171, 61);
  bub.bezierVertex(170, 65, 169, 74, 200, 81);
  bub.vertex(200, 0);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(205, 92);
  bub.bezierVertex(195, 95, 194, 111, 193, 122);
  bub.bezierVertex(194, 131, 194, 151, 206, 152);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(204, 160);
  bub.bezierVertex(186, 157, 160, 162, 153, 194);
  bub.bezierVertex(162, 210, 172, 195, 191, 202);
  bub.vertex(200, 200);
  bub.endShape(CLOSE);

  bub.beginShape();
  bub.vertex(73, 214);
  bub.bezierVertex(73, 208, 72, 198, 91, 193);
  bub.bezierVertex(109, 188, 119, 201, 122, 204);
  bub.endShape(CLOSE);


  bub.ellipse(58, 80, 11, 13);
  bub.ellipse(50, 73, 4, 4);
  bub.ellipse(191, 90, 10, 10);
  bub.ellipse(185, 85, 5, 5);
  bub.ellipse(-1, 89, 3, 3);
  bub.ellipse(148, 0, 7, 7);
  bub.ellipse(148, 199, 7, 7);
  bub.ellipse(199, 89, 3, 3);
  bub.ellipse(190, 150, 10, 7);
  bub.ellipse(189, 143, 5, 4);
bub.noErase();

image(bub, 0, 0);
}

function Cat(){
let eyeX = centre - iconSize*0.25;
let pupil = iconSize*0.4;
let LcatEdge = centre-iconSize/2
let RcatEdge = centre+iconSize/2

scale(0.9);
translate(-100, -100);

fill(catColour); //head
strokeWeight(0);
ellipse(centre, centre, iconSize, iconSize-iconSize/4); 

beginShape() //left ear
  vertex(LcatEdge+LcatEdge*0.01, centre);
  vertex(LcatEdge, centre-iconSize/2);
  vertex(centre, centre*0.9);
endShape(CLOSE);

beginShape() //right ear
  vertex(RcatEdge, centre);
  vertex(RcatEdge, centre-iconSize/2);
  vertex(centre, centre*0.9);
endShape(CLOSE);

fill(218, 194, 50); //yellow eye colour
push(); //left eye
  translate(eyeX, centre);
  rotate(135);
  ellipse(0, 0, iconSize*0.25, iconSize*0.4);
pop();

push(); //right eye
  translate(eyeX + iconSize/2, centre);
  rotate(45);
  ellipse(0, 0, iconSize/4, iconSize*0.4);
pop();


fill(50); //pupil colour
ellipse(eyeX, centre, pupil/4, pupil*0.75); //left pupil
push(); //right pupil
  translate(iconSize/2, 0);
  ellipse(eyeX, centre, pupil/4, pupil*0.75);
pop();
}

function Capybara(){
translate(-120, -100);
  fill(126, 71, 35); //capybara brown
  strokeWeight(0);
  
  beginShape(); //ear
    vertex(centre+iconSize*0.5, centre-iconSize*0.3);
    vertex(centre- iconSize*0.3, centre-iconSize*0.3);
    vertex(centre+iconSize*0.4, centre);
  endShape(CLOSE);

  push(); //rear ear
   fill(100, 60, 70);
   beginShape(); 
     vertex(centre+iconSize*0.2, centre-iconSize*0.5);
     vertex(centre- iconSize*0.2, centre-iconSize*0.3);
     vertex(centre+iconSize*0.2, centre);
   endShape(CLOSE);
  pop();
  
  ellipse(centre, centre+iconSize*0.1, iconSize, iconSize); //main head

  beginShape(); //snout
    vertex(centre, centre+iconSize/2);
    vertex(centre-iconSize*0.5, centre+iconSize/2);
    vertex(centre-iconSize*0.7, centre+iconSize/2.2);
    vertex(centre-iconSize*0.95, centre+iconSize/3);
    vertex(centre-iconSize, centre);
    vertex(centre-iconSize*0.9, centre-iconSize*0.07);
    vertex(centre-iconSize*0.5, centre-iconSize*0.27);
    vertex(centre-iconSize*0.2, centre-iconSize*0.36);
  endShape(CLOSE);

  beginShape(); //neck
    vertex(centre+iconSize*0.49, centre);
    vertex(centre+iconSize*0.6, centre+iconSize*0.6);
    vertex(centre, centre+iconSize*0.6);
  endShape(CLOSE);

  fill(50); //eye
  ellipse(centre-iconSize*0.3, centre-iconSize*0.05, iconSize/5, iconSize/8);

  beginShape(); //nose
    vertex(centre-iconSize*1.02, centre+iconSize*0.03);
    vertex(centre-iconSize*0.9, centre-iconSize*0.01);
    vertex(centre-iconSize*0.89, centre+iconSize*0.08);
    vertex(centre-iconSize*0.93, centre+iconSize*0.15);
    vertex(centre-iconSize*0.96, centre+iconSize*0.25);
    vertex(centre-iconSize*1.04, centre+iconSize*0.08);
  endShape(CLOSE);

  fill(250); //highlight
  ellipse(centre-iconSize*0.25, centre-iconSize*0.05, iconSize/24, iconSize/32);


}

function Lily(){
strokeWeight();
fill(109, 205, 128); //lilypad green

beginShape(); //big lily
  vertex(71, 114);
  bezierVertex(65, 58, 118, 45, 143, 66);
  vertex(122, 110);
  vertex(156, 100);
  bezierVertex(169, 126, 144, 147, 122, 148);
  bezierVertex(100, 149, 74, 159, 71, 114);
endShape(CLOSE);

beginShape(); //medium lily
  vertex(21, 109);
  bezierVertex(25, 85, 37, 80, 47, 90);
  bezierVertex(57, 100, 63, 115, 51, 125);
  bezierVertex(39, 134, 32, 133, 25, 125);
  bezierVertex(32, 123, 35, 119, 35, 114);
  bezierVertex(30, 120, 20, 132, 21, 109);
endShape();

ellipse(60, 72, 16, 19); //small lily
}

