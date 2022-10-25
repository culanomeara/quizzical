
    let currentScore = 0;
    let qtopic;
    let qCounter = 1;
    let totalQuestion=4;
    const element = document.getElementById("next");
    element.addEventListener("click", nextQ);

    //This function runQuiz takes in the argument of quizTopic and then using a switch case,
    //calls the relevant topic question function
    function runQuiz(quizTopic) {
        qtopic = quizTopic;
        disableTopics();
        document.getElementById(qtopic).style.backgroundColor = "orange";
        displayTrigQuestion(qCounter);
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
            if (qCounter === 4) {
                document.getElementById('next').innerHTML = 'Finish';
                document.getElementById('next').id = 'finish';
            }
        } else {
            endQuiz(currentScore);
            document.getElementById('finish').innerHTML = 'Next';
            document.getElementById('finish').id = 'next';
        };
    };

    /*function checkTopic() {
        let usertopic = ("None");
        if (document.getElementById('trigonometry').style.backgroundColor == 'orange') {
            usertopic = "trigonometry";
        } else if (document.getElementById('algebra').style.backgroundColor == 'orange') {
            usertopic = "algebra";
        } else {
            alert('Please select a topic');
            location.reload();
        }
        return usertopic;
    };*/

    function displayTrigQuestion(qCounter) {
        let i = qCounter-1;
        document.getElementById('qProgress').textContent = `Question ${qCounter} of ${totalQuestion}`;
        document.getElementById('question').textContent = trigonometryQData[i].questiontext;
        document.getElementById('ans1').textContent = trigonometryQData[i].choices[0];
        document.getElementById('ans1').style.backgroundColor = '';
        document.getElementById('ans2').textContent = trigonometryQData[i].choices[1];
        document.getElementById('ans2').style.backgroundColor = '';
        document.getElementById('ans3').textContent = trigonometryQData[i].choices[2];
        document.getElementById('ans3').style.backgroundColor = '';
        document.getElementById('ans4').textContent = trigonometryQData[i].choices[3];
        document.getElementById('ans4').style.backgroundColor = '';
    }

    /*function displayAlgebraQuestion(qCounter) {
        var i = qu;
        let qNum = i + 1;
        document.getElementById('qTotal').textContent = "Total Qs: " + algebraQData.length;
        document.getElementById('question').textContent = algebraQData[i].questiontext;
        document.getElementById('ans1').textContent = algebraQData[i].choices[0];
        document.getElementById('ans1').style.backgroundColor = '';
        document.getElementById('ans2').textContent = algebraQData[i].choices[1];
        document.getElementById('ans2').style.backgroundColor = '';
        document.getElementById('ans3').textContent = algebraQData[i].choices[2];
        document.getElementById('ans3').style.backgroundColor = '';
        document.getElementById('ans4').textContent = algebraQData[i].choices[3];
        document.getElementById('ans4').style.backgroundColor = '';
    }*/

    function checkAnswer(userSelect) {
        disableAnswers();
        document.getElementsByClassName('controls')[0].removeAttribute("hidden");
        let correctanswer;
        let i = qCounter-1;
        let currenttopic = qtopic;
        let userAnswer = document.getElementById(userSelect).textContent;
        let ansColor = document.getElementById(userSelect);
        if (currenttopic == "trigonometry") {
            correctanswer = trigonometryQData[i].answer;
        } else if (
            currenttopic == "algebra") {
            correctanswer = algebraQData[i].answer;
        };
        if (userAnswer == correctanswer) {
            currentScore++;
            document.getElementById('feedback').textContent = "Well done!";
            ansColor.style.backgroundColor = "green";

        } else {
            document.getElementById('feedback').textContent = "Oops! The correct answer is " + correctanswer;
            ansColor.style.backgroundColor = "red";
        }
        document.getElementById('score').textContent = "Score: " + currentScore;
    }

    function endQuiz() {
        location.reload();
        currentScore = 0;
        qCounter = 1;
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

    const trigonometryQData = [{
        topic: "trigonometry",
        questiontext: "What formula can you use to find the length of a side of a right-angled triangle?",
        answer: "Pythagoras' Theorem",
        choices: ["Sine Rule", "Area of a triangle", "Cosine Rule", "Pythagoras' Theorem"]
    }, {
        topic: "trigonometry",
        questiontext: "What method can you use to find the angle in a right-angled triangle?",
        answer: "SOHCAHTOA",
        choices: ["Pythagoras' Theorem", "SOHCAHTOA", "Area of a triangle", "Cosine Rule"]
    }, {
        topic: "trigonometry",
        questiontext: "If the Sine Value of an angle is positive, which two quadrants will the angles be located?",
        answer: "1st and 2nd",
        choices: ["1st and 2nd", "1st and 3rd", "1st and 4th", "1st Only"]
    }, {
        topic: "trigonometry",
        questiontext: "What angle betwen 0 and 90 degrees has the same Sine and Cosine value?",
        answer: "30",
        choices: ["30", "90", "60", "45"]
    }];

    const algebraQData = [{
        topic: "algebra",
        questiontext: "What does HCF stand for?",
        answer: "Highest Common Factor",
        choices: ["Hypothetical Common Fact", "Highest Cumulative Form", "Highest Common Factor", "Hypotenuse Change Face"]
    }, {
        topic: "algebra",
        questiontext: "The order of operations in Maths is? ",
        answer: "BIRDMAS",
        choices: ["BIRDMAS", "Multiply, Divide, Add, Subtract", "What you need to type into calculator", "As they appear on the page"]
    }, {
        topic: "algebra",
        questiontext: "The -b formula is use to find what?",
        answer: "Roots of a quadratic",
        choices: ["Length of a line segment", "Factors", "The square root of a number", "Roots of a quadratic"]
    }, {
        topic: "algebra",
        questiontext: "If you divide any number by 0, what answer do you get?",
        answer: "Cannot divide a number by 0",
        choices: ["Cannot divide a number by 0", "0", "1", "the number"]
    }];