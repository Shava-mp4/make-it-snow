//Mini Project: Make it Snow

//Snowflakes
let snowflakesArray = [];
// 

for (let i = 0; i < 250; i++) {
  snowflakesArray.push({
    x: Math.random() * 1000 - 100,
    y: 0,
    r: Math.random() * 2 + 1,
    dx: Math.random() * (1.2 - 0.2) + 0.2, // 2.01 - 5.99
    dy: Math.random() * (2 - 0.5) + 0.5,
  });
}

console.log(snowflakesArray);

// // Key events
document.addEventListener("keydown", keydownHandler);

// --------Add/Remove 10 Snowflakes------------
function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    for (let i = 0; i < 10; i++) {
      snowflakesArray.push({
        x: Math.random() * cnv.width,
        y: 0,
        r: Math.random() * 2 + 1,
        dx: Math.random() * (1.2 - 0.2) + 0.2, // 2.01 - 5.99
        dy: Math.random() * (2 - 0.5) + 0.5,
      });
    }
  }

  if (event.code == "ArrowLeft") {
    for (let i = 0; i < 10; i++) {
      snowflakesArray.pop();
    }
  }

  if (event.code == "ArrowUp") {
    for (let i = 0; i < snowflakesArray.length; i++) {
      if (snowflakesArray[i].dx < 10) {
        snowflakesArray[i].dx + 0.5;
      }
    }
  }

  if (event.code == "ArrowDown") {
    for (let i = 0; i < snowflakesArray.length; i++) {
      if (snowflakesArray[i].dx > 0.2) {
        snowflakesArray[i].dx - 0.2;
      }
    }
  }

  if (event.code == "KeyP") {
    let pose = 0;
    pose++;
    snowmanArray[pose];
    if (pose == snowmanArray.length) {
      pose = 0;
    }
  }
}

let snowmanArray = [
//   //Default
//   {
//     armWidth: lineWidth(5),
//     rightArm: line(780, 420, 760, 480),
//     colourOne: (ctx.fillStyle = "rgb(230, 231, 240)"),
//     torso: circle(810, 440, 43, "fill"),
//     colourTwo: (ctx.fillStyle = "rgb(28, 27, 31)"),
//     buttonOne: circle(798, 417, 3, "fill"),
//     buttonTwo: circle(794, 437, 3, "fill"),
//     buttonThree: circle(797, 455, 3, "fill"),
//     leftArm: line(840, 420, 860, 480),
//   },

//   //pose1
//   {
//     armWidth: lineWidth(5),
//     rightArm: line(780, 420, 760, 360),
//     colourOne: (ctx.fillStyle = "rgb(230, 231, 240)"),
//     torso: circle(810, 440, 43, "fill"),
//     colourTwo: (ctx.fillStyle = "rgb(28, 27, 31)"),
//     buttonOne: circle(798, 417, 3, "fill"),
//     buttonTwo: circle(794, 437, 3, "fill"),
//     buttonThree: circle(797, 455, 3, "fill"),
//     leftArm: line(840, 420, 860, 360),
//   },

//   //pose2
//   {
//     armWidth: lineWidth(5),
//     rightArm: line(780, 420, 760, 360),
//     colourOne: (ctx.fillStyle = "rgb(230, 231, 240)"),
//     torso: circle(810, 440, 43, "fill"),
//     colourTwo: (ctx.fillStyle = "rgb(28, 27, 31)"),
//     buttonOne: circle(798, 417, 3, "fill"),
//     buttonTwo: circle(794, 437, 3, "fill"),
//     buttonThree: circle(797, 455, 3, "fill"),
//     leftArm1: line(840, 420, 870, 430),
//     leftArm2: line(868, 430, 875, 390),
//   },
// ];
