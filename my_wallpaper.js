//your parameter variables go here!
let pCols = 6; //number of circles in a row
let thickness = 1; //line thickness
let numLines = 3; //from 1-3
let corners = false; //circle or square
let R = 60; //rgb colour vaules
let G = 189;
let B = 250;


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
let tiles = 200/ pCols;

  var rows = 0
  while (rows < pCols*2){
    if(rows % 2 == 0){
      translate(-tiles/2, -tiles/2);
    } else{
      translate(tiles/2, -tiles/2);
    }
    var cols = 0
    while (cols < pCols){
      push();
      fill(R, G, B);
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

let Tiles = 10;
// let tilesW = 200/ Tiles;
// let tilesH = 200/ Tiles;


// for( let x = 0; x < Tiles; x ++){
//   for( let y = 0; y < Tiles; y ++){  
//      if (y < Tiles/2){
//     fill(15);
//   } else {
//     fill (255);
//     }
//      ellipse(x*tilesW, y*tilesH, tilesW, tilesH);
    

//   }
  
//   }
  