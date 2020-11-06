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
    let secondsEl = $("#seconds");
    
    // Others
    let questionEl = $(".question");
    let answerWrapperEl = $(".answerWrapper");
    // Quiz Page Buttons
    let choiceAbtnEl = $("#choiceAbtn");
    let choiceBbtnEl = $("#choiceBbtn"); 
    let choiceCbtnEl = $("#choiceCbtn");
    let choiceDbtnEl = $("#choiceDbtn");

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

let displayTime = 180;

function timeStart() {
    let timerInterval = setInterval(function() {
        displayTime--;
        secondsEl.textContent = displayTime;
    
        // console.log("displayTime " + displayTime);
        console.log(secondsEl.textContent);
        // console.log(typeof secondsEl.textContent);

        if(displayTime === 0) {
            clearInterval(timerInterval);
            console.log("This works");
        }

    }, 1000);
}

// let questions = [
//     {
//         question: "Inside which HTML element do we put the JavaScript?",
//         choiceA1: "<script>",
//         choiceB1: "<scripting>",
//         choiceC1: "<js>",
//         choiceD1: "<javascript>"
//     }
// ];
