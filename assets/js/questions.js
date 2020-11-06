// DOM Elements
    // Timer Variable
    let timerEl = $(".timerCounter");
    let secondsEl = $("#seconds");
    
    // Others
    let questionEl = $(".question");
    let answerWrapperEl = $(".answerWrapper");
    // Quiz Page Buttons
    let choiceAbtnEl = $("#choiceAbtn");
    let choiceBbtnEl = $("#choiceBbtn"); 
    let choiceCbtnEl = $("#choiceCbtn");
    let choiceDbtnEl = $("#choiceDbtn");

let displayTime = 180;

function timeStart() {
    let timerInterval = setInterval(function() {
        
        secondsEl.textContent = displayTime;
        displayTime--;

        // console.log("displayTime " + displayTime);
        console.log(secondsEl.textContent);
        if(displayTime === 0) {
            clearInterval(timerInterval);
            console.log("This works");
        }

    }, 1000);
}
rulesStartBtnEl.on("click", function() {
    timeStart();
    
});


// let questions = [
//     {
//         question: "Inside which HTML element do we put the JavaScript?",
//         choiceA1: "<script>",
//         choiceB1: "<scripting>",
//         choiceC1: "<js>",
//         choiceD1: "<javascript>"
//     }
// ];
