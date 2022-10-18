    let counter = 0;
    let currentScore = 0;

    const element = document.getElementById("next");
    element.addEventListener("click", function () {
        counter++;
        document.getElementById('ans1').classList.remove('disabled');
        document.getElementById('ans2').classList.remove('disabled');
        document.getElementById('ans3').classList.remove('disabled');
        document.getElementById('ans4').classList.remove('disabled');
        if (counter < trigonometryQData.length) {
            runQuiz("trigonometry", counter);
            if (counter === trigonometryQData.length - 1) {
                document.getElementById('next').innerHTML = 'Finish';
                document.getElementById('next').id = 'finish';
            }
        } else {
            endQuiz(currentScore);
            document.getElementById('finish').innerHTML = 'Next';
            document.getElementById('finish').id = 'next';
        };
    });




    var trigonometryQData = [{
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

    var algebraQData = [{
        topic: "algebra",
        questiontext: "Do you know anything about Algebra?",
        answer: "Of course",
        choices: ["Yes", "No", "Don't know", "Of course"]
    }, {
        topic: "algebra",
        questiontext: "AlgebraWhat method can you use to find the angle in a right-angled triangle?",
        answer: "SOHCAHTOA",
        choices: ["Pythagoras' Theorem", "SOHCAHTOA", "Area of a triangle", "Cosine Rule"]
    }, {
        topic: "algebra",
        questiontext: "AlgebraIf the Sine Value of an angle is positive, which two quadrants will the angles be located?",
        answer: "1st and 2nd",
        choices: ["1st and 2nd", "1st and 3rd", "1st and 4th", "1st Only"]
    }, {
        topic: "algebra",
        questiontext: "algebraWhat angle betwen 0 and 90 degrees has the same Sine and Cosine value?",
        answer: "30",
        choices: ["30", "90", "60", "45"]
    }];
    //This function runQuiz takes in the argument of quizTopic and then using a switch case,
    //calls the relevant topic question function
    function runQuiz(quizTopic, counter) {
        document.getElementById('trigonometry').classList.add('disabled');
        document.getElementById('algebra').classList.add('disabled');
        document.getElementById('geometry').classList.add('disabled');
        document.getElementById('statistics').classList.add('disabled');
        switch (true) {
            case quizTopic === "trigonometry":
                displayTrigQuestion(counter);
                alert('Trig section' + quizTopic);
                document.getElementById('trigonometry').style.backgroundColor = "orange";
            case quizTopic === "algebra":
                displayAlgebraQuestion(counter);
                alert('Algebra section' + quizTopic);
            case quizTopic === "geometry":
                //  displayGeometryQuestion();
        }
    }

    function displayTrigQuestion(questionNumber) {
        var i = questionNumber;
        let qNumber = document.getElementById('qNumber');
        let qNum = i + 1;
        qNumber.textContent = "Question Number: " + qNum;
        document.getElementById('qTotal').textContent = "Total Qs: " + trigonometryQData.length;
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

    function displayAlgebraQuestion(questionNumber) {
        var i = questionNumber;
        let qNumber = document.getElementById('qNumber');
        let qNum = i + 1;
        qNumber.textContent = "Question Number: " + qNum;
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
    }

    function checkAnswer(userSelect) {
        document.getElementById('ans1').classList.add('disabled');
        document.getElementById('ans2').classList.add('disabled');
        document.getElementById('ans3').classList.add('disabled');
        document.getElementById('ans4').classList.add('disabled');

        let userAnswer = document.getElementById(userSelect).textContent;
        let ansColor = document.getElementById(userSelect);

        if (userAnswer === trigonometryQData[counter].answer) {
            currentScore++;
            document.getElementById('feedback').textContent = "Well done!";
            ansColor.style.backgroundColor = "green";

        } else {
            ansColor.style.backgroundColor = "red";
            document.getElementById('feedback').textContent = "Oops! The correct answer is " + trigonometryQData[counter].answer;
        }
        let userScore = document.getElementById('score');
        userScore.textContent = "Score: " + currentScore;
    }

    function endQuiz() {
        alert("Your score was " + currentScore);
        document.getElementById('trigonometry').classList.remove('disabled');
        document.getElementById('trigonometry').style.backgroundColor = "";
        document.getElementById('algebra').classList.remove('disabled');
        document.getElementById('algebra').style.backgroundColor = "";
        document.getElementById('geometry').classList.remove('disabled');
        document.getElementById('geometry').style.backgroundColor = "";
        document.getElementById('statistics').classList.remove('disabled');
        document.getElementById('statistics').style.backgroundColor = "";
        document.getElementById('feedback').style.textContent = "";
        document.getElementById('ans1').style.backgroundColor = "";
        document.getElementById('ans2').style.backgroundColor = "";
        document.getElementById('ans3').style.backgroundColor = "";
        document.getElementById('ans4').style.backgroundColor = "";
        document.getElementById('feedback').textContent = "";
        document.getElementById('question').textContent = "";
        document.getElementById('qNumber').textContent = "";
        document.getElementById('qTotal').textContent = "";
        document.getElementById('score').textContent = "";
        counter = 0;
        currentScore = 0;
    }

    function resetColor(userSelect) {
        let bgColor = document.getElementById(userSelect);
        bgColor.style.backgroundColor = "black";
    }