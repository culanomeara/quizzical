document.addEventListener("DOMContentLoaded", function() {
    let topics = document.getElementsByClassName("topic");

    for (let topic of topics) {
        topic.addEventListener("click", function() {
            if (topic.innerHTML === "Trigonometry") {
                alert("You clicked Trigonometry!");
            } else {
                let quizTopic = this.innerHTML;
                runGame(quizTopic);
            }
        });
    }

function runQuiz() {

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