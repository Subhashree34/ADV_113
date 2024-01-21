let canvas;
let video;
let borderImg;

function preload() {
  // Load the image for the border
  borderImg = loadImage('Frame_4.png');
}

function setup() {
  // Create a canvas with dimensions 640x480
  canvas = createCanvas(640, 480);
  // Position the canvas at coordinates (110, 700)
  canvas.position(110, 700);

  // Create a video capture object
  video = createCapture(VIDEO);
  // Hide the video element
  video.hide();
}

function draw() {
  // Display the video feed on the canvas
  image(video, 0, 0, 640, 480);

  // Set the blend mode to overlay the border on top of the video
  //blendMode(MULTIPLY);
  // Display the border image
  image(borderImg, 0, 0, 640, 480);
  // Reset the blend mode to the default
  blendMode(NORMAL);
}

function take_snapshot() {
  // Save the current canvas content as an image with the name 'student_name.png'
  save('student_name.png');
}
