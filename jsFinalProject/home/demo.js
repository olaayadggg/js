var currentIndex = 1;
displaySlides(currentIndex);
function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}
function setSlides(num) {
    displaySlides(currentIndex += num);
}


function form(){
    window.open('./form.html',"_self")

}
function home(){
  window.open('./home.html',"_self")

}
function about(){
  window.open('./about.html',"_self")
}

let productLismen = document.querySelectorAll(".men");
let productLiswomen = document.querySelectorAll(".women");
let all = document.querySelector(".active");

console.log(productLismen)
let ragel=document.querySelector(".ragel");
let set=document.querySelector(".set");


all.addEventListener("click",()=>{
  manageImgs2(productLiswomen);
  manageImgs2(productLismen);

})
ragel.addEventListener("click",()=>{
  manageImgs(productLiswomen);
  manageImgs2(productLismen);

})

set.addEventListener("click",()=>{
  manageImgs(productLismen);
  manageImgs2(productLiswomen);
})


function manageImgs(arr) {
  arr.forEach((object) => {
    object.style.display = "none";
  });}
  console.log(productLiswomen)
  function manageImgs2(arr) {
    arr.forEach((object) => {
      object.style.display = "block";
    });}
  

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


let cart=document.getElementById("counter");
console.log(cart)
var counts=0;
let buttons=document.querySelectorAll(".add")

let counter;
if(hasCookie("counter"))
    {
      counter=parseInt(getCookie("counter"))
    }
    else{

      counter="0";
      setCookie("counter",counter,1)
    }

cart.innerHTML=counter;
for(let i=0;i<buttons.length;i++)
{
  buttons[i].addEventListener("click",function(){
    counter=parseInt(getCookie("counter"))
    counter++;
    setCookie("counter",counter,1)
    cart.innerHTML=counter;
  })
}





function setCookie(key, value, days) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${key}=${value};expires=${date}`;
}

function getCookie(name) {
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (var i = 0; i < cookies.length; i++) {
    let keyValue = cookies[i].split("=");
    for (var j = 0; j < keyValue.length; j++) {
      if (name == keyValue[j].trim()) {
        return keyValue[j + 1];
      }
    }
  }
}

function hasCookie(name) {
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (var i = 0; i < cookies.length; i++) {
    let keyValue = cookies[i].split("=");
    for (var j = 0; j < keyValue.length; j++) {
      if (name == keyValue[j].trim()) {
        return true;
      }
    }
  }
  return false;
}



