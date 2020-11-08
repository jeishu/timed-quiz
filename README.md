# Timed Quiz

## Description

I created a quiz for Javascript fundamentals. 

## Table of Contents

* [Features](#Features)
* [Links](#Links)
* [Screenshots](#Screenshots)
* [Language](#Language)
* [Code-Example](#Code-Example)
* [Reference](#Reference)
* [Tests/Issues](#Tests/Issues)
* [Contribute/Credits](#Contribute/Credits)
* [License](#License)

## Features

* The application:
    * Has a countdown timer.
    * Can deduct time if the user miss a question.
    * Can show you if you are right or wrong depending on the color (red - wrong, green - right).
    * Can save your score at the end of the quiz into the local storage.
    * Can save your initials, or name at the end of the quiz into the local storage.
    * Can save both your name and your score into a leaderboard page.

## Links

* [Project Repo: Timed Quiz](https://github.com/jeishu/timed-quiz)
* [GitHub Page: Timed Quiz](https://jeishu.github.io/timed-quiz/)

## Screenshots

How the page looks like when you open it.

![home](./images/homepage.png)

How the rules page look like when you click start quiz on the home page.

![rules](./images/rulesPage.png)

How the answer look like if you answer correctly.

![right](./images/right.png)

How the answer look like if you answer incorrectly.

![wrong](./images/wrong.png)

## Language

I used JavaScript, HTML and CSS. I did initially used jQuery framework, but switch over back to vanilla JavaScript. The jQuery code can be found on './js/jQuery.js'

## Code-Example

HTML: There isn't much in HTML. There are 5 sections acting as pages, their class name is .___Page
```
<div class="homePage">
    <h1>JavaScript Quiz</h1>

    <!-- button paths to the rules page -->
    <div class="homeStartBtn">Start Quiz</div>
    <!-- button for the highscores -->
    <div class="homeLbBtn">Leaderboard</div>
</div>
```

CSS: A good 99% of the styling is in CSS. All buttons are made from div tags with hover styling.
```
.homeStartBtn:hover, 
.homeLbBtn:hover, 
.rulesHomeBtn:hover, 
.rulesStartBtn:hover,
.lbHomeBtn:hover,
.formHomeBtn:hover,
.formLbBtn:hover {
    cursor: pointer;
    color: #f5f5f5;
    background: rgb(202, 202, 202);

    transition: .5s;
}
```

JavaScript: Sections are being shown as pages through the style.display = ""; in JS
```
homeStartBtnEl.addEventListener("click", function() {
    let rulesHide = true;

    if (rulesHide === true) {
        homePageEl.style.display = "none";
        rulesPageEl.style.display = "block";
        lbPageEl.style.display = "none";
        quizPageEl.style.display = "none";
    }
});
```

jQuery: The framework was replaced by vanilla JavaScript.
```
 homeStartBtnEl.on("click", function() {
    let rulesHide = true;

    if (rulesHide === true) {
        homePageEl.hide();
        rulesPageEl.show();
        lbPageEl.hide();
        quizPageEl.hide();
    }
});
```

## Reference

These are websites I used to aid me in learning different syntax and different methods, functions, etc for Javascript.

> - [Developer Mozilla](https://developer.mozilla.org/en-US/)
> - [W3School](https://www.w3schools.com/)
> - [StackOverflow](https://www.stackoverflow.com/)

These websites aid me in creating this README.md

> - [GitHub Docs](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax) || Learn most of my README syntax here.
> - [Akash Nimare](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3) || Based my README from his person.
> - [Mark Down Guide](https://www.markdownguide.org/cheat-sheet/) || README Syntax

## Tests/Issues

> jQuery
- I started off using jQuery, but learn that so functions and methods within jQuery likes being used with other jQuery methods and functions.
- Being limited in my knowledge in jQuery, I switched to vanilla JavaScript.
- The learning process definitely help me learn and get more comfortable with JS and jQuery.
> Syntax, Misspell, etc
- Most of my problems within my code is that I would forget I set a variable to one name and make another.
- I would forget to capitalize when needed to stay consistent.
> Score Keeping
- I had a good amount of issues getting my scores rendering out.
- At first came out undefined, but Dan, a good classmate of mine, was able to help me see some syntax and misspell errors.

## Contribute/Credits

- My class instructor, Calvin
- My tutor, Sangeetha
- Dan, the extra eye that saw my problem with why my score rendering and name rendering was undefined.

## License

MIT © [Jeremy Zhu :: jeishu](https://github.com/jeishu)

