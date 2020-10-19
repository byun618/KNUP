var imgArray = new Array();
imgArray[0] = "/img/1.jpg";
imgArray[1] = "/img/2.jpg";
imgArray[2] = "/img/3.jpg";
imgArray[3] = "/img/4.jpg";

window.onload = function showImage() {
    var imgNum = Math.round(Math.random() * 3);
    var objImg = document.getElementById("introimg");
    objImg.src = imgArray[imgNum];

    setTimeout(showImage, 3000);
}