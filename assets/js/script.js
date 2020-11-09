// DOM Elements
    // Pages
    let homePageEl = document.querySelector(".homePage");
    let rulesPageEl = document.querySelector(".rulesPage");
    let lbPageEl = document.querySelector(".lbPage");
    let quizPageEl = document.querySelector(".quizPage");
    let formPageEl = document.querySelector(".formPage");
    
    // Home Page
    let homeStartBtnEl = document.querySelector(".homeStartBtn"); // goes to the rules page
    let homeLbBtnEl = document.querySelector(".homeLbBtn"); // goes to the leaderboard page
    
    // Rules Page
    let rulesHomeBtnEl = document.querySelector(".rulesHomeBtn"); // goes to the home page
    let rulesStartBtnEl = document.querySelector(".rulesStartBtn"); // goes to the quiz page

    // Leaderboard
    let lbHomeBtnEl = document.querySelector(".lbHomeBtn"); // goes to the home page
    let lbClearBtnEl = document.querySelector(".lbClearBtn"); // clears scores and name
    let scoreTableEl = document.querySelector("#scoreTable"); // for the leaderboards
    

    // Quiz Page
    let answerWrapperEl = document.querySelector(".answerWrapper");
    let questionEl = document.querySelector("#question");
    let choicesEl = Array.from(document.getElementsByClassName("choices")); // Array.from makes the children inside the parent container an array
        // console.log(choicesEl);
    let choiceAbtnEl = document.querySelector("#choice1btn");
    let choiceBbtnEl = document.querySelector("#choice2btn");
    let choiceCbtnEl = document.querySelector("#choice3btn");
    let choiceDbtnEl = document.querySelector("#choice4btn");
        // Timer Variable
    let timerEl = document.querySelector(".timer"); // timer container
    let secondsEl = document.querySelector("#seconds"); // the timer in seconds

    // Form Page
    let formHomeBtnEl = document.querySelector(".formHomeBtn");
    let formLbBtnEl = document.querySelector(".formLbBtn");
    let formScoreEl = document.querySelector(".formScore");
    let formSubmitBtnEl = document.querySelector(".formSubmitBtn");
    let userInitialsEl = document.querySelector("#userInitials");

// score of the user 
let scoreArr = [];

// Home Page Buttons
    // if the 'start quiz' button is clicked, the rules page is shown and hides other pages
    homeStartBtnEl.addEventListener("click", function() {
        homePageEl.style.display = "none";
        rulesPageEl.style.display = "block";
        lbPageEl.style.display = "none";
        quizPageEl.style.display = "none";
        
    });
    // if the 'leaderboard' button is clicked, the leaderboard page is shown and hides other pages
    homeLbBtnEl.addEventListener("click", function() {
        homePageEl.style.display = "none";
        rulesPageEl.style.display = "none";
        lbPageEl.style.display = "block";
        quizPageEl.style.display = "none";
        
    });

// Rules Page Buttons
    // if the 'back' button is clicked, the home page is shown and hides other pages
    rulesHomeBtnEl.addEventListener("click", function() {
            homePageEl.style.display = "block";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "none";
            homePageEl.style.display = "flex";
    });
    // if the 'start quiz' button is clicked, the quiz page is shown and hides other pages
    rulesStartBtnEl.addEventListener("click", function() {
        timeStart();
        gameStart();
            homePageEl.style.display = "none";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "block";
    });

// Leaderboard Page Button
    // if back button is clicked, the home page is shown and hides other pages
    lbHomeBtnEl.addEventListener("click", function() {
        homePageEl.style.display = "block";
        rulesPageEl.style.display = "none";
        lbPageEl.style.display = "none";
        quizPageEl.style.display = "none";
        homePageEl.style.display = "flex";

        // reloads the page so the quiz counter and quizzes are reset
        location.reload();
    });

// Form Page Button
    // if home page button is clicked, the home page is shown and hides other pages
    formHomeBtnEl.addEventListener("click", function() {
            homePageEl.style.display = "block";
            rulesPageEl.style.display = "none";
            lbPageEl.style.display = "none";
            quizPageEl.style.display = "none";
            formPageEl.style.display = "none";
            homePageEl.style.display = "flex";
    });
    // if leaderboards button is clicked, the leaderboard is shown and hides other pages
    // formLbBtnEl.addEventListener("click", function() {
    //         homePageEl.style.display = "none";
    //         rulesPageEl.style.display = "none";
    //         lbPageEl.style.display = "block";
    //         quizPageEl.style.display = "none";
    //         formPageEl.style.display = "none";
    // });

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
        // console.log(questionsLeft);
    questionChange();
}

displayTime = 90;

// starts timer function and keeps scores after quiz
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

    // randomize the questions using Math.random
    questionCounter++;
    let questionIndex = Math.floor(Math.random() * questionsLeft.length);
    questionsCurrent = questionsLeft[questionIndex];
    questionEl.innerText = questionsCurrent.question;

    // using 'dataset'  to pick out the numbers from the data-number from the HTML
    choicesEl.forEach( choice => {
        let number = choice.dataset["number"];
        choice.innerText = questionsCurrent["choice" + number];
    });

    // removes the question after it is used
    questionsLeft.splice(questionIndex, 1);
}


// Checks Answer on click
choicesEl.forEach( choice => {
    choice.addEventListener("click", event => {
        // console.log(event.target);
        
        // targets what is being clicked
        let choiceSelect = event.target;
        let choiceAnswer = choiceSelect.dataset["number"];
       
        let choiceCorrect = "";
        
        // tells the use if they are correct or not depending on the color, red -> wrong, green -> right
        if (choiceAnswer == questionsCurrent.answer) {
            choiceCorrect = "correct";
            choiceSelect.parentElement.classList.add(choiceCorrect);
            setTimeout(function() {
                choiceSelect.parentElement.classList.remove(choiceCorrect);
                questionChange();
            }, 800);
        }
        else {
            choiceCorrect = "incorrect";
            displayTime = displayTime - 15;
            choiceSelect.parentElement.classList.add(choiceCorrect);
            setTimeout(function() {
                choiceSelect.parentElement.classList.remove(choiceCorrect);
                questionChange();
            }, 800);
        }
        
        console.log(choiceCorrect);
        
    })
});

scoreArr = [];

// Gets the previcously stored items
function scoreFunction() {
    let  scoreKept = JSON.parse(localStorage.getItem("scoreInput"));
    // console.log(typeof scoreKept);
        scoreArr = [];
       
        if(scoreKept){
            for(let  i = 0; i<scoreKept.length;i++){
                scoreArr.push(scoreKept[i]);
            }
        }
}

// adds new scores into the list
function scoreKeeping() {
    
    scoreFunction();

    let  userInput = {
        name: userInitialsEl.value.trim(),
        score: formScoreEl.innerText
    }
         console.log(userInput);
    scoreArr.push(userInput);
    localStorage.setItem("scoreInput", JSON.stringify(scoreArr));
}

// check the submit button
formSubmitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(userInitialsEl.value){
        scoreKeeping();
        alert("ヽ(￣～￣　)ノ Your score is saved on the Leaderboards. ");
        userInitialsEl.value = "";
        homePageEl.style.display = "block";
        rulesPageEl.style.display = "none";
        lbPageEl.style.display = "none";
        quizPageEl.style.display = "none";
        formPageEl.style.display = "none";
        homePageEl.style.display = "flex";
    }else{
        alert("(￣_￣)・・・ Initals Please.");
        return;
    }
});

// renders the score and keeps in local storage
function scoreRender() {
    
    let  scoreKept = JSON.parse(localStorage.getItem("scoreInput"));
    console.log(scoreKept);

    //  checks and gets previous scores and renders them
    if(scoreKept !== null){
        for(let  i = 0; i < scoreKept.length; i++) {
            
            let  score = scoreKept[i];

            let  table = document.createElement("tr");
            scoreTable.appendChild(table);

            let  scoreInitials = document.createElement("td");
            scoreInitials.innerText = scoreKept[i]["name"];
            table.appendChild(scoreInitials);
            
            let  scoreSaved = document.createElement("td");
            scoreSaved.innerText = score.score;
            table.appendChild(scoreSaved);
            
            // document.querySelector("#formFiller").style.display = "none";
        }
    }
    else {
        let  table = document.createElement("tr");
        scoreTable.innerHTML = "";
        scoreTable.appendChild(table);
        
        let  scoreInitials2 = document.createElement("th");
        scoreInitials2.innerText = "Name";
        table.appendChild(scoreInitials2);

        let  scoreSaved2 = document.createElement("th");
        scoreSaved2.innerText = "Score";
        table.appendChild(scoreSaved2);
    
        // document.querySelector("#formFiller").style.display = "none";
    }
}
scoreRender();    

function clearScores() {
    localStorage.removeItem("scoreInput");
    scoreRender();
}

lbClearBtnEl.addEventListener("click", function() {
    let clearConfirm = confirm("..・ヾ(。＞＜)シ Do you really want to clear your scores? Press OK to clear. Press CANCEL to not cancel.");

    if(clearConfirm === true) {
        alert("~(>_<~) Your scores are cleared.")
        clearScores();
    }
    else {
        alert("(￢ ￢) Your scores are cleared. ");
    }
});