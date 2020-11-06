// DOM Elements
    // Pages
    let homePageEl = $(".homePage");
    let rulesPageEl = $(".rulesPage");
    let lbPageEl = $(".lbPage");
    let quizPageEl = $(".quizPage");

    // Home Page Buttons
    let homeStartBtnEl = homePageEl.find(".homeStartBtn"); // goes to the rules page
    let homeLbBtnEl = homePageEl.find(".homeLbBtn"); // goes to the leaderboard page
    
    // Rules Page Buttons
    let rulesHomeBtnEl = rulesPageEl.find(".rulesHomeBtn"); // goes to the home page
    let rulesStartBtnEl = rulesPageEl.find(".rulesStartBtn"); // goes to the quiz page

    // Leaderboard Page
    let lbHomeBtnEl = lbPageEl.find(".lbHomeBtn"); // goes to the home page

    // Timer Variable
    let secondsEl = document.querySelector("#seconds"); // for some reason $("#seconds") was not working. 
    
    // Others
    let questionEl = document.querySelector(".question")
    let answerWrapperEl = document.querySelector(".answerWrapper");
    // Quiz Page Buttons
    let choicesEl = document.querySelector(".choices");
    let choiceAbtnEl = document.querySelector("#choiceAbtn");
    let choiceBbtnEl = document.querySelector("#choiceBbtn");
    let choiceCbtnEl = document.querySelector("#choiceCbtn");
    let choiceDbtnEl = document.querySelector("#choiceDbtn");

// Home Page Buttons
    // if the 'start quiz' button is clicked, the rules page is shown and hides other pages
    homeStartBtnEl.on("click", function() {
        let rulesHide = true;

        if (rulesHide === true) {
            homePageEl.hide();
            rulesPageEl.show();
            lbPageEl.hide();
            quizPageEl.hide();
            
        }
    });
    // if the 'leaderboard' button is clicked, the leaderboard page is shown and hides other pages
    homeLbBtnEl.on("click", function() {
        let lbHide = true;

        if (lbHide === true) {
            homePageEl.hide();
            rulesPageEl.hide();
            lbPageEl.show();
            quizPageEl.hide();
          
        }
    });

// Rules Page Buttons
    // if the 'back' button is clicked, the home page is shown and hides other pages
    rulesHomeBtnEl.on("click", function() {
        let homeHide = true;

        if (homeHide === true) {
            homePageEl.show();
            rulesPageEl.hide();
            lbPageEl.hide();
            quizPageEl.hide();
            
        }
    });
    // if the 'start quiz' button is clicked, the quiz page is shown and hides other pages
    rulesStartBtnEl.on("click", function() {
        timeStart();

        let quizHide = true;

        if (quizHide === true) {
            homePageEl.hide();
            rulesPageEl.hide();
            lbPageEl.hide();
            quizPageEl.show();
            
        }
        startGame();
        
    });

// Leaderboard Page Button
    // if back button is clicked, the home page is shown and hides other pages
    lbHomeBtnEl.on("click", function() {
        let homeHide = true;

        if (homeHide === true) {
            homePageEl.show();
            rulesPageEl.hide();
            lbPageEl.hide();
            quizPageEl.hide();
            
        }
    });

// Starts Time
let displayTime = 90;

function timeStart() {
    let timerInterval = setInterval(function() {
        displayTime--;
        secondsEl.textContent = displayTime;
    
        // console.log("displayTime " + displayTime);
        // console.log(secondsEl.textContent);
        // console.log(typeof secondsEl.textContent);

        if(displayTime === 0) {
            clearInterval(timerInterval);
            // console.log("This works");
        }

    }, 1000);
}


let currentQuestion = [];
let questionCounter = 0;
let score = 0;
let questionsLeft = [];
let totalQuestions = 5;

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA1: "<script>",
        choiceB1: "<scripting>",
        choiceC1: "<js>",
        choiceD1: "<javascript>",
        answer:   "<script>"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choiceA1: "<!--This is a comment-->",
        choiceB1: "'No this is a comment",
        choiceC1: "// No, no. This is a comment",
        choiceD1: " ~ Fools, I am the comment. ~",
        answer:   "// No, no. This is a comment"
    },
    {
        question: "How do you call a function named: justFunction?",
        choiceA1: "call justFunction",
        choiceB1: "function justFunction()",
        choiceC1: "justFunction() - Hello?",
        choiceD1: "justFunction()",
        answer:   "justFunction()"
    },
    {
        question: "How do you write a if statement?",
        choiceA1: "If roses are red and violets are blue, why isn't my coding working?",
        choiceB1: "if (!violet === blue) {}",
        choiceC1: "if [blue == color] {}",
        choiceD1: "if {statement} ()",
        answer:   "if (!violet === blue) {}"
    },
    {
        question: "Which of these is an array?",
        choiceA1: "var color = ['I', 'am','not','an','array'];",
        choiceB1: "let color = ('I', 'am','an','array');",
        choiceC1: "const color = {'I', 'am','total','an','array'};",
        choiceD1: "array color = ['I', 'am','definitely', 'not','an','array'];",
        answer:   "var color = ['I', 'am','not','an','array'];"
    },
];

function startGame() {
    questionCounter = 0;
    score = 0;
    questionsLeft = [...questions];
    // console.log(questionsLeft);
    questionChange();
}

// Changes the questions and answers randomly from the array
function questionChange() {
    // the counter changes
    questionCounter++;
    // randomizes the questions and answers everytime you take the quiz
    let questionIndex = Math.floor(Math.random() * questionsLeft.length);
    currentQuestion = questionsLeft[questionIndex];
    questionEl.textContent = currentQuestion.question;

    choiceAbtnEl.textContent = currentQuestion.choiceA1;
    choiceBbtnEl.textContent = currentQuestion.choiceB1;
    choiceCbtnEl.textContent = currentQuestion.choiceC1;
    choiceDbtnEl.textContent = currentQuestion.choiceD1;

    // takes the question you already used out of the array
    questionsLeft.splice(questionIndex, 1);
}

