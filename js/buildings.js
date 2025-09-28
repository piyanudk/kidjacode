var index = 1;
var rows = [];

updateScreen(1);
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
    document.getElementById("id_building").src = rows[idx][3];
    document.getElementById("building_name").value = rows[idx][2];
    document.getElementById("building_country").value = rows[idx][5];
}

function readFile() {
    const csvUrl = "../data/buildings.csv";
    fetch(csvUrl)
    .then((response) => response.text())
    .then((text) => {
        rows = text.split("\n").map((row) => row.split(","));
    })
    .catch((error) => console.error("Error fetching the CSV file:", error));
}