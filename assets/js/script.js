document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            var quizTopic="";

            switch (true) {
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
            }
            
            /*if (this.getAttribute("data-type") === "trigonometry") {
                alert("You clicked Trig!");
            } else {
                
            }*/
            let quizTopic = this.getAttribute("data-type");
                runQuiz(quizTopic);
        });
    }

});


function runQuiz(quizTopic) {

}

function getQuestionData() {

}

function displayQuestion() {
    let question = document.getElementById('question')
    question.innerHTML = "<h1></h1>"
}

function checkAnswer() {

}

function keepScore() {

}