let currentScore = 0;
let qtopic;
let qCounter = 1;
let totalQuestion = 4;

if (window.location.href.indexOf("index.html") > -1 ) {
    document.getElementById("start").addEventListener("click", start);
}

function start() {
        location.href = "quiz.html";
    };

//This function runQuiz takes in the argument of quizTopic and then using a switch case,
//calls the relevant topic question function
function runQuiz(quizTopic) {
    let element = document.getElementById("next");
    element.addEventListener("click", nextQ);
    let resetQuiz = document.getElementById("reset");
    resetQuiz.addEventListener("click", endQuiz);
    document.getElementById('quizContainer').hidden = false;
    disableTopics();
    qtopic=quizTopic;
    document.getElementById(qtopic).style.backgroundColor = "rgba(255, 192, 203, 0.5)";
    displayQuestion(qtopic, qCounter);
}

function nextQ() {
    qCounter++;
    enableAnswers();
    currentQtopic = qtopic;
    document.getElementById('feedback').textContent = "";
    if (currentQtopic == "none") {
        alert('Please select a topic for the quiz');
    } else
    if (qCounter < 5) {
        runQuiz(currentQtopic, qCounter);
        document.getElementById('next').hidden = true;
        if (qCounter === 4) {
            document.getElementById('next').innerHTML = 'Finish';
            document.getElementById('next').id = 'finish';
            document.getElementById('finish').hidden = true;
        }
    } else {
        document.getElementById('finish').hidden = true;
        document.getElementById('finish').innerHTML = 'Next';
        document.getElementById('finish').id = 'next';
        endQuiz(currentScore);
    };

};

function displayQuestion(qtopic, qCounter) {
    let i = qCounter - 1;
    let qtopicdata = eval(qtopic.concat("QData"));
    document.getElementById('qProgress').textContent = `Question ${qCounter} of ${totalQuestion}`;
    document.getElementById('question').textContent = qtopicdata[i].questiontext;
    document.getElementById('ans1').textContent = qtopicdata[i].choices[0];
    document.getElementById('ans1').style.backgroundColor = '';
    document.getElementById('ans2').textContent = qtopicdata[i].choices[1];
    document.getElementById('ans2').style.backgroundColor = '';
    document.getElementById('ans3').textContent = qtopicdata[i].choices[2];
    document.getElementById('ans3').style.backgroundColor = '';
    document.getElementById('ans4').textContent = qtopicdata[i].choices[3];
    document.getElementById('ans4').style.backgroundColor = '';
}

function checkAnswer(userSelect) {
    disableAnswers();
    if (document.getElementById('next') == null) {
        document.getElementById('finish').hidden = false;
    } else {
        document.getElementById('next').hidden = false;
    };
    let correctanswer;
    let i = qCounter - 1;
    let userAnswer = document.getElementById(userSelect).textContent;
    let ansColor = document.getElementById(userSelect);
    let qtopicdata = eval(qtopic.concat("QData"));
    correctanswer = qtopicdata[i].answer;

    if (userAnswer == correctanswer) {
        currentScore++;
        document.getElementById('feedback').textContent = "Well done!";
        ansColor.style.backgroundColor = "rgba(0, 255, 0, 0.5)";

    } else {
        document.getElementById('feedback').textContent = `Oops! The correct answer is ${correctanswer}`;
        ansColor.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    }
    document.getElementById('score').textContent = `Score: ${currentScore}`;
}

function endQuiz() {
    currentScore = 0;
    qCounter = 1;
    document.getElementById('quizContainer').hidden = true;
    location.reload();
}

function disableTopics() {
    document.getElementById('trigonometry').classList.add('disabled');
    document.getElementById('algebra').classList.add('disabled');
    document.getElementById('geometry').classList.add('disabled');
    document.getElementById('statistics').classList.add('disabled');
}

function enableAnswers() {
    document.getElementById('ans1').classList.remove('disabled');
    document.getElementById('ans2').classList.remove('disabled');
    document.getElementById('ans3').classList.remove('disabled');
    document.getElementById('ans4').classList.remove('disabled');
}

function disableAnswers() {
    document.getElementById('ans1').classList.add('disabled');
    document.getElementById('ans2').classList.add('disabled');
    document.getElementById('ans3').classList.add('disabled');
    document.getElementById('ans4').classList.add('disabled');
}

