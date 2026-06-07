const mottos = [

`You are the most undervalued asset in your own life. Never underestimate your knowledge, experience, resilience, and potential.
你自己，才是人生中最被低估的资产。永远不要低估自己的知识、经验、韧性和潜力。`,

`Have you truly fought for your future today? Every hour invested in learning, working, and improving yourself is a deposit into your future.
今天，你有没有认真地为自己的未来奋斗？每一个投入学习、工作和成长的小时，都是对未来的投资。`,

`Dreams are not purchased with wishes. They are purchased with effort, discipline, and sacrifice.
梦想不是靠幻想实现的，而是靠努力、自律和付出换来的。`,

`Eliminate distractions and treasure every minute. Time is your most valuable resource. Invest it wisely.
屏蔽一切干扰，珍惜每分每秒。时间是你最宝贵的资源，请把它投资在最值得的地方。`,

`Do not underestimate yourself. Do not overestimate difficulties. Stay focused. Stay patient. Keep moving forward.
不要低估自己，也不要高估困难。保持专注，保持耐心，持续前进。`,

`My responsibility is not to worry about the result. My responsibility is to do my best today.
我的责任不是担心结果，而是把今天做到最好。`,

`My effort is never wasted. Every challenge teaches me, and every step moves me closer to the right destination.
我的努力从来都不会被浪费。每一个挑战都在教导我，每一步都让我离正确的方向更近。`,

`I will not judge my future by one difficult day. My story is still being written.
我不会因为某一天的困难而定义自己的未来。我的故事仍在继续书写。`,

`I am my own strongest support system. I trust myself, rely on myself, and believe in my strength.
我是我自己最坚强的后盾。我相信自己，依靠自己，也相信自己拥有克服困难的力量。`,

`Today is a wonderful day to learn, grow, and take another step toward my goals.
今天是美好的一天，我可以学习、成长，并向我的目标再迈进一步。`,

`Every day is a new beginning. I trust time, growth, and the power of consistent effort.
每一天都是崭新的开始。我相信时间，相信成长，也相信持续努力的力量。`,

`I am uniquely myself. I am not anyone else, and I do not need to become anyone else.
我是独一无二的我。我不是别人，也不需要成为别人。`,

`Time is like sand flowing through our fingers, gone in an instant.
时间像流沙，在指缝间流淌，转瞬即逝。`,

`Act. Act. Act. Only action dissolves anxiety.
行动，行动，行动。唯有行动才能消除焦虑。`,

`No anxiety. No hesitation. No self-doubt. No self-denial.
不焦虑，不彷徨，不自我怀疑，不自我否定。`,

`Focus on the present. Focus on yourself. Compare yourself only with who you were yesterday.
专注于当下，专注于自己，只和过去的自己比较。`,

`Sooner or later, what I truly desire will come to me. I firmly believe that.
我始终相信，或早或晚，我真正渴望得到的东西终将属于我。`

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
