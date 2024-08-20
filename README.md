# Etch-a-Sketch

## This is a learning project from "The Odin Project" course.

1. Create a webpage with a 16x16 grid of square divs.

   - Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!

   - It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.

   - Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!

2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

- Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

- There are multiple ways to change the color of the divs, including:
  - Adding a new class to the div.
  - Changing the div’s background color using JavaScript.

3. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

- Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

- Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
- Also check out prompts.
- You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
- Push your project to GitHub!

  ## Extra credit

  Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

  - Rather than squares being the same color throughout the grid, randomize the squares’ with interaction.
