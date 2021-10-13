canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	imageA_imgTag = new Image();
	imageA_imgTag.onload = uploadimg;
	imageA_imgTag.src = img_image;  

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
	          alphabetkey();
			  document.getElementById("d1").innerHTML = "You pressed Alphabet Key";
			  console.log("alphabetkey")
		}
	else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
     imageA_image = "Alpkey.png";
	 add();
}
function numberkey()
{
	imageA_image = "numkey.png";
	 add();
}
function arrowkey()
{
	imageA_image = "Arrkey.png";
	add();
}
function specialkey()
{
	imageA_image = "spkey.png";
	 add();
}
function otherkey()
{
	imageA_image = "otherkey.png";
	 add();
}
}