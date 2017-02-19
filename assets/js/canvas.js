
<script src ="canvas.js" type="text/javascript"></script>
var img1 = null;
var img2 = null;
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  //frameRate(30);
  img1 = loadImage("images/noimage.jpg")
  img2 = loadImage("images/Mario_png.png");
}

function doSome()
{
  console.log("Clicked");
}

/*function mousePressed()
{
  var elem = document.getE
  //console.log(img.name);
  console.log("Clicked img1");
}*/

function draw() {
  //console.log("Bla");
  background(56);
  fill(204);
  image(img1, 100, 10,100,100);

  /*if(mouseIsPressed)
  {
    console.log("Image1");
  }*/
  image(img2, 250, 120,100,100);
  /*if(mouseIsPressed)
  {
    console.log("Image2");
  }*/
}
