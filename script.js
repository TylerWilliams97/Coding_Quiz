
var first = {
    question : "Where am i",
    a : "Answer1",
    b : "Answer2",
    c : "Answer3",
    d : "Answer4",
    correct : "Answer1"
};
var second = {
    question : "This will be question 2",
    a : "Answer1",
    b : "Answer2",
    c : "Answer3",
    d : "Answer4",
    correct : "Answer3"
};
var third = {
    question : "This will be question 3",

    a : "Answer1",
    b : "Answer2",
    c : "Answer3",
    d : "Answer4",
    correct : "Answer2"

};
var quizItems= [first, second, third];

function hidestart(){
    $("#startItems").hide();
};

function buildQuestion(quizitem){
    $("#mainText").append(quizitem.question);

    var listItem;
    for(ans in quizitem){
        if((ans==="question")||(ans==="correct")){
            continue;
        }
        listItem=document.createElement("button");
        listGroup.appendChild(listItem)
    }
    
};
$("#startButton").click(function(){
    $("#startItems").hide();
    buildQuestion(quizItems[0]);
})
