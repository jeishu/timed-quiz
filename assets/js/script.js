// DOM Elements
    // Pages
    let startPageEl = $(".startPage");
    let infoPageEl = $(".infoPage");
    let lbPageEl = $(".lbPage");

    // Start Page Buttons
    let startBtnEl = startPageEl.find(".startBtn");
    let rulesBtnEl = startPageEl.find(".rulesBtn");
    let lbhomeBtnEl = startPageEl.find(".lbhomeBtn");

    // Info Page Buttons
    let homeBtnEl = infoPageEl.find(".homeBtn");
    let lbBtnEl = infoPageEl.find(".lbBtn");

    // Leaderboard Page
    let lbHomePageBtn = lbPageEl.find(".homeBtn");

// Start Page Buttons
    // if the rules button is clicked, the info page is shown and hides other pages
    rulesBtnEl.on("click", function() {
        let rulesHide = true;

        if (rulesHide === true) {
            infoPageEl.show();
            startPageEl.hide();
            lbPageEl.hide();
            return;
        }
    });

    // if the leaderboard button is clicked, shows leaderboard shown and hides other pages
    lbhomeBtnEl.on("click", function() {
        let lbHide = true;

        if (lbHide === true) {
            lbPageEl.show();
            infoPageEl.hide();
            startPageEl.hide();
            return;
        }
    });

// Info Page Buttons
    // if the home button is clicked, goes to start page and hides other pages
    homeBtnEl.on("click", function() {
        let homeHide = true;

        if (homeHide === true) {
            startPageEl.show();
            infoPageEl.hide();
            lbPageEl.hide();
            return;
        }
    });

    lbBtnEl.on("click", function() {
        let lbHide = true;

        if (lbHide === true) {
            lbPageEl.show();
            infoPageEl.hide();
            startPageEl.hide();
            return;
        }
    });

// Leaderboard Page Button
    // if back button is clicked, goes back to the start page
    lbHomePageBtn.on("click", function() {
        let lbhomeHide = true;

        if (lbhomeHide === true) {
            startPageEl.show();
            infoPageEl.hide();
            lbPageEl.hide();
            return;
        }
    });


