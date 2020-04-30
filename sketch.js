let img;
let img2;
let greys = [];
let test;

function preload() {
	// img = loadImage('images/greys.png');
	img = loadImage('images/alphaTest.png');
	// img = loadImage('images/4Colors2.png');
	// img = loadImage('images/photo2.png')
}

function setup() {
	createCanvas(400, 400, WEBGL);
	//default z = 346, smaller values zoom in
	//z = 10 seems good for the project
	camera(0, 0, 350, 0, 0, 0, 0, 1, 0);
	// camera(0, 0, 10, 0,0,0,0,1,0);

	// img2 = createImage(200, 200);
	// noiseArrays();
	// displayDots();

	// stroke(0);
	// strokeWeight(20);
	// background(150);
	// test = createImage(1,1);
	noStroke();

}

function draw() {
	// background(250, 0, 250);
	background(150);
  // let locX = mouseX - height / 2;
  // let locY = mouseY - width / 2;
	// ambientLight(150, 150, 150);
// pointLight(255, 255, 255, locX, locY, 500);
	push();
	texture(img);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200);
	// noFill();
	// box(20);
	pop();

}

function noiseArrays() {
  let n = 0;
  let x = 0;
  let y = 0;
  let noiseVal;
  let noiseScale = .01;
  let noiseArray = [];
  let noiseScale2 = .15;
  let thresh = .3;
  for (let i = 0; i < img2.width; i++) {
    for (let j = 0; j < img2.height; j++) {
      noiseVal = noise(j * noiseScale, i * noiseScale);
      let grey = noise(x, y);
      if (grey > (thresh)) {
        grey = grey * 1.9;
      }
      grey = (grey + noiseVal) / 2;
      grey = grey * 256;
      greys[n] = grey;
      x += .3;
      y += .2;
      n++;
    }
  }
}

function displayDots() {
	img2.loadPixels();
  let n = 0;
	let j =0;
  for (let i = 0; i <= 4 * img2.width * img2.height; i+=4) {

			img2.pixels[i] = greys[n];
			img2.pixels[i+1] = greys[n];
			img2.pixels[i+2] = greys[n];
			let alpha = 255 - greys[n];
			img2.pixels[i + 3] = alpha;
			n++;

  }
	img2.updatePixels();
	// image(img2, 10, 10);
}

function keyTyped() {
  if (key === 's') {
    img2.save('photo', 'png');
  }
}
