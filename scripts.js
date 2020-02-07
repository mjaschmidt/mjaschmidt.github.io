var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      alert('made it unsivible')
    } else {
      content.style.display = "block";
      alert('made it visible')
    }
  });
}

var c = 0;

var randGif = ["https://media.giphy.com/media/B2kr8Cs97oRHHhstzH/giphy.gif",
    "https://media.giphy.com/media/oVjZP4roPdWdbpmLu8/giphy.gif",
    "https://media.giphy.com/media/1xne60wzrdpy7szbhP/giphy.gif",
    "https://media.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.gif",
    "https://media.giphy.com/media/l1KulDCUYbZJLbrIQ/giphy.gif",
    "https://media.giphy.com/media/3o7btP17Unyoa9wHgA/giphy.gif",
    "https://media.giphy.com/media/3o7btNjOiYvr4L9QZ2/giphy.gif",
    "https://media.giphy.com/media/13hxeOYjoTWtK8/giphy.gif",
    "https://media.giphy.com/media/1TJB4TPjtaEJq/giphy.gif",

];
var randNum = Math.floor(Math.random() * ((randGif.length - 1) - 0 + 1));

function randomGif() {
    if (c < 1) {
        document.getElementById('pic').setAttribute("src", randGif[randNum]);
        c = c + 1;
    }
}

function updateSubject(value) {
    document.getElementById("emailSubject").value = document.getElementById("inputEmail").value;
}

function warningFunction() {
  document.getElementById("warning").style.display ='block'

}