var total_money = 0;

function press(n) {
    playAudio();
    total_money = total_money + n;
    document.getElementById('mynumber').value = total_money;
}
function reset() {
    playAudio();
    total_money = 0;
    document.getElementById('mynumber').value = total_money;
}

function playAudio() { 
    document.getElementById("myAudio2").play(); 
} 

function pauseAudio() { 
    document.getElementById("myAudio2").pause(); 
} 
