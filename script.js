let questions = [
   { question:"Who is the president of Kenya",
      answers:[
        {text:"William Ruto",option:true },
        {text:"Stephen Ruto",option:false },
        {text:"Wiliam Ruto",option:false },
        {text:"William Raila",option:false},
      ]

   },
   { question:"What is 2 + 2",
   answers:[
     {text:"22",option:false },
     {text:"4",option:true },
     {text:"6",option:false },
     {text:"2",option:false},
   ]

},
];

let questionEl = document.getElementById("question");
let answersCon = document.querySelector(".answers");
let nextBtn = document.querySelector(".next");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
score = 0;
currentQuestionIndex = 0;
showQuestion();
}

function showQuestion(){
resetState();
let quiz = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionEl.innerHTML = questionNo + '.' + quiz.question;

quiz.answers.forEach(answer=>{
let button = document.createElement("button");
button.innerHTML = answer.text;
button.className = "answer";
answersCon.appendChild(button);
if(answer.option){
  button.dataset.option = answer.option;
}
button.addEventListener("click",selectAnswer);
});
}
function resetState(){
  nextBtn.style.display = "none";
  while(answersCon.firstChild){
    answersCon.removeChild(answersCon.firstChild);
  }
}

function selectAnswer(e){
let ans = e.target;
let isCorrect = ans.dataset.option === 'true';
if(isCorrect){
  ans.classList.add("correct");
  score++;
}
else{
  ans.classList.add("wrong");
}
nextBtn.style.display = "block";
}
function showScore(){
  resetState();
questionEl.innerHTML = `Your Score is ${score} / ${questions.length}!`;
nextBtn.innerHTML = "Restart";
nextBtn.style.display = 'block';
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextBtn.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
  handleNextButton();
}
else{
  startQuiz();
}
});
startQuiz();