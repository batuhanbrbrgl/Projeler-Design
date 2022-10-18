let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
let home = document.querySelector('.homes');
let dunyakahveleri = document.querySelector('.dunyakahve');
let sogukkahve = document.querySelector('.sogukkahve');
let organik = document.querySelector('.organik');
let frozen = document.querySelector('.frozenn');
let freshdrink = document.querySelector('.freshdrinkk');
let milkshake = document.querySelector('.milkshakee');
let sogukicecek = document.querySelector('.sogukicecek');
let cay = document.querySelector('.cayy');
let tatli = document.querySelector('.tatli');


home.onclick = function() {
    navbar.classList.remove('active');
}
dunyakahveleri.onclick = function() {
    navbar.classList.remove('active');
}
sogukkahve.onclick = function() {
    navbar.classList.remove('active');
}
organik.onclick = function() {
    navbar.classList.remove('active');
}
frozen.onclick = function() {
    navbar.classList.remove('active');
}
freshdrink.onclick = function() {
    navbar.classList.remove('active');
}
milkshake.onclick = function() {
    navbar.classList.remove('active');
}
sogukicecek.onclick = function() {
    navbar.classList.remove('active');
}
cay.onclick = function() {
    navbar.classList.remove('active');
}
tatli.onclick = function() {
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2")
var img3 = document.getElementById("myImg3")
var eye1 = document.querySelector("#eye1");
var eye2 = document.querySelector("#eye2");
var eye3 = document.querySelector("#eye3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

}
img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


eye1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "image/product-1.png";
    captionText.innerHTML = "Fresh Coffee";
}
eye2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "image/product-2.png";
    captionText.innerHTML = "Fresh Coffee";
}
eye3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "image/product-3.png";
    captionText.innerHTML = "Fresh Coffee";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-content")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {

    modal.style.display = "none";
}