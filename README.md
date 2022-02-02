# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a variation of the traditional Rock Paper Scissors game and was first introduced on the TV show The Big Bang Theory. In this game, users will play against the computer. The user will select a "weapon" of choice and this will be compared to a completely randomly generated computer selection and a winner determined.

Users will learn the rules of the game in order to understand which selections win or lose against each other. There is no skill level required to play this game as it is a game of chance, as such it is only intended to be an entertaining mini game, targetted at both adults and children alike.

![Responsive Mockup](/assets/images/mock-up.png)

## Features 

### Existing Features

- __Header__
  - This is featured at the top of the page and is fully responsive down to 320px width.
  - The font is Bangers and has been used because it has a resemblance to a comic book style font. The colors used are aslo based on a comic book style, particularly The Flash as this is popular with Sheldon Cooper from The Big Bang Theory.
  - The header clearly tells users what game they are playing. 

![Header](/assets/images/page-header.png)

- __Starting The Game__

  - To start the game, a difficulty level must be selected.
  - This is clearly shown to the user via means of text instruction.

![Game Starting View](/assets/images/start-game.png)

- __Difficulty Selection__

  - This section includes 3 buttons for difficulty ratings of Easy, Normal and Hard.
  - The difference between these levels is the moves allowed before a winner is declared. As a game of probability there is a better chance of winning if the moves allowed are greater.
  - If a difficulty is selected and the user changes the difficulty during game play, the moves counter will reset to the new difficulty chosen and the score board will also reset.
  - At game over, these buttons are no longer visible.
  - The colors used for these buttons are based on the UK traffic light system.

![Difficulty Selection Buttons](/assets/images/choose-difficulty.png)

- __Moves Counter__

  - This displays the moves left until the game ends and a winner is declared.
  - The starting number of moves remaining will change depending on difficulty level. Moves allowed are as follows: Easy = 7, Normal = 5 and Hard = 3. 
  - Moves remaining will decrease by one upon mouse click of the weapons buttons.

![Moves Counter](/assets/images/moves-counter.png)

- __Weapon Selection__

  - This section allows users to pick a weapon to use against the computer.
  - On hover, these buttons will turn red with a yellow icon so users can clearly see which weapon they are selecting.
  - On click of these buttons, the moves counter will decrease by one and text wil be displayed to show what the user has picked and the randomly generated computer selection.
  - At game over, these buttons are no longer visible.

![Weapon Selection Buttons](/assets/images/choose-weapon.png)

- __Score Board__

  - This section will show users what the score is of the game.
  - At game over, this remains visible so users are able to clearly see what their total score was. 

![Game Score Board](/assets/images/score-board.png)

- __The Footer/Rules Area__ 

  - The footer section houses a list of the game rules.
  - For larger screen sizes, the text for the rules is white and display is inline as this looked more eye catching and clearly shows the rules upon page loading.
  - At smaller screen sizes the text is black and has block display to allow for better user accessibilty.

![Rules List](/assets/images/rules-area.png)

- __Game Over__

  - Once the moves counter gets to zero then the game is over.
  - This is made clear to the user by displaying a game over message, the outcome of the game and the scores.
  - At game over, a button to play the game again will become visible and on click will reload the page.

![Game Over](/assets/images/game-over.png)

### Features Left to Implement

- A feature I would like to add in the future is to have optional sound effects for the user. Such as for weapon selection and for game outcomes.

## Testing 

- The site has been tested on Chrome, Microsoft Edge, Firefox and Opera.
- I have confirmed that the site is responsive, looks good and is fuctional on all screen sizes down to 320px. This has been done by testing on the dev tools device toolbar on Chrome as well as double checking on my own devices.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Faririx1410.github.io%2Frock-paper-scissors-lizard-spock%2F)
  - ![W3C validator](/assets/images/w3c-validator.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Faririx1410.github.io%2Frock-paper-scissors-lizard-spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - ![(Jigsaw) validator](/assets/images/jigsaw.png)
- JavaScript
  - No significant issues were found when passing through the official [JSHint Javascript validator](https://jshint.com/)
  - After investigation, despite displaying that there are two unused variables, this is not the case. These are both functions that are called upon within the HTML via use of onclick attribute buttons as shown in Code Institute JavaScript Essentials, JavaScript & the DOM.
  - ![(Jigsaw) validator](/assets/images/jshint.png)
- Accessibility
  - I have checked accessibilty by running through Lighthouse via devtools
  - ![Lighthouse](/assets/images/lighthouse.png)

### Bugs

- When running through Lighthouse, SEO was showing as 91. Examining this showed that the document did not have a meta description.After adding this in the HTML, this was ran again and gave a score of 100.
- When running through Lighthouse, the Accessibility was showing as 97. Examining this showed an issue with poor contrast on the Hard difficulty button and the rules list. After changing the colour of the text of the button to black, and changing the text color and font size of the list, this was ran again and gave a score of 100.
- I initially had an issue where the game counter was starting at one below the specified game moves. After looking at this it became apparent that I had called the function again at the end of the code, thus making it appear that there had already been an initial button click on loading the page. After remove this, the issue is resolved.

### Unfixed Bugs

- No unfixed bugs

## Deployment

- The site has been deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab
  - Scroll down to GitHub Pages and select on the "Check It Out Here" link
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, click save.
  - The page will be automatically refreshed with a message stating successful deployment

The live link can be found here - https://aririx1410.github.io/rock-paper-scissors-lizard-spock/

## Credits  

### Content 

- The initial inspiration and code for this project was taken from [Abhi Develops](https://dev.to/abhidevelopssuntech/how-to-make-rock-paper-scissors-in-javascript-47ef) and then edited and expanded for my own requirements.
- [Stack Overflow](https://stackoverflow.com) was a great source of information but was particularly used for help hiding divs during different game play stages [here](https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript), when making the reload or play again button [here](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click) and most of all for help setting my moves counter, where I ended up physically asking for help after struggling for a few days with teh same issue [here](https://stackoverflow.com/questions/70772896/how-do-i-change-amount-of-game-moves-for-different-game-difficulties)
- [W3Schools](https://www.w3schools.com) was very informative throughout especially for understanding objects [here](https://www.w3schools.com/js/js_object_methods.asp) and variables [here](https://www.w3schools.com/js/js_variables.asp)
- [Code Institute](https://learn.codeinstitute.net/) JavaScript Essentials tutorials were consulted throughout for clarification and understanding. Inspiration for the rules section was taken from the example project shown in Portfolio 2: Project Submission videos.
- All of the icons used in this project came from [Font Awesome](https://fontawesome.com/)

### Media

- Favicon.ico icon was generated by [Favicon-Generator](https://www.favicon-generator.org/) using an image of the Spock button in this game

### Special Thanks

- Thanks to my mentor Caleb Mbakwe for his insight and guidance throughout this project.