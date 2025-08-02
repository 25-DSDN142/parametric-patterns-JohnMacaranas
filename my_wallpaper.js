//your parameter variables go here!
let topLeft = '' //define top elements (Cat, Capybara, Monkey, Lily, Boat)
let topRight = ''
let botLeft = ''
let botRight = ''
let iconSize = 25; //icon size 25-75
let iconTilt = 20; //tilt in degrees
let lilyRotation = 190;
let waterLayer = 3; // 1 - 3
// let waterDepth = 10 //distance between waterLayer



let pupilColour = 50;
let catColour = 50;
let centre = 100;
let quart = 200/4;

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(68, 134, 158); //light honeydew green colour
}

function my_symbol(){ // do not rename this function. Treat this similarly to a Draw function




if(waterLayer == '3'){
push();
translate(75, 15);
Bubbles3();
pop();

push();
translate(25, 10);
Bubbles2();

pop();
push();
Bubbles1();
pop();

} else if(waterLayer == '2'){
push();
translate(25, 10);
Bubbles2();

pop();
push();
Bubbles1();
pop();

} else {

push();
Bubbles1();
pop();
}

  
  
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
  
function Bubbles1(){
let bub;

bub = createGraphics(200, 200);

translate(100,100);

bub.pixelDensity(4);

bub.push();
bub.strokeWeight(0);
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

noErase();

image(bub, 0, 0);
}

function Bubbles2(){
let bub;

bub = createGraphics(200, 200);

translate(100,100);

bub.pixelDensity(4);

bub.push();
bub.fill(95, 166, 180);
bub.strokeWeight(0);
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

noErase();

image(bub, 0, 0);
}

function Bubbles3(){
let bub;

bub = createGraphics(200, 200);

translate(100,100);

bub.pixelDensity(4);

bub.push();
bub.fill(80, 150, 164);
bub.strokeWeight(0);
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

beginShape();
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

noErase();

image(bub, 0, 0);
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
  translate(25, 0);
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
  