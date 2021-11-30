var readlineSync = require("readline-sync");
var highScores = [
  {
    name: "Dhruvin",
    score: 10,
  },
  {
    name: "Vivek",
    score: 2,
  },
]
var score = 0;
var questionsLvl1 = [{
  question: "How many dragons does Daenerys Targaryen have ? ",
  answer: "3"
},
{
  question: "What is the name of the sword Jon Snow wields ? ",
  answer: "Longclaw"
},
{
  question: "What is the sigil of house Stark? ",
  answer: "Direwolf"
},
{
  question: "What does Arya name her direwolf ? ",
  answer: "Nymeria"
},
{
  question: "What was Hodor called before he got his tragic door-holding nickname ? ",
  answer: "Wylis"
}];

var questionsLvl2 = [{
  question: "Who is the youngest of Ned Stark’s children ? ",
  answer: "Rickon"
},
{
  question: "Who is Jon Snow’s mother ? ",
  answer: "Lyanna"
},
{
  question: "What is Davos Seaworth’s nickname? ",
  answer: "Onion Knight"
},
{
  question: "Jamie Lannister has a golden ___. ? ",
  answer: "Hand"
},];
var bonusQuestion = "Which of the following is not a name of one of Daenerys Targaryen’s dragons?";
var bonusAnswerList = ["Rhaegal", "Drogon", "Balerion", "Viserion"];
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
  for (var i=0; i<questionsLvl1.length; i++) {
    var currentQuestion = questionsLvl1[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  if(score==5) {
    console.log("Congrats, you've answered everything correctly!");
    console.log("You've made it to level 2");
    console.log("");
    for(var i=0;i<questionsLvl2.length;i++) {
      var currentQuestion = questionsLvl2[i];
      play(currentQuestion.question, currentQuestion.answer);
    }
  }
  console.log("Here's a bonus question");
  console.log("");
  var index = readlineSync.keyInSelect(bonusAnswerList, bonusQuestion);
  if(index==2) {
    console.log("Correct!");
    score = score + 1;
  } else {
    console.log("Score : ", score);
    console.log("_______________")
  }
}
function showScores() {
  console.log("Final Score: ", score);
  console.log("These are the high score till now!");
  highScores.map(score => console.log(score.name, " : ", score.score))
  for(var i=0; i<highScores.length; i++) {
    if(score>highScores[i].score) {
      console.log("Looks like you've got a highscore! Congrats! Send me the screenshot so I can update your name and score.");
      break;
    }
  }
}
welcome();
game();
showScores();