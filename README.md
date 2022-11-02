# Let's Get Quizzical

This site is aimed at Junior Cycle students looking to revise Mathematics topics. It gives students four topics to choose from. Each topic contains a set number of multiple choice questions and feedbackm is given after each question.

## Features 

- The site has a clear title that gives the user an instant sense of what the website is about: It's a Quiz site.
- The one page format is simple and uncluttered
- The font used is a 
- Each topic has been chosen carefully. They are fundamental to the Junior Cycle Mathematics course.

------

------

## Testing 

- I have tested this site in various browsers:
  - Chrome(my main wokring browser)
  - [Safari](assets/images/safaritest.png)
  - [Firefox](assets/images/firefoxtest.png).

- I have tested the site to ensure that it is responsive and maintains it's structure and integrity with various screen sizes and devices other than my main working device(laptop):
  - [mobile](assets/images/mobiletest.jpg)
  - [tablet](assets/images/tablettest.jpg)
  - [desktop](assets/images/desktoptest.png)

- I have confirmed with users that the text is easy to read and the navigation menu easy to use.
- I have checked that the contact form works and ensured that required fields work as intended and that the form validates the input.

![Lighthouse Accessibility Test Score](assets/images/lighthouse.png)

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C Validator
    - [Index](https://validator.w3.org/nu/?doc=https%3A%2F%2Fculanomeara.github.io%2Flets-talk-about-lego%2Findex.html)
    - [Childhood](https://validator.w3.org/nu/?doc=https%3A%2F%2Fculanomeara.github.io%2Flets-talk-about-lego%2Fchildhood.html)
    - [Teens](https://validator.w3.org/nu/?doc=https%3A%2F%2Fculanomeara.github.io%2Flets-talk-about-lego%2Fteens.html)
    - [Adulthood](https://validator.w3.org/nu/?doc=https%3A%2F%2Fculanomeara.github.io%2Flets-talk-about-lego%2Fadulthood.html)
    - [Contact](https://validator.w3.org/nu/?doc=https%3A%2F%2Fculanomeara.github.io%2Flets-talk-about-lego%2Fcontact.html)
    
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fculanomeara.github.io%2Flets-talk-about-lego%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Fixed Bugs

- I had a number of bugs that I worked thru:
  - Errors with question arrays where the code wasn't picking the correct answer.
  - Issue with changing topic and resetting all of the code to restart quiz.
  - Grid not displaying correctly.
  - Styling issues with grid areas where styling wasn't being applied inside.
  - Very long code sections were removed or tidied up with more efficeient code structure or function.


## Deployment 
### Cloning and Forking
- To CLONE: 
  - Navigate to the repository: [Let's Talk About Lego](https://github.com/culanomeara/lets-talk-about-lego)
  - Above the list of files, click Code.
  - Copy the URL for the repository.
  - Open Terminal and change to the new directory where you want the cloned files to go
  - type git clone and paste in the copied url from the repository

- To FORK:
  - Navigate to the repository: [Let's Talk About Lego](https://github.com/culanomeara/lets-talk-about-lego)
  - At top of page, click on FORK
  - Select the owner, name and description for the new fork.
  - Select which branches you want to fork.
  - Create fork.

### Remote
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, click on the Settings icon 
  - On the left-hand menu, click on Pages
  - From the options that appear, select Deploy from branch, then select MAIN
  - Once you save those changes, the site goes live. It takes about 10 mins before you can see the live site.

The live link can be found here - https://culanomeara.github.io/lets-talk-about-lego/ 


## Credits 

### Content 

- Text is all my own
- Hero image and outer styling and concept inspired by [Code Institute-Love Running](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/blob/main/03-creating-the-hero-image/03-hero-image-cover-text/assets/css/style.css)
- Grid Layout code was inspired by [gridbyexample](https://gridbyexample.com/examples/example13/)
- Thumbnail images and border style inspired by [Study Tonight](https://www.studytonight.com/css-howtos/how-to-create-a-thumbnail-image-with-css)
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- Color Palette is from [Coolors.co](https://coolors.co/e30022-fff600-4cbb17-0063dc-ff681f)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- The font is Glegoo from Google Fonts [Google Fonts](https://fonts.google.com/specimen/Glegoo?query=lego&sort=popularity&preview.text=My%20childhood%20sets&preview.text_type=custom#styles)

### Media

- The background LEGO wallpaper images are from [Wallpaperaccess](https://wallpaperaccess.com/lego-bricks)
- The LEGO set images are from [Brickset](https://brickset.com/)
