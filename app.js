let generatePin = document.querySelector(".generate-btn");
let showClickValue = document.getElementById('screen').value;
let  buttons = document.querySelectorAll(".button");
let showRandomNumber = document.getElementById('show-random-number').value;
var notifyError = document.querySelector('.notify-error');
var notifySuccess = document.querySelector('.notify-success');







generatePin.addEventListener('click',function(){
   rendomNumber = Math.floor(1000 + Math.random() * 9000) ;  
    document.getElementById('show-random-number').value = rendomNumber;
});



for(item of buttons){
    item.addEventListener('click',function(e){
        buttonText = e.target.innerText; 
        // console.log("button text is " + buttonText );
        document.getElementById('screen').value += buttonText;
    });
}

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click',function(){
    document.getElementById('screen').value = "";
    notifySuccess.style.display ="none";
    notifyError.style.display ="none";
});



submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click',function(){
     var screenNumber = document.getElementById('screen').value;
     var  randomNumber = document.getElementById('show-random-number').value;
    if (screenNumber === randomNumber) {
        notifySuccess.style.display ="block";
        notifyError.style.display ="none";
    }
    else{
        notifyError.style.display ="block";
        notifySuccess.style.display ="none";
    }
});




