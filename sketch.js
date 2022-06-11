let x = 0;
let y = 0;
let spacing = 30;
let color = 0;

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  background(0);
}

function draw() {
  // put drawing code here
  colorMode(HSB, 360, 100, 100);
  stroke(color, 100, 100);
  // stroke(255, 100, 100);

  if (random(1) < 0.4) {
    line(x, y, x, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }

  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
    color = color + 360 / (displayHeight / spacing);
  }
}

function mousePressed() {
  print("The step of x is " + 360 / (displayHeight / spacing));
  print("The color of x is " + color);
  print("The displayWidth of x is " + displayWidth);
  print("The displayHeight of x is " + displayHeight);
  saveCanvas("photo", "png");
}
