    let counter = 0;
    const element = document.getElementById("next");
    element.addEventListener("click", function () {
        counter++;
        if (counter < trigonometryQData.length) {
            runQuiz("trigonometry", counter);
            if (counter === trigonometryQData.length - 1) {
                document.getElementById('next').innerHTML = 'Finish';
                document.getElementById('next').id = 'finish'
            }
        } else {
            endQuiz();
        };
    });




var trigonometryQData = [{
    questiontext: "What formula can you use to find the length of a side of a right-angled triangle?",
    answer: "Pythagoras' Theorem",
    choices: ["Sine Rule", "Area of a triangle", "Cosine Rule", "Pythagoras' Theorem"]
}, {
    questiontext: "What method can you use to find the angle in a right-angled triangle?",
    answer: "SOHCAHTOA",
    choices: ["Pythagoras' Theorem", "SOHCAHTOA", "Area of a triangle", "Cosine Rule"]
}, {
    questiontext: "If the Sine Value of an angle is positive, which two quadrants will the angles be located?",
    answer: "1st and 2nd",
    choices: ["1st and 2nd", "1st and 3rd", "1st and 4th", "1st Only"]
}, {
    questiontext: "What angle betwen 0 and 90 degrees has the same Sine and Cosine value?",
    answer: "30",
    choices: ["30", "90", "60", "45"]
}];

//This function runQuiz takes in the argument of quizTopic and then using a switch case,
//calls the relevant topic question function
function runQuiz(quizTopic, counter) {
    switch (true) {
        case quizTopic === "trigonometry":
            displayTrigQuestion(counter);
        case quizTopic === "algebra":
            // displayAlgebraQuestion();
        case quizTopic === "geometry":
            //  displayGeometryQuestion();
    }
}

function displayTrigQuestion(questionNumber) {
    var i = questionNumber;
    let qNumber = document.getElementById('qNumber');
    let qNum = i + 1;
    qNumber.textContent = "Question Number: " + qNum;
    let qTotal = document.getElementById('qTotal');
    qTotal.textContent = "Total Qs: " + trigonometryQData.length;
    let qText = document.getElementById('question');
    qText.textContent = trigonometryQData[i].questiontext;
    let a1Text = document.getElementById('ans1');
    a1Text.textContent = trigonometryQData[i].choices[0];
    let a2Text = document.getElementById('ans2');
    a2Text.textContent = trigonometryQData[i].choices[1];
    let a3Text = document.getElementById('ans3');
    a3Text.textContent = trigonometryQData[i].choices[2];
    let a4Text = document.getElementById('ans4');
    a4Text.textContent = trigonometryQData[i].choices[3];
}

function checkAnswer(userSelect) {

    let userAnswer = document.getElementById(userSelect).textContent;
    if (userAnswer === trigonometryQData[counter].answer) {
        alert("Well done!")
    } else {
        alert("You messed up")
    }
}

function endQuiz() {
    alert("The quiz is over");
}

function keepScore() {

};