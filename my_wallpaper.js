//your parameter variables go here!
let pCols = 8;
let pRows = 6;

let tilesW = 200/ pCols;
let tilesH = 200/ pRows;

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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol(){ // do not rename this function. Treat this similarly to a Draw function
var rows = 0
while (rows < pRows){
  if (rows % 1 == 0){
    rotate(180);
    translate(-tilesW*pCols, -tilesH*pRows);
  } else if (rows % 4 == 0){
    fill('#32a852');
  
  } else {
    fill(250);
    translate(tilesW*cols, tilesH*rows);
  }
  var cols = 0
  while (cols < pCols){
    if (cols % 1 == 0){
      rotate(180);
      translate(-tilesW*pCols, -tilesH*pRows);

    } else {
      rotate(-180);
    }
    push();
    translate(cols*tilesW, rows*tilesH);
    supes();
    pop();
    cols = cols + 1;
  }
  rows = rows + 1;
  }
   
}

function supes(){
  beginShape();
  vertex(0,tilesH/4);
  vertex(tilesW/4, 0);
  vertex(tilesW - tilesW/4, 0);
  vertex(tilesW, tilesH/4);
  vertex(tilesW/2, tilesH);
  endShape(CLOSE);

}
