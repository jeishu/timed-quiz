// DOM Elements
    // Pages
    let homePageEl = document.querySelector(".homePage");
    let rulesPageEl = document.querySelector(".rulesPage");
    let lbPageEl = document.querySelector(".lbPage");
    let quizPageEl = document.querySelector(".quizPage");
    let formPageEl = document.querySelector(".formPage");
    
    // Home Page Buttons
    let homeStartBtnEl = document.querySelector(".homeStartBtn"); // goes to the rules page
    let homeLbBtnEl = document.querySelector(".homeLbBtn"); // goes to the leaderboard page
    
    // Rules Page Buttons
    let rulesHomeBtnEl = document.querySelector(".rulesHomeBtn"); // goes to the home page
    let rulesStartBtnEl = document.querySelector(".rulesStartBtn"); // goes to the quiz page

    // Leaderboard Page
    let lbHomeBtnEl = document.querySelector(".lbHomeBtn"); // goes to the home page

    // Timer Variable
    let timerEl = document.querySelector(".timer");
    let secondsEl = document.querySelector("#seconds"); // for some reason document.querySelector("#seconds") was not working. 
    
    // Others
    let questionEl = document.querySelector("#question");
    let answerWrapperEl = document.querySelector(".answerWrapper");

    // Quiz Page Buttons
    let choicesEl = Array.from(document.getElementsByClassName("choices"));
        // console.log(choicesEl);
    let choiceAbtnEl = document.querySelector("#choice1btn");
    let choiceBbtnEl = document.querySelector("#choice2btn");
    let choiceCbtnEl = document.querySelector("#choice3btn");
    let choiceDbtnEl = document.querySelector("#choice4btn");

    // Form Page Buttons
    let formHomeBtnEl = document.querySelector(".formHomeBtn");
    let formLbBtnEl = document.querySelector(".formLbBtn");
    let formScoreEl = document.querySelector(".formScore");
    let formSumbitBtnEl = document.querySelector(".formSumbitBtn");

// score of the user 
let scoreArr = [];

// Home Page Buttons
    // if the 'start quiz' button is clicked, the rules page is shown and hides other pages
    homeStartBtnEl.addEventListener("click", function() {
        let rulesHide = true;

        if (rulesHide === true) {
            homePageEl.style.display = "none";
            rulesPageEl.style.display = "block";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "none";
        }
    });
    // if the 'leaderboard' button is clicked, the leaderboard page is shown and hides other pages
    homeLbBtnEl.addEventListener("click", function() {
        let lbHide = true;

        if (lbHide === true) {
            homePageEl.style.display = "none";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "block";
            quizPageEl.style.display = "none";
        }
    });

// Rules Page Buttons
    // if the 'back' button is clicked, the home page is shown and hides other pages
    rulesHomeBtnEl.addEventListener("click", function() {
        let homeHide = true;

        if (homeHide === true) {
            homePageEl.style.display = "block";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "none";
            homePageEl.style.display = "flex";
        }
    });
    // if the 'start quiz' button is clicked, the quiz page is shown and hides other pages
    rulesStartBtnEl.addEventListener("click", function() {
        timeStart();
        gameStart();
        let quizHide = true;

        if (quizHide === true) {
            homePageEl.style.display = "none";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "block";
        }
       
    });

// Leaderboard Page Button
    // if back button is clicked, the home page is shown and hides other pages
    lbHomeBtnEl.addEventListener("click", function() {
        let homeHide = true;

        if (homeHide === true) {
            homePageEl.style.display = "block";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "none";
            homePageEl.style.display = "flex";
        }
    });

// Form Page Button
    // if home page button is clicked, the home page is shown and hides other pages
    formHomeBtnEl.addEventListener("click", function() {
        let formHomeHide = true;

        if (formHomeHide === true) {
            homePageEl.style.display = "block";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "none";
            formPageEl.style.display = "none";
            homePageEl.style.display = "flex";
        }
        // reloads the page so the quiz counter and quizzes are reset
        // location.reload();
    });
    // if leaderboards button is clicked, the home page is shown and hides other pages
    formLbBtnEl.addEventListener("click", function() {
        let formLbHide = true;

        if (formLbHide === true) {
            homePageEl.style.display = "block";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "none";
            formPageEl.style.display = "none";
            homePageEl.style.display = "flex";
        }
        // reloads the page so the quiz counter and quizzes are reset
        // location.reload();
    });

// Questions and Timers
let questionsCurrent = {};
let questionsLeft = [];
let questionCounter = 0;
let questionTotal = 5;

let displayTime = "";

// Array of Questions and Answers
let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<scripting>",
        choice3: "<js>",
        choice4: "<javascript>",
        answer:   1
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choice1: "<!--This is a comment-->",
        choice2: "'No this is a comment",
        choice3: "// No, no. This is a comment",
        choice4: " ~ Fools, I am the comment. ~",
        answer:   3
    },
    {
        question: "How do you call a function named: justFunction?",
        choice1: "call justFunction",
        choice2: "function justFunction()",
        choice3: "justFunction() - Hello?",
        choice4: "justFunction()",
        answer:   4
    },
    {
        question: "How do you write a if statement?",
        choice1: "If roses are red and violets are blue, why isn't my coding working?",
        choice2: "if (violet != blue) {}",
        choice3: "if [blue == color] {}",
        choice4: "if {statement} ()",
        answer:   2
    },
    {
        question: "Which of these is an array?",
        choice1: "var color = ['I', 'am', 'not', 'an', 'array'];",
        choice2: "let color = ('I', 'am', 'an', 'array');",
        choice3: "const color = {'I', 'am', 'totally', 'an', 'array'};",
        choice4: "array color = ['I', 'am', 'definitely', 'not', 'an', 'array'];",
        answer:   1
    }
];

function gameStart(){
    questionCounter = 0;
    questionsLeft = [...questions];
        console.log(questionsLeft);
    questionChange();
}

displayTime = 90;

function timeStart() {
    let timerInterval = setInterval(function() {
        displayTime--;
        secondsEl.textContent = displayTime;    

        // if timer hits zero, it will go to the form page
        if(displayTime === 0) {
            clearInterval(timerInterval);
            formScoreEl.textContent = displayTime;
            scoreArr.push(displayTime);
        }
        // if all questions are answered before the timer runs out, it will got to the form page
        else if (questionsLeft.length === 0 || questionCounter >= questionTotal) {
            clearInterval(timerInterval);
            formScoreEl.textContent = displayTime;
            scoreArr.push(displayTime);
        }
    }, 1000);
}
// Changes the questions and answers randomly from the array
function questionChange() {
    
    if(questionsLeft.length === 0 || questionCounter >= questionTotal) {
        //  go to form page
        quizPageEl.style.display = "none";
        formPageEl.style.display = "block";
    }

    questionCounter++;
    let questionIndex = Math.floor(Math.random() * questionsLeft.length);
    questionsCurrent = questionsLeft[questionIndex];
    questionEl.innerText = questionsCurrent.question;

    choicesEl.forEach( choice => {
        let number = choice.dataset["number"];
        choice.innerText = questionsCurrent["choice" + number];
    });

    questionsLeft.splice(questionIndex, 1);
}

let choiceText = "";

// Checks Answer
choicesEl.forEach( choice => {
    choice.addEventListener("click", event => {
        // console.log(event.target);
        
        let choiceSelect = event.target;
        let choiceAnswer = choiceSelect.dataset["number"];
       
        let choiceCorrect = choiceAnswer == questionsCurrent.answer ? "correct" : "incorrect";
        
        choiceSelect.parentElement.classList.add(choiceCorrect);

        setTimeout(function() {
            choiceSelect.parentElement.classList.remove(choiceCorrect);
            displayTime = displayTime - 20;
            questionChange();
        }, 1000);

        // if (choiceAnswer == questionsCurrent.answer) {
        // 
        // }
        // else {
        //     displayTime = displayTime - 20;
        // }
        // console.log(choiceCorrect);
        
    })
});

function choiceTextRemove() {
    if(questionCounter != 0){
        quizPageEl.children[(questionCounter - 1)].setAttribute("style", "display:none");
    } 
}

