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

//This function runQuiz takes in the argument of quizTopic and then using a switch case,
//calls the relevant topic question function
function runQuiz(quizTopic) {
    switch (true) {
        case quizTopic === "trigonometry":
            alert("Trig");
        /*displayTrigQuestion();*/
        case quizTopic === "algebra": 
        /*displayAlgebraQuestion();*/
        case quizTopic === "geometry": 
        /*displayGeometryQuestion();*/
    }
}


function getQuestionData() {

}

function checkAnswer() {

}

function keepScore() {

}