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

updateDisplay();
