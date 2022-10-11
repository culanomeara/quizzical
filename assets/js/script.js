document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            let quizTopic = this.getAttribute("data-type");

            /*switch (true) {
                // If topic choice is Trig
                case this.getAttribute("data-type") === "trigonometry":
                    alert("You clicked Trig!");
                    break;
                    // If topic choice is Algebra
                case this.getAttribute("data-type") === "algebra":
                    alert("You clicked Algebra!");
                    break;
                    // If topic choice is Geometry
                case this.getAttribute("data-type") === "geometry":
                    alert("You clicked Geometry!");
                    break;
            }*/

            runQuiz(quizTopic);

        });
    }

});

var trigonometryQData = [{
    questiontext: "What formula can you use to find the length of a side of a right-angled triangle?",
    answer: 3,
    choices: ["Sine Rule", "Area of a triangle", "Cosine Rule", "Pythagoras' Theorem"]
}, {
    questiontext: "What method can you use to find the angle in a right-angled triangle?",
    answer: 1,
    choices: ["Pythagoras' Theorem", "SOHCAHTOA", "Area of a triangle", "Cosine Rule"]
}, {
    questiontext: "If the Sine Value of an angle is positive, which two quadrants will the angles be located?",
    answer: 0,
    choices: ["1st and 2nd", "1st and 3rd", "1st and 4th", "1st Only"]
}, {
    questiontext: "What angle betwen 0 and 90 degrees has the same Sine and Cosine value?",
    answer: 3,
    choices: [30, 90, 60, 45]
}];

//This function runQuiz takes in the argument of quizTopic and then using a switch case,
//calls the relevant topic question function
function runQuiz(quizTopic) {
    switch (true) {
        case quizTopic === "trigonometry":
            displayTrigQuestion();
        case quizTopic === "algebra":
            // displayAlgebraQuestion();
        case quizTopic === "geometry":
            //  displayGeometryQuestion();
    }
}
//const currentQData = "";

function displayTrigQuestion() {
    //var container = document.getElementById('container');
    for (var i = 0; i < trigonometryQData.length; i++) {
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
}
    //alert("Yay, you got as far as here!" + trigonometryQData);

    function checkAnswer() {

    }

    function keepScore() {

    }