// DOM Elements
    // Pages
    let homePageEl = $(".homePage");
    let rulesPageEl = $(".rulesPage");
    let lbPageEl = $(".lbPage");
    let quizPageEl = $(".quizPage");

    // Home Page Buttons
    let homeStartBtnEl = homePageEl.find(".homeStartBtn"); // this should lead to the quiz page
    let homeLbBtnEl = homePageEl.find(".homeLbBtn"); // this should lead to the leaderboard page
    
    // Rules Page Buttons
    let rulesHomeBtnEl = rulesPageEl.find(".rulesHomeBtn");
    let rulesStartBtnEl = rulesPageEl.find(".rulesStartBtn");

    // Leaderboard Page
    let lbHomeBtnEl = lbPageEl.find(".lbHomeBtn");

// Home Page Buttons
    // if the 'start quiz' button is clicked, the rules page is shown and hides other pages
    homeStartBtnEl.on("click", function() {
        let rulesHide = true;

        if (rulesHide === true) {
            homePageEl.hide();
            rulesPageEl.show();
            lbPageEl.hide();
            quizPageEl.hide();
            return;
        }
    });

    homeLbBtnEl.on("click", function() {
        let lbHide = true;

        if (lbHide === true) {
            homePageEl.hide();
            rulesPageEl.hide();
            lbPageEl.show();
            quizPageEl.hide();
            return;
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
            return;
        }
    });
    // if the 'start quiz' button is clicked, the quiz page is shown and hides other pages
    rulesStartBtnEl.on("click", function() {
        let quizHide = true;

        if (quizHide === true) {
            homePageEl.hide();
            rulesPageEl.hide();
            lbPageEl.hide();
            quizPageEl.show();
            return;
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
            return;
        }
    });


