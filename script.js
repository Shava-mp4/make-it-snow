//Mini Project: Make it Snow

//Snowflakes
let snowflakesArray = [];

for (let i = 0; i < 100; i++) {
  snowflakesArray.push({
    x: Math.random() * cnv.width,
    y: 0,
    r: Math.random() * 5 + 1,
    dx: Math.random() * 6 + 1, // 2.01 - 5.99
  });
}

console.log(snowflakesArray);
