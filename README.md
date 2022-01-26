# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a variation of the traditional Rock Paper Scissors game and was first introduced on the TV show The Big Bang Theory. In this game, users will play against the computer. The user will select a "weapon" of choice and this will be compared to a completely randomly generated computer selection and a winner determined.

Users will learn the rules of the game in order to understand which selections win or lose against others. There is no skill level required to play this game as it is a game of chance and is targetted at both adults and children alike.

![Responsive Mockup](/assets/images/mock-up.png)

## Features 

### Existing Features

- __Header__
  - This is featured at the top of the page and is fully responsive down to 320px width.
  - The font is Bangers and has been used because it has a resemblance to a comic book style font. The colors used are aslo based on a comic book style, particularly The Flash as this is popular with Sheldon Cooper from The Big Bang Theory.
  - The header clearly tells users what game they are playing. 

![Header/Nav Bar](/assets/images/page-header.png)

- __Difficulty Selection__

  - This section includes a photograph with text overlay to allow users to see exactly what the page is about and what the intended use of the page is.
  - The image chosen for the landing page is one of "Pannekaken", or Norwegian Pancakes. These are depicted in heart shapes in an effort to indicate a love for Nordic cuisine to the user.

![Landing Page](/assets/images/choose-difficulty.png)

- __Favourite Recipes Section__

  - This section allows users to see what recipes are the most popular amongst other users.
  - This section will be updated to allow users to see what are currently the most popular recipes.
  - The images in this section are links to open a page for that recipe.
  - When in desktop view, the images on this section have a hover feature that gives a fade effect with the names of the recipes overlayed. This has been removed for smaller screens and the recipe will be visible without the need to hover.

![Favourite Recipes](/assets/images/readme/favourites-section.png)

- __Leave a Review Section__

  - This section will allow users to rate recipes.
  - This section will allow users to submit comments and reviews about specific recipes.

![Leave a Review Section](/assets/images/readme/review-section.png)

- __User Reviews Section__

  - This section will allow users to see the recipe reviews of other users.
  - This section is aimed to inspire users to both try the recipes and also to leave a review themselves.

![User Reviews Section](/assets/images/readme/user-reviews.png)

- __The Footer__ 

  - The footer section houses links to social media sites, these links open in a new tab.
  - For larger screen sizes the footer is fixed to allow users the ability to access the links without having to scroll to the bottom of the page.

![Footer](/assets/images/readme/footer.png)

- __Recipes__

  - This page will allow users to select which category of recipe they are looking for, Drinks, Savoury or Sweet.
  - The images on this page are links to open a page for the users chosen recipe category.
  - When in desktop view, the images on this page have a hover feature that displays a faded effect with the names of the recipe catergories overlayed. On smaller screens this is removed and the category names are always visible.  

![Recipes](/assets/images/readme/recipes-page.png)

- __Recipe Category Pages__

  - There are three category pages; Drinks, Savoury and Sweet.
  - The images on these pages are links to open specific recipe pages.
  - When in desktop view, the images on these pages have a hover feature that display a faded effect with the names of the specific recipes overlayed. On smaller screens this is removed and the recipe names are always visible.

![Recipe Selection](/assets/images/readme/recipe-selection.png)

- __Specific Recipe Pages__

  - The individual recipe pages allow the user to see an image of the food, the ingredients needed and the method.
  - The images on these pages are links to open specific recipe pages.
  - When in desktop view, the images on these pages have a hover feature that display a faded effect with the names of the specific recipes overlayed. On smaller screens this is removed and the recipe names are always visible.
  - There is a back button at the bottom of each recipe to take you back to the category page the recipe is featured on in order to make it easier for users to get back to that page. 

![Recipe Selection](/assets/images/readme/recipe-pages.png)

- __Get In Touch Page__

  - This page will allow the users to sign up and also to leave a message.
  - The message feature will allow the user to make suggestions about featured recipes.

![Get In Touch](/assets/images/readme/get-in-touch.png)

### Features Left to Implement

- A feature I would like to add in the future is a search bar to be able to search for a recipe based off a particular ingredient

## Testing 

- The site has been tested on Chrome, Microsoft Edge and Firefox.
- I have confirmed that the site is responsive, looks good and is fuctional on all screen sizes down to 320px. This has been done by testing on the dev tools device toolbar on Chrome as well as double checking on my own devices.
- I have confirmed that both forms work. They require entry in all fields (with the exception of the review message box which I have left optional), both select drop downs require a selected object and the submit button works. 

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Faririx1410.github.io%2Fnordic-kitchen%2F)
  - ![W3C validator](/assets/images/readme/w3c-validator.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Faririx1410.github.io%2Fnordic-kitchen%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - ![(Jigsaw) validator](/assets/images/readme/jigsaw.png)
- Accessibility
  - I have checked accessibilty by running through Lighthouse via devtools
  - ![Lighthouse](/assets/images/readme/lighthouse.png)

### Bugs

- I noticed that when checking the responsiveness on smaller screen sizes, I had developed a slight horizontal scroll. Using Chrome Dev Tools I could see that there were elements on the page that were slightly larger than the screen width. Upon further investigation it became apparent that this was the width of the hover effect I had put on the images in the Favourites section, after restyling this, the scroll was removed.
- When running the home page through Lighthouse, the Accessibility was showing as 97. Examining this showed an issue with poor contrast on the form submit button. After changing the colour of the text and background of the button, this was ran again and gave a score of 100.
- When using the W3C validator, "error element option without attribute label must not be empty" was being displayed. Every attempt at fixing this bug created an entirely new bug. After a lot of searching through various channels, I was able to correct this using a non-breaking space.

### Unfixed Bugs

- No unfixed bugs

## Deployment

- The site has been deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab
  - Scroll down to GitHub Pages and select on the "Check It Out Here" link
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, click save.
  - The page will be automatically refreshed with a message stating successful deployment

The live link can be found here - https://aririx1410.github.io/nordic-kitchen/

## Credits  

### Content 

- The initial code for the header, footer and circle images/containers was taken from the Code Institute [Love Running](https://learn.codeinstitute.net/dashboard) project
- Use of a Z-index for fixed header/footer was taken from [Code Convey](https://codeconvey.com/css-fixed-header-scrolling-body/)
- [Stack Overflow](https://stackoverflow.com) was a great source of information but was particularly used for help making header/footer static for smaller screens [here](https://stackoverflow.com/questions/21252631/what-is-the-opposite-of-positionfixed-css), when making the hover effect on recipe images [here](https://stackoverflow.com/questions/11869805/how-do-i-make-an-invisible-text-input-box-visible-on-hover), creating a message box on a form [here](https://stackoverflow.com/questions/54827262/contact-form-text-area-enters-and-scrolling) and fixing an error in the review form [here](https://stackoverflow.com/questions/22237658/html5-validation-error-with-select-required-attribute/31800584)
- Help centering the hover overlay text was found [here](https://iampalash.hashnode.dev/center-text-vertically-and-horizontally-in-css)
- [W3Schools](https://www.w3schools.com) was very informative throughout especially for understanding inline/block/inline-block displays [here](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1)
- Code was taken from [here](https://codepen.io/z9group/pen/rjqBow) when making the drop downs on the review form.
- To make the user reviews section, code was initially taken from [here](https://www.youtube.com/watch?v=O-QUBZuZlXM)
- The star icons in the reviews sections, undo icon on recipe pages and social media icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Recipes

- Apple Punsch - [AllRecipes](http://allrecipes.co.uk/recipe/6299/hot-spiced-apple-punch.aspx)
- Baked Salmon - [Downshiftology](https://downshiftology.com/recipes/dijon-baked-salmon/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly)
- Elk Burger - [EatElkMeat.com](https://eatelkmeat.com/recipes/elk-burger/)
- Glogg - [TheSpruceEats](https://www.thespruceeats.com/traditional-glogg-recipe-3510987?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly)
- Kanelbullar - [LondonEats](https://londoneats.wordpress.com/2012/02/19/kanelbullar-swedish-cinnamon-buns/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly)
- Norwegian Waffles - [MainlyFood](http://www.mainlyfood.com/norwegian-waffles/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly)
- Orange White Wine Punsch - [Saveur](https://www.saveur.com/article/Recipes/White-Wine-Punch/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly)
- Risgrynsgröt - [Food.com](https://www.food.com/recipe/norwegian-rice-pudding-438557?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly)
- Swedish Meatballs - [DamnDelicious](https://damndelicious.net/2014/02/21/swedish-meatballs/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly)

### Media

- All images used are from [Pixabay](https://pixabay.com/)
- Favicon.ico icon was generated by [Favicon-Generator](https://www.favicon-generator.org/) using a logo that I created on Logo Maker app by Iris Studios

### Special Thanks

- Thanks to my mentor Caleb Mbakwe for his insight and guidance throughout this project.