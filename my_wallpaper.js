//your parameter variables go here!
let bScale = 0.5


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
bubbles();
// tilesW = width/ 150
// thilesH = height/80

// var rows = 0;
// while(rows < 12){
//   var cols = 0;
//   while(cols < 12){
//     push(); 
//     translate(cols*120, rows*80);
//     scale(bScale, bScale);
//     bubbles();
//     pop();
    
//     cols = cols + 1;
//   }
//   rows = rows + 1;
// }
  
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
