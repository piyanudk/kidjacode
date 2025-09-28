var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

var rightButton = "ans1";

function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to the nearest integer
    max = Math.floor(max); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min; // Inclusive of min and max
}


function next_question() {
    const ans1 = document.getElementById("ans1");
    const ans2 = document.getElementById("ans2");
    const ans3 = document.getElementById("ans3");
    const ans4 = document.getElementById("ans4");
    number1 = getRandomInt(1,10);
    number2 = getRandomInt(1,10);
    answer = number1 + number2;
    rightButton = "ans" + getRandomInt(1,4);

    document.getElementById("num1").value = number1;
    document.getElementById("num2").value = number2;


    ans1.value = answer + getRandomInt(1,10)*1;
    ans2.value = answer + getRandomInt(1,10)*2;
    ans3.value = answer + getRandomInt(1,10)*3;
    ans4.value = answer + getRandomInt(1,10)*4;

    ans1.style.backgroundColor = "lightblue";
    ans2.style.backgroundColor = "lightblue";
    ans3.style.backgroundColor = "lightblue";
    ans4.style.backgroundColor = "lightblue";

    document.getElementById(rightButton).value = answer;
    
}

function check_answer(n) {
    let buttonClick = "ans" + n;

    if (buttonClick == rightButton) {
        document.getElementById(buttonClick).style.backgroundColor = "green";
        document.getElementById("soundWin").play();
    } else {
        document.getElementById(buttonClick).style.backgroundColor = "red";
        document.getElementById("soundClick").play();    
    }

    
}

