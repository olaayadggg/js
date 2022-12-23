var inputname = document.getElementById("inputname");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var sports = document.getElementsByName("sports")
var inputSelect = document.getElementById("inputSelect");
var submit = document.getElementById("submit");
// var msgErorr = document.getElementById("msgError")


inputname.addEventListener("input", function (e) {
    if (e.target.value.length <= 3) {
        e.target.style.border = "5px solid red";
    } else {
        e.target.style.border = "5px solid green";
    }
});

var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
inputEmail.addEventListener("input", function (e) {
    if (e.target.value.match(mailformat)) {
        e.target.style.border = "5px solid green";
    } else {
        e.target.style.border = "5px solid red";
    }
});

inputPassword.addEventListener("input", function (e) {
    if (e.target.value.length >= 8) {
        e.target.style.border = "5px solid green";
    } else {
        e.target.style.border = "5px solid red";
    }

});

var counter = 0
console.log(sports);
for (var i = 0; i < sports.length; i++) {
    sports[i].addEventListener("change", function (e) {
        if (e.target.checked == true) {
            counter++;
            console.log(counter);
        }
        if (e.target.checked == false) {
            counter--;
            console.log(counter);
        }
        if (counter >= 2) {
            console.log(counter);
        }
    })
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    if(counter<2){
        alert("please choose 2 sports");
    }
})




