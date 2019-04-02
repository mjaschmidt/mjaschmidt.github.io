function youSure(value) {

    if (window.confirm("Supporting me gives your song better odds and you only pay if you can get actual placement. Continue submitting without support?")) {

    } else {
        document.getElementById("inputEmail").value = "";
    }
}

function updateSubject(value) {
    document.getElementById("emailSubject").value = document.getElementById("inputEmail").value;
}

let emoteArray = ['🤗', 'ah thats hot!', '💪', 'dope!', 'you rock!', '🔥', 'yuh', '💦', '🤑', 'click!', '😇', '🙏', '😍', '🤤', 'yay', 'you the one', '😩', '🎵', '🎶', '🎧', '💸', '✨', '🍆', '🍑', '💨', '💞', '💓', '💕', '💙', '💜', '💚', '💛', '🧡', '🆒', '🙆', '🙌'];
let randomInt = 0;

// setInterval(function(){
//     randNum();
//     document.getElementById('heart').innerHTML = emoteArray[randomInt];
// }, 1000)

// function randNum() {
//     randomInt = Math.floor(Math.random() * 36);
// }

function beatHearts() {
    // document.getElementById("beatinghearts").style.visibility = "visible";
    // randNum();
    // document.getElementById('heart').innerHTML = emoteArray[randomInt];
}

function stopHearts() {
    document.getElementById("beatinghearts").style.visibility = "hidden";
}

function showArrow() {
    document.getElementById("arrow1").style.visibility = "visible";
}
function showArrow2() {
    document.getElementById("arrow2").style.visibility = "visible";
}

function hideArrow() {
    document.getElementById("arrow1").style.visibility = "hidden";
}
function hideArrow2() {
    document.getElementById("arrow2").style.visibility = "hidden";
}
// function breakHeart(){
//     document.getElementById("ogHeart").innerHTML = "💔";
// }
// function repairHeart(){
//     document.getElementById("ogHeart").innerHTML = "💕";
// }
