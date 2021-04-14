const readLineSync = require("readline-sync");
var score = 0;

var userName = readLineSync.question("Enter Your Username : ")
console.log("Welcome to quiz " + userName + " Lets See how well do you know about India ?")

console.log("write answer to each question presented to you")

var que1 = {
  que: "national bird of india ? ",
  ans: "peacock"
}
var que2 = {
  que: "national animal of india ? ",
  ans: "tiger"
}
var que3 = {
  que: "prime minister of india ? ",
  ans: "narendra modi"
}
var que4 = {
  que: "where is taj mahal ? ",
  ans: "agra"
}


function play(que, ans) {

  var answer = readLineSync.question(que)
  if (answer.toLowerCase() === ans.toLowerCase()) {
    console.log("Right")
    score = score + 1;
  } else {
    console.log("Wrong")
    score = score - 1;
  }

}

var questions = [que1, que2, que3, que4];

questions.forEach((q) => {
  play(q.que, q.ans)
})

console.log("Final Score is " + score);
