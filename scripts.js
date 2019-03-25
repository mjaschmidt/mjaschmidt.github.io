
function youSure(value){

    if(window.confirm("Supporting me gives your song much better odds and you only pay if you can get placement (5$). At which point you can still decide to not pay. Continue submitting without support?")){

    }
    else {
    document.getElementById("inputEmail").value = "";
    }
}

function updateSubject(value){
    document.getElementById("emailSubject").value = document.getElementById("inputEmail").value;
} 