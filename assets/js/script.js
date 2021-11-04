document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You Clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert("You clicked $(gameType)");
            }
        })
    }
})

/**
 * *The main game "loop", called when the script is first loaded
 */
function runGame() {

    let num1 = math.floor(Math.random()*25)+1;
    let num2 = math.floor(Math.random()*25)+1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}