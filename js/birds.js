var index = 1;
var rows = [];


function pickLeft() {
    if (index > 1) {
        index = index - 1;
    }
    document.getElementById("myAudio2").play();
    updateScreen(index);
}
function pickRight() {
    if (index < rows.length - 1) {
        index = index + 1;
    }
    document.getElementById("myAudio2").play();
    updateScreen(index);

}
function pickRandom() {
    index = Math.floor(Math.random() * rows.length);
    if (index < 1) {
        index = 1;
    }
    document.getElementById("myAudio2").play();
    updateScreen(index);
}

function updateScreen(idx) {  
    // alert(idx);
    // alert(rows[idx][7]);
    document.getElementById("id_bird").src = rows[idx][7];
    document.getElementById("bird_name").value = rows[idx][1];
    document.getElementById("bird_color").value = rows[idx][4];
}

function readFileBird() {
    const csvUrl = "../data/Birds.csv"; 
    fetch(csvUrl)
    .then((response) => response.text())
    .then((text) => {
        rows = text.split("\n").map((row) => row.split(","));
    })
    .catch((error) => console.error("Error fetching the CSV file:", error));
}