var readlineSync = require("readline-sync");
var highScores = [
  {
    name: "Manan",
    score: 3,
  },
  {
    name: "Vivek",
    score: 2,
  },
]
var score = 0;
var questions = [{
  question: "How many dragons does Daenerys Targaryen have ? ",
  answer: "3"
},
{
  question: "WHat is the name of the sword Jon Snow wields ? ",
  answer: "Longclaw"
},
{
  question: "What is the sigil of house Stark? ",
  answer: "Direwolf"
},
{
  question: "What does Arya name her direwolf ? ",
  answer: "Nymeria"
}];
function welcome() {
 var userName = readlineSync.question("What is your name? ");

  console.log("Welcome "+ userName + " to the Game of Thrones Quiz");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) 
  { 
    console.log("Correct!");
    score = score + 1;
  } else {
    console.log("Nuh uh! Wrong!");
  }
  console.log("Score : ", score);
  console.log("_______________")
}
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("Final Score: ", score);
  console.log("These are the high score till now!");
  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome();
game();
showScores();