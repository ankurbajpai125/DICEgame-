var randonNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randonNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randonNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randonNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randonNumber1>randonNumber2){
    document.querySelector("h1").innerHTML=" Play 1 wins"
}
else if(randonNumber1<randonNumber2){
    document.querySelector("h1").innerHTML=" Play 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}