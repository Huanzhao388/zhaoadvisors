const mottos = [

`Focus on today. Focus on yourself. Focus on progress.
专注于当下，专注于自己，专注于进步。`,

`Act. Act. Act.
行动，行动，行动。`,

`Only action dissolves anxiety.
唯有行动才能消除焦虑。`,

`Compare yourself only with who you were yesterday.
只和昨天的自己比较。`,

`The goal is not perfection. The goal is consistent progress.
目标不是完美，而是持续进步。`

];


let timeLeft = 25 * 60;
let timer;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").innerText =
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

function startTimer() {

    if (timer) return;

    timer = setInterval(function () {

        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            alert("🎉 Focus session completed!");
        }

    }, 1000);
}

function resetTimer() {

    clearInterval(timer);
    timer = null;

    timeLeft = 25 * 60;

    updateDisplay();
}

function saveGoal() {

    let goal = document.getElementById("goal").value;

    document.getElementById("goalDisplay").innerText =
        "Today's Goal: " + goal;
}

function showRandomMotto() {

    const randomIndex =
        Math.floor(Math.random() * mottos.length);

    document.getElementById("random-motto").innerText =
        mottos[randomIndex];
}


updateDisplay();
showRandomMotto();
