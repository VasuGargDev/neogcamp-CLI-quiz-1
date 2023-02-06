//Do you know me quiz?
var readlineSync = require("readline-sync");
const chalk = require("chalk");


var userName = readlineSync.question(chalk.inverse("What's your name? "));
console.log(chalk.bgCyan("Welcome "+ userName + ", let's see how well do you know me"));

var score = 0;

var highScores = [
  {
    name: "Ojas",
    score: 4
  },
  {
    name: "Divya",
    score: 2
  }
]


//internal gameplay function
function gameLogic(question, answer) {
  
  var userAnswer = readlineSync.question(chalk.magenta(question));  //this line prints our question to user
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("right!"));
    score+=1;
  }
  else {
    console.log(chalk.red("wrong!"));
  }

  console.log(chalk.bold("current score: ", score));
  console.log(chalk.dim("-/-/-/-/-\n")); 
}


var questions = [
	{
		question: `  
	Where do I live?
	a: Roorkee
	b: Noida
	c: Gurgaon\n`,
		answer: "a"
	},
	{
		question: `
	Where did I study?
	a: COER
        b: IIT Madras
	c: BOTH\n`,
		answer: "c"
	},
	{
		question: `
	Who is my favorite superhero?
	a: Batman
	b: Superman
	c: IronMan
	d: AntMan\n`,
		answer: "c"
	},
	{
		question: `
	Am I?
	a: Night owl
	b: Early riser
	c: Keeps changin\n`,
		answer: "c"
	},
  {
		question: `
	My desired holiday destination?
	a: Europe
        b: South America
	c: None of the above\n`,
		answer: "a"
	},
	{
		question: `  
	My favorite junk food?
	a: Momos
	b: Pizza
	c: No junk I like to eat healthy\n`,
		answer: "c"
	}
]; 


function gamePlay() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    gameLogic(currentQuestion.question,currentQuestion.answer);
  }
}  

function results() {
  console.log(chalk.bgRed("Your final score:", score));

  for (var j=0; j<highScores.length; j++) {
    var high = highScores[j];
    if(score > high.score){
      console.log(chalk.bgYellow("Conratulations!You achieved a new high score. Please ping me a screenshot and I'll update it in high scores database"));
      break;
    }
  }
}

gamePlay();
results();


