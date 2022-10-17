    let counter = 0;
    let currentScore = 0;
    const element = document.getElementById("next");
    element.addEventListener("click", function () {
        counter++;
        document.body.classList.remove('disabled');
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
        a1Text.style.backgroundColor='';
        let a2Text = document.getElementById('ans2');
        a2Text.textContent = trigonometryQData[i].choices[1];
        a2Text.style.backgroundColor='';
        let a3Text = document.getElementById('ans3');
        a3Text.textContent = trigonometryQData[i].choices[2];
        a3Text.style.backgroundColor='';
        let a4Text = document.getElementById('ans4');
        a4Text.textContent = trigonometryQData[i].choices[3];
        a4Text.style.backgroundColor='';
    }

    function checkAnswer(userSelect) {
        document.body.classList.add('disabled');
        }
        let userAnswer = document.getElementById(userSelect).textContent;
        let ansColor = document.getElementById(userSelect);

        if (userAnswer === trigonometryQData[counter].answer) {
            currentScore++;
            
            ansColor.style.backgroundColor="green";

        } else {
            ansColor.style.backgroundColor="red";
        }
        let userScore = document.getElementById('score');
            userScore.textContent = "Score: " + currentScore;
    }

    function endQuiz() {
        alert("The quiz is over");
    }

    function resetColor(userSelect) {
        let bgColor = document.getElementById(userSelect);
        bgColor.style.backgroundColor = "black";
    }