# This... is... JEOPARDY!
Thank you for taking the time to do this code exercise, hopefully you have some fun along the way!

For this project, we are looking to create a simple `Jeopardy!` like game board:

![Jeopardy Board =400x](https://www.jeopardy.com/sites/default/files/styles/article_image_960_/public/files/image//Assets/jeopardy/images/s34_jbuzz/november/j-boards/jp_jbuzz_jeffect_submission_840x473.jpg?itok=GmsSmwrW)

[Jeopardy on Wikipedia](https://en.wikipedia.org/wiki/Jeopardy!)

The goal is to spend (up to) 2 hours to create a simple interpretation of the Jeopardy game board. What we are looking for is `Best Practices` in modern web development in all areas (scripting, HTML, and CSS), good use of the Vue framework and its features, as well as your creativity and problem solving.

*There is no expectation to have a perfect, beautiful app constructed.* However, _the app should run_! Do the best you can, have fun, and please feel to reach out with any questions you may have ([grace.lin@neurotrack.com](mailto:grace.lin@neurotrack.com))

## When you are done
Once you're happy with what you've done, please share your work with us in one of the following ways:

* zip the files *except for the `node_modules` folder* and email it back to us.
* upload the zip to Google Drive and share the link
* set up a git repository with your preferred vendor and share the project with us.

### User Stories
```
As a User, When I run the App, I want to see the Game Board

AC's
- The Game Board has the approximate layout of the standard Jeopardy Game Board, with columns that have a header and list of question Tiles displaying the dollar value of the question
```

```
As a User, When I select a Question from the Game Board, I want to see the Question displayed with a list of possible answers.

AC's
- when a user clicks on a Tile, display the question associated with that Category and Value
- There are Answers displayed below the question
```

```
As a User, When I click on an answer, I am notified if whether I have chosen correctly or incorrectly.

AC's
- Each question can only be answered once
```

### Milestones:
1. Get Questions List - use the `fetchQuestions` from the `Jeopardy` Mixin rather than accessing the `questions` prop directly.
2. Display Game Board - does not need to be too fancy
3. When a user clicks an item in the Game Board, show the corresponding Question and and the Answers
4. When a User selects an Answer, verify it and show feedback
5. Track User's score. A correct answer increases the User's winnings by the `value` amount; an incorrect decrements by that amount.
6. Have fun!

### Screenshots

![alt-text-1](screenshots/screen-1.png "screen-1")

![alt-text-2](screenshots/screen-2.png "screen-2")

![alt-text-3](screenshots/screen-3.png "screen-3")

### Future Impromevents

- Upgrade project to Vue3.
- Inclusion of packages for unit tests and end-to-end tests (Vue Test and Cypress).
- Mobile application oriented styling (Mobile First).
- Inclusion of accessibility for the visually impaired.
- Inclusion of Prettier for code formatting.

### Unit tests to cover in the future

- Check that the component representing the question (GameQuestion) is coloring the elements in the correct way for success and failure cases.
- Verify if the component relative to the question value (GameBoxMoney), is rendering the correct active and deactivated states when passed different values in its properties.
- Verify that the main container (TakeHome) is performing the correct flows:
    - Verify that when answering all questions, the component renders the game over screen;
    - Verify that the question already answered is correctly blocked;

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
