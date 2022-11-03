let currentScore = 0;
let qtopic;
let qCounter = 1;
let totalQuestion = 4;

//This function runQuiz takes in the argument of quizTopic and calls the display question function
function runQuiz(quizTopic) {
    let element = document.getElementById("next");
    element.addEventListener("click", nextQ);
    let reset = document.getElementById("reset");
    reset.addEventListener("click", resetQuiz);
    for (let element of document.getElementsByClassName("topic")) {
        element.hidden = true;
    }
    document.getElementById('pick').hidden = true;
    document.getElementById('quizContainer').hidden = false;
    qtopic = quizTopic;
    let displaytopic = qtopic.toUpperCase();
    document.getElementById('currentTopic').textContent = displaytopic;
    document.getElementById(qtopic).style.backgroundColor = "rgba(255, 192, 203, 0.5)";
    displayQuestion(qtopic, qCounter);
}

//function that calls the next question when NEXT button is clicked
function nextQ() {
    qCounter++;
    enableAnswers();
    let currentQtopic = qtopic;
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
        finishQuiz(currentScore, qtopic);
    }
}

//function that displays the question data with parameters of the topic and what question number to display
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

//Once an answer is clicked, this function checks the user answer against the stored correct answer
function checkAnswer(userSelect) {
    disableAnswers();
    if (document.getElementById('next') == null) {
        document.getElementById('finish').hidden = false;
    } else {
        document.getElementById('next').hidden = false;
    }
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

//function that is run once all questions have been answered
function finishQuiz() {
    localStorage.setItem("reportscore", currentScore);
    localStorage.setItem("reporttopic", qtopic);
    location.href = 'end.html';
}

//function to call the report card data and display it in end.html
function reportCard() {
    let element = document.getElementById('grade');
    let reportScore = localStorage.getItem("reportscore");
    let reportTopic = localStorage.getItem("reporttopic").toUpperCase();
    document.getElementById('report').textContent = `You correctly answered ${reportScore} out of 4 Questions in ${reportTopic}`;
    if (reportScore == 1) {
        element.textContent = "Your grade is D";
        element.style.backgroundColor = "rgba(255,192,203,0.5)";
    } else if (reportScore == 2) {
        element.textContent = "Your grade is C";
        element.style.backgroundColor = "rgba(255,170,102,0.5)";
    } else if (reportScore == 3) {
        element.textContent = "Your grade is B";
        element.style.backgroundColor = "rgba(255,255,0,0.5)";
    } else if (reportScore == 4) {
        element.textContent = "Your grade is A";
        element.style.backgroundColor = "rgba(0,128,0,0.5)";
    } else {
        element.textContent = "Your grade is E";
        element.style.backgroundColor = "rgba(255,0,0,0.5)";
    }
}

//function that is called when reset button clicked
function resetQuiz() {
    currentScore = 0;
    qCounter = 1;
    document.getElementById('quizContainer').hidden = true;
    location.reload();
}

// enable/disable answer divs depending on what stage of quiz it's at //
function enableAnswers() {
    for (let element of document.getElementsByClassName("answer")) {
        element.classList.remove('disabled');
    }
}

function disableAnswers() {
    for (let element of document.getElementsByClassName("answer")) {
        element.classList.add('disabled');
    }
}