var num1 = Math.floor((Math.random()*6)) + 1
var img1 = "dice" + num1 + ".png"
var imgsrc1 = "images/" + img1

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imgsrc1);

var num2 = Math.floor(Math.random()*6)+1;
var img2 = "dice" + num2 + ".png"
var imgsrc2 = "images/" + img2

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imgsrc2);

var won;

if(num1>num2)
  {won="Player 1 Wins! :O"}
else if(num2>num1)
  {won="Player 2 Wins! :O"}
else
  {won="Its a Draw!!"}

document.querySelector("h1").innerHTML = won
