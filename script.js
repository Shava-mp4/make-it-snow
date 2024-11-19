//Mini Project: Make it Snow

//Snowflakes
let snowflakesArray = [];

for (let i = 0; i < 250; i++) {
  snowflakesArray.push({
    x: Math.random() * cnv.width,
    y: 0,
    r: Math.random() * 2 + 1,
    dx: Math.random() * (1.2 - 0.2) + 0.2, // 2.01 - 5.99
    dy: Math.random() * (2 - 0.5) + 0.5,
    speed: 1,
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
        speed: 1,
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
      snowflakesArray[i].speed + 0.5;
      if (snowflakesArray[i].speed > 10) {
        snowflakesArray[i].speed = 10;
      }
    }
  }

  if (event.code == "ArrowDown") {
    for (let i = 0; i < snowflakesArray.length; i++) {
      snowflakesArray[i].speed - 0.2;
      if (snowflakesArray[i].speed < 0.2) {
        snowflakesArray[i].speed = 0.2;
      }
    }
  }
}
