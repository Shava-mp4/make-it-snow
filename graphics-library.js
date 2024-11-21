// GRAPHICS LIBRARY

// FUNCTION LIST
// canvasSize(width, height)
// background(color)
// stroke(color)
// fill(color)
// lineWidth(width)
// font(fontSetting)
// rect(x, y, w, h, mode)
// line(x1, y1, x2, y2)
// circle(x, y, r, mode)
// triangle(x1, y1, x2, y2, x3, y3, mode)
// polygon(points, mode)
// text(message, x, y, mode)
// ellipse(x, y, xRadius, yRadius, rotation, mode)
// image(img, x, y, w, h)
// imageClip(img, xc, yc, wc, hc, x, y, w, h)

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 600;

// Type your examples from the notes below this line.

// Animation Example
requestAnimationFrame(draw);

function draw() {
   // Clears previous frame
  ctx.fillStyle = "rgb(24, 19, 46)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "rgb(169, 174, 201)";
  ctx.fillRect(0, 450, cnv.width, cnv.height);
  triangle(370, 160, 420, 350, 320, 350, "fill");

  //Main house part
  ctx.fillStyle = "rgb(71, 30, 0)";
  ctx.fillRect(0, 340, 410, 150);

  //Shadow
  ctx.fillStyle = "rgb(43, 19, 2)";
  ctx.fillRect(0, 340, 310, 70);

  ctx.fillStyle = "rgb(169, 174, 201)";
  ctx.fillRect(0, 160, 370, 190);

  //House triangle
  ctx.fillStyle = "rgb(71, 30, 0)";
  triangle(360, 170, 410, 340, 300, 350, "fill");
  ctx.fillRect(310, 340, 70, 10);

  //Door
  ctx.fillStyle = "rgb(64, 14, 27)";
  ctx.fillRect(340, 390, 40, 100);

  //Shadow
  ctx.fillStyle = "rgb(43, 19, 2)";
  ctx.fillRect(300, 340, 10, 70);

  //Triangle to fix roof
  ctx.fillStyle = "rgb(169, 174, 201)";
  triangle(360, 160, 300, 350, 230, 160, "fill");

  //Snowman
  ctx.fillStyle = "rgb(230, 231, 240)";
  circle(810, 510, 50, "fill");
  ctx.strokeStyle = "rgb(125, 54, 2)";
  lineWidth(5);
  line(780, 420, 760, 480); // left arm
  circle(810, 440, 43, "fill");
  circle(810, 380, 36, "fill");
  ctx.fillStyle = "rgb(28, 27, 31)";
  circle(815, 375, 3, "fill"); // l eye
  circle(785, 377, 3, "fill"); // r eye
  circle(798, 417, 3, "fill"); //buttons
  circle(794, 437, 3, "fill");
  circle(797, 455, 3, "fill");
  ctx.fillStyle = "rgb(214, 136, 2)";
  triangle(800, 383, 758, 385, 800, 388, "fill"); // Nose
  lineWidth(5);
  line(840, 420, 870, 430); // left arm
  line(868, 430, 875, 390);
  // snowmanArray[0];

  //Window Light
  ctx.fillStyle = "rgb(237, 180, 57, 0.2)";
  ctx.fillRect(70, 375, 160, 80);
  circle(360, 290, 25, "fill");
  ctx.fillStyle = "rgb(237, 180, 57, 0.2)";
  ctx.fillRect(60, 365, 180, 100);
  circle(360, 290, 30, "fill");

  //Windows
  ctx.fillStyle = "rgb(237, 172, 31)";
  ctx.fillRect(80, 385, 140, 60);

  circle(360, 290, 20, "fill");

  lineWidth(2);
  line(80, 415, 220, 415);
  line(150, 385, 150, 445);

  line(340, 290, 380, 290);
  line(363, 270, 363, 310);

   
  //Lamp post
  ctx.strokeStyle = "rgb(84, 88, 97)";
  lineWidth(7);
  line(700, 500, 700, 240);
  lineWidth(5);
  line(710, 240, 690, 240);
  line(718, 195, 682, 195);
  lineWidth(3);
  line(710, 242, 715, 195);
  line(690, 242, 685, 195);
  line(700, 195, 700, 240);
  ctx.fillStyle = "rgb(84, 88, 97)";
  triangle(718, 195, 682, 195, 700, 185, "fill");

  let light1 = 20;
  let light2 = 25;
  let light3 = 30;

  //Lamp post light
  ctx.fillStyle = "rgb(237, 180, 57, 0.6)";
  circle(700, 218, light1, "fill");
  ctx.fillStyle = "rgb(237, 180, 57, 0.3)";
  circle(700, 218, light2, "fill");
  ctx.fillStyle = "rgb(237, 180, 57, 0.3)";
  circle(700, 218, light3, "fill");

  light1++;
  light2++;
  light3++;

  if (light1 > 25) {
    light1--;
    light2--;
    light3--;
  }

  if (light1 < 20) {
    light1++;
    light2++;
    light3++;
  }

  //Draw Snowflakes
  for (let i = 0; i < snowflakesArray.length; i++) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
      snowflakesArray[i].x,
      snowflakesArray[i].y,
      snowflakesArray[i].r,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  //Animate Snow
  for (let i = 0; i < snowflakesArray.length; i++) {
    snowflakesArray[i].y += snowflakesArray[i].dy;
    snowflakesArray[i].x += snowflakesArray[i].dx;

    if (snowflakesArray[i].y > cnv.height) {
      // Move to right of canvas
      snowflakesArray[i].y = -snowflakesArray[i].r;

      // randomize x
      snowflakesArray[i].x = Math.random() * 1000 - 100;
    }

    if (snowflakesArray[i].x > snowflakesArray[i].x + 3) {
      snowflakesArray[i].dx = snowflakesArray[i].dx * -1;
    }
    if (snowflakesArray[i].x < snowflakesArray[i].x - 6) {
      snowflakesArray[i].dx = snowflakesArray[i].dx * -1;
    }
  }

  requestAnimationFrame(draw);
}

// Set the canvas to the provided size
function canvasSize(width, height) {
  cnv.width = width;
  cnv.height = height;
}

// Fill the canvas with the provided color
function background(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}

// Set the strokeStyle
function stroke(color) {
  ctx.strokeStyle = color;
}

// Set the fillStyle
function fill(color) {
  ctx.fillStyle = color;
}

// Set the lineWidth
function lineWidth(width) {
  ctx.lineWidth = width;
}

// Set the font
function font(fontSetting) {
  ctx.font = fontSetting;
}

// Draw a stroke or fill rectangle with a top-left corner of (x,y), a width of w and a height of h
function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke();
}

// Draw a stroke or fill circle with center (x,y) and radius of r
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw a stroke or fill triangle with vertices (x1,y1), (x2,y2), (x3,y3)
function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Vertex 1
  ctx.lineTo(x2, y2); // Vertex 2
  ctx.lineTo(x3, y3); // Vertex 3
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw a stroke or fill polygon using the given array of points
function polygon(points, mode) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw stroke or fill text with bottom-left corner (x,y)
function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.strokeText(message, x, y);
  }
}

// Draw a stroke or fill ellipse with center (x,y)
function ellipse(x, y, xRadius, yRadius, rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw an image on the canvas
function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

// Draw a clip of an image on the canvas
function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
  ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

function mousedownHandlerLib() {
  mouseIsPressed = true;
}

function mouseupHandlerLib() {
  mouseIsPressed = false;
}

function keydownHandlerLib(event) {
  keyIsDown[event.keyCode] = true;
}

function keyupHandlerLib(event) {
  keyIsDown[event.keyCode] = false;
}

function mousemoveHandlerLib(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}
