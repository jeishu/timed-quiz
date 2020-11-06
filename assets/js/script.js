// DOM Elements
    // Pages
    let homePageEl = $(".homePage");
    let rulesPageEl = $(".rulesPage");
    let lbPageEl = $(".lbPage");
    let quizPageEl = $(".quizPage");
    let formPageEl = $(".formPage");
    
    // Home Page Buttons
    let homeStartBtnEl = $(".homeStartBtn"); // goes to the rules page
    let homeLbBtnEl = $(".homeLbBtn"); // goes to the leaderboard page
    
    // Rules Page Buttons
    let rulesHomeBtnEl = $(".rulesHomeBtn"); // goes to the home page
    let rulesStartBtnEl = $(".rulesStartBtn"); // goes to the quiz page

    // Leaderboard Page
    let lbHomeBtnEl = $(".lbHomeBtn"); // goes to the home page

    // Timer Variable
    let timerEl = $(".timer");
    let secondsEl = $("#seconds"); // for some reason $("#seconds") was not working. 
    
    // Others
    let questionEl = $(".question")
    let answerWrapperEl = $(".answerWrapper");

    // Quiz Page Buttons
    let choicesEl = $(".choices");
    let choiceAbtnEl = $("#choiceAbtn");
    let choiceBbtnEl = $("#choiceBbtn");
    let choiceCbtnEl = $("#choiceCbtn");
    let choiceDbtnEl = $("#choiceDbtn");

    // Form Page Buttons
    let formHomeBtnEl = $(".formHomeBtn");
    let formLbBtnEl = $(".formLbBtn");
    let formScoreEl = $(".formScore");

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
        questionChange();
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

// Form Page Button
    // if home page button is clicked, the home page is shown and hides other pages
    formHomeBtnEl.on("click", function() {
        let formHomeHide = true;

        if (formHomeHide === true) {
            homePageEl.show();
            rulesPageEl.hide();
            lbPageEl.hide();
            quizPageEl.hide();
            formPageEl.hide();
        }
    });
    // if leaderboards button is clicked, the home page is shown and hides other pages
    formLbBtnEl.on("click", function() {
        let formLbHide = true;

        if (formLbHide === true) {
            homePageEl.hide();
            rulesPageEl.hide();
            lbPageEl.show();
            quizPageEl.hide();
            formPageEl.hide();
        }
    });

// Array of Questions and Answers
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
        choiceB1: "if (violet != blue) {}",
        choiceC1: "if [blue == color] {}",
        choiceD1: "if {statement} ()",
        answer:   "if (!violet === blue) {}"
    },
    {
        question: "Which of these is an array?",
        choiceA1: "var color = ['I', 'am', 'not', 'an', 'array'];",
        choiceB1: "let color = ('I', 'am', 'an', 'array');",
        choiceC1: "const color = {'I', 'am', 'totally', 'an', 'array'};",
        choiceD1: "array color = ['I', 'am', 'definitely', 'not', 'an', 'array'];",
        answer:   "var color = ['I', 'am', 'not', 'an', 'array'];"
    }
];

// Starts Time
let questionCounter = 0;
let displayTime = "";

answerWrapperEl.on("click", answerCheck);

// Changes the questions and answers randomly from the array
function questionChange() {
    questionCounter++;
    questionEl.text(questions[questionCounter].question);
    choiceAbtnEl.text(questions[questionCounter].choiceA1);
    choiceBbtnEl.text(questions[questionCounter].choiceB1);
    choiceCbtnEl.text(questions[questionCounter].choiceC1);
    choiceDbtnEl.text(questions[questionCounter].choiceD1);
}

function timeStart() {
    
    displayTime = 90;
    questionEl.text(questions[questionCounter].question);
    choiceAbtnEl.text(questions[questionCounter].choiceA1);
    choiceBbtnEl.text(questions[questionCounter].choiceB1);
    choiceCbtnEl.text(questions[questionCounter].choiceC1);
    choiceDbtnEl.text(questions[questionCounter].choiceD1);

    let timerInterval = setInterval(function() {
        displayTime--;
        secondsEl.text(displayTime);    

        // if timer hits zero, it will go to the form page
        if(displayTime === 0) {
            clearInterval(timerInterval);
            // console.log("This works");
            quizPageEl.hide();
            formPageEl.show();
            formScoreEl.text(displayTime);
        }
        // if all questions are answered before the timer runs out, it will got to the form page
        else if (questionCounter > questions.length-1) {
            clearInterval(timerInterval);
            quizPageEl.hide();
            setTimeout(function(){
                formPageEl.show();
                formScoreEl.text(displayTime);
            }, 1000);
        }
    }, 1000);
}

let kaomoji = "";

function answerCheck(e) {
    let userChoice = e.target.id;
    if (userChoice == "choiceAbtn" || userChoice == "choiceBbtn" || userChoice == "choiceCbtn" || userChoice == "choiceDbtn") {
        let choiceText = document.getElementById(userChoice).innerText;
        console.log(choiceText);
        let answerChoice = (choiceText === questions[questionCounter].answer);
        if (answerChoice) {
            kaomoji = document.createElement("p");
            kaomoji.textContent = "You did it!";
            quizPageEl.append(kaomoji);
        }
        else {
            kaomoji = document.createElement("p");
            kaomoji.textContent = "Wrong Answer!";
            quizPageEl.append(kaomoji);
            displayTime.textContent = displayTime - 10;
        }
        questionChange();
    }
}