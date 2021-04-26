var index = 0;
let score = 0;
var displayScore =document.getElementById('score');
var displayQuestion = document.getElementById('question');
function showQuestion() {
    displayScore.innerText = score
    console.log("index ="+index);
    var currentquestion = questions[index];

    
       
      
        displayQuestion.textContent = currentquestion.question;


        currentquestion.answers.forEach(function(choice, i){
            var button = document.createElement("button");
            button.setAttribute("class", "choice btn btn-secondary");
            button.setAttribute("type", "button");
            button.setAttribute("value", choice);

            button.textContent = i + 1 + ". " + choice;

            button.onclick = buttonClick;

            displayQuestion.appendChild(button);
        })
}
function stopQuiz() {
    console.log("Quiz finished");
    displayQuestion.innerHTML = "Thanks for Playing your score is in the top right!"
}
function buttonClick() {

    if (this.value === questions[index].correct) {
     
        console.log('correct');
        score++;
        console.log("score = "+score);
   
    }
    else{
        console.log("incorrect")
    }
  
    // move to next question
    index++;
  
    // check if we've run out of questions
    if (index === questions.length) {
      stopQuiz();
    } else {
      showQuestion();
    }
  }
showQuestion();