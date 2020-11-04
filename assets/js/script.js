// DOM Elements
    // Pages
    let startPageEl = $(".startPage");
    let rulesPageEl = $(".rulesPage");
    let lbPageEl = $(".lbPage");
    let quizPageEl = $(".quizPage");

    // Start Page Buttons
    let startBtnEl = startPageEl.find(".startBtn");
    let rulesBtnEl = startPageEl.find(".rulesBtn");
    let lbhomeBtnEl = startPageEl.find(".lbhomeBtn");
    let quizBtnEl = startPageEl.find(".startBtn");

    // Info Page Buttons
    let homeBtnEl = rulesPageEl.find(".homeBtn");
    let lbBtnEl = rulesPageEl.find(".lbBtn");

    // Leaderboard Page
    let lbHomePageBtn = lbPageEl.find(".homeBtn");

// Start Page Buttons
    // if the rules button is clicked, the info page is shown and hides other pages
    quizBtnEl.on("click", function() {
        let quizHide = true;

        if (quizHide === true) {
            quizPageEl.show();
            rulesPageEl.hide();
            startPageEl.hide();
            lbPageEl.hide();
            return;
        }
    });

    rulesBtnEl.on("click", function() {
        let rulesHide = true;

        if (rulesHide === true) {
            rulesPageEl.show();
            startPageEl.hide();
            lbPageEl.hide();
            quizPageEl.hide();
            return;
        }
    });

    // if the leaderboard button is clicked, shows leaderboard shown and hides other pages
    lbhomeBtnEl.on("click", function() {
        let lbHide = true;

        if (lbHide === true) {
            lbPageEl.show();
            rulesPageEl.hide();
            startPageEl.hide();
            quizPageEl.hide();
            return;
        }
    });

// Info Page Buttons
    // if the home button is clicked, goes to start page and hides other pages
    homeBtnEl.on("click", function() {
        let homeHide = true;

        if (homeHide === true) {
            startPageEl.show();
            rulesPageEl.hide();
            lbPageEl.hide();
            quizPageEl.hide();
            return;
        }
    });

    lbBtnEl.on("click", function() {
        let lbHide = true;

        if (lbHide === true) {
            lbPageEl.show();
            rulesPageEl.hide();
            startPageEl.hide();
            quizPageEl.hide();
            return;
        }
    });

// Leaderboard Page Button
    // if back button is clicked, goes back to the start page
    lbHomePageBtn.on("click", function() {
        let lbhomeHide = true;

        if (lbhomeHide === true) {
            startPageEl.show();
            rulesPageEl.hide();
            lbPageEl.hide();
            quizPageEl.hide();
            return;
        }
    });


