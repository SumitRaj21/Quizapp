// const questionObj = 
//     {
//       category: 'Food & Drink',
//       id: 'qa-1',
//       correctAnswer: 'Three',
//       options: ['Two', 'Three', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     };

const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];




let playerScore=0;
let currentQuestion=0;
const qDiv=document.getElementById('question'); //question div
const optDiv=document.getElementById('options'); //option div
const scoreDiv=document.getElementById('score'); //score div


//-----suffle function---------
function shuffle(options){
  for(let i=options.length-1; i>=0; i--){
    const j= Math.floor(Math.random()*i+1);
    [options[i],options[j]]=[options[j],options[i]];
  }
  return options;
}
showQuestion();
function showQuestion(){
  const {correctAnswer,options,question}=quesJSON[currentQuestion];
  
  qDiv.innerText=question;

  const suffledOptions=shuffle(options);
  suffledOptions.forEach((option)=>{
  const btn=document.createElement('button');
  btn.innerText=option;
  optDiv.appendChild(btn);
  btn.addEventListener('click',()=>{
    if(option===correctAnswer){
      playerScore++;
    }else{
      playerScore=playerScore-0.25;
    }
    scoreDiv.textContent=`Score:${playerScore}`;
    optDiv.innerHTML='';
    
    currentQuestion++;
    if(currentQuestion<quesJSON.length){
      showQuestion();
    }else{
      qDiv.textContent="Quiz Completed !!";
       optDiv.textContent="";
    }

  })
})
}





