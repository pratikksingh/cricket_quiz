
var readlineSync = require("readline-sync")
console.log("Welcome to 'Indian cricket quiz' !!\n\nIn this quiz you will have four options:\na)\nb)\nc)\nd)\n\nYou have to answer with either of the options a,b,c,d whichever you feel is the correct one :D");
console.log("-----------------------------------------------------------")
var userName = readlineSync.question("Enter your name to begin the quiz:\n")
console.log("\nLet's begin the quiz " + userName + " :)")

console.log("-----------------------------------------------------------")

var quiz = {
  questions: [
    "How many times did India win the Cricket World Cup?",
    "Which Year did India win their second Cricket World Cup?",
    "Who was the Indian Captain when India won the Cricket World Cup in 2011?",
    "Who was the Player of the Tournament when India won the World Cup in 2011?",
    "Which Indian batsman has the most number of Runs in IPL in a calendar year?",
    "Which Indian Captain holds the record for most Test wins?",
    "Which is the oldest Cricket Stadium in India?"

  ],
  options: [
    ["1", "2", "3", "4"],
    ["1999", "2015", "2019", "2011"],
    ["Sachin Tendulkar", "Virat Kohli", "Mahendra Singh Dhoni", "Rohit Sharma"],
    ["Yuvraj Singh", "Gautam Gambhir", "Sachin Tendulkar", "Virat Kohli"],
    ["Shikhar Dhawan", "Virat Kohli", "Rohit Sharma", "Suresh Raina"],
    ["Mahendra Singh Dhoni ", "Sourav Ganguly", "Virat Kohli", "Kapil Dev"],
    ["Eden Gardens", "Rajiv Gandhi International Cricket Stadium", "Wankhede Stadium", "Vidarbha Cricket Association Stadium"]

  ],
  optForQuestions: ["a", "b", "c", "d"],
  correctAns: ["b", "d", "c", "a", "b", "c", "a"]
}

var score = 0;

for (let i = 0; i < quiz.questions.length; i++) {
  let questionNumber = i + 1 + ")";

  console.log(questionNumber, quiz.questions[i], "\n")
  for (let j = 0; j < quiz.optForQuestions.length; j++) {
    console.log(quiz.optForQuestions[j], ")", quiz.options[i][j])
  }
  var userAns = readlineSync.question("\nYour answer: ")

  if (userAns === quiz.correctAns[i]) {

    score++
    console.log("\nCorrect Answer :)\n")
    console.log("Your current score: ", score)
  }


  else {
    console.log("\nOops! wrong answer :(\n")
    console.log("Your current score: ", score)
  }

  console.log("-----------------------------------------------------------")


}
console.log(userName, " your final score is: ", score)











