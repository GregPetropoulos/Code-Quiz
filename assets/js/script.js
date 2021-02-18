//pseudo code
//set up timer function to count down and to subtract -10seconds from every wrong answer
//start quiz button will start the timer and iterate through multiple choice questions
//multiple choice questions are buttons and 4 of them will be clicked on
//ask for intitials and record the results on the second page 


var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#clock');
var count;
var timerCount = 70;//initialized timer--may need to initialize in the start gane function
var question;
var wrongChoice = false;
var rightChoice = false;
//starting score & starting time
totScore = 70;


var currentQuestionIndex = 0;
//questions to be asked --array-object
var quizQuestions = [
    {
        question: 'Commonly used data type Do Not include?',//key&value
        answers: {//key and the value is an object with key values in it.
            a: 'strings',
            b: 'Boolean',
            c: 'alerts',
            d: 'numbers',
        },
        correctAnswer: 'alerts'//key&value
    },
    {
        question: 'The condition in an if/else statement is enclosed within?',
        answers: {
            a: 'curly brackets',
            b: 'quotes',
            c: 'parentheses',
            d: 'square brackets'
        },
        correctAnswer: 'parentheses'

    },
    {
        question: 'Arrays in JavaScript can be used to store?',
        answers: {
            a: 'numbers and strings',
            b: 'others Arrays',
            c: 'boolean',
            d: 'all of the above'
        },
        correctAnswer: 'all of the above'

    },
    {
        question: 'String values must be enclosed within --- when being assigned to variables?',
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parentheses',
        },
        correctAnswer: 'quotes'

    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is?',
        answers: {
            a: 'JavaScript',
            b: 'terminal/bash',
            c: 'alerts',
            d: 'console.log',
        },
        correctAnswer: 'console.log'

    },
]


//---start game function, starts timer, presents questions and mltpl choices button
function startGame() {
    startButton.remove();
    // rightChoice = false;//????????? not sure if i need this here
    var currentQuestion = quizQuestions[currentQuestionIndex];
    displayQuestion(currentQuestion);
    timer();
}


//---timer function will get called at the start game function
function timer() {
    count = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        //Test if time has ran out
        if (timerCount <= 0) {
            //Clears the interval
            clearInterval(count);
        }
    }, 1000)
    return timerCount;

}
startButton.addEventListener('click', startGame);

//---Function for the questions in quiz
function displayQuestion(question) {
    // console.log('display question:', questions);//to see what this object contains



    var questionElem = document.createElement('h3');//creates an empty h3 tag, stores in questionElem

    questionElem.textContent = question.question;//put text into my h3
    document.getElementById('question').innerHTML = "";
    document.getElementById('question').append(questionElem);//stick my questionElem into #question

    var btnElA = document.createElement('button');//creates the button for multiple choice
    btnElA.textContent = quizQuestions[currentQuestionIndex].answers.a;//access the array object for iteration and write it to the html
    document.getElementById('answer-a').innerHTML = "";
    document.getElementById('answer-a').appendChild(btnElA);//access the assoc div and append the button with content

    var btnElB = document.createElement('button');
    btnElB.textContent = quizQuestions[currentQuestionIndex].answers.b;
    document.getElementById('answer-b').innerHTML = "";
    document.getElementById('answer-b').appendChild(btnElB);

    var btnElC = document.createElement('button');
    btnElC.textContent = quizQuestions[currentQuestionIndex].answers.c;
    document.getElementById('answer-c').innerHTML = "";
    document.getElementById('answer-c').appendChild(btnElC);

    var btnElD = document.createElement('button');
    btnElD.textContent = quizQuestions[currentQuestionIndex].answers.d;
    document.getElementById('answer-d').innerHTML = "";
    document.getElementById('answer-d').appendChild(btnElD);
    //---------------------------------
    //Instead of addEventListener I am using this when user clicks on any button execute checkAnswer which will run the rightAnswer or wrongAnswer function
    //????????????????????????????????????
    //btnElA.setAttribute("onClick", checkAnswer);
    btnElA.onclick = checkAnswer;
    btnElB.onclick = checkAnswer;
    btnElC.onclick = checkAnswer;
    btnElD.onclick = checkAnswer;
};//end of displayQuestions block

// When a button is clicked checkAnswer function will run rightAnswer or wrongAnswer function if conditional is met
// console.log(button.value)
function checkAnswer(event) {
    console.log(event.target.textContent);
    if (quizQuestions[currentQuestionIndex].correctAnswer !== event.target.textContent) {
        timerCount = timerCount - 10;
    }
    
    currentQuestionIndex++;

    if(currentQuestionIndex >= quizQuestions.length) {
        end();
    } else {
        displayQuestion(quizQuestions[currentQuestionIndex])

    }

}


function end() {


    
    window.location.href = "results.html"
}

//end of check answer block
// button.addEventListener('click', checkAnswer) 
//---------Function for form submit initials and read results
//need local storage function
