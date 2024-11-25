# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of desktop design](public/images/Screenshot%20desktop.jpg)

### Links

- Solution URL: [Github repository](https://github.com/Jenny-Eikens/news-homepage)
- Live Site URL: [Live site](https://jenny-eikens.github.io/news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Typescript
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### What I learned

I learned more about CSS grid for this project. I found the use of grid-template-areas in particular very helpful for creating the responsive layout of the page. This approach saved me a lot of time and effort. See the way I set it up below:

```css
main {
  display: grid;
  gap: 2rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "image"
    "title"
    "main-text"
    "side"
    "bottom1"
    "bottom2"
    "bottom3";
}

@media (min-width: 768px) {
  main {
    grid-template-areas:
      "image image side"
      "title main-text side"
      "bottom1 bottom2 bottom3";
  }
}
```

### Continued development

By far the biggest challenge for me in this project was the nav bar. I am not super confident in the realm of positioning in general and conditional positioning especially. It took me a while to get to the point where I could display the nav at the top on bigger screens and have it slide in from the side on smaller screens. I also had never previously worked with an overlay for when the side menu is open, so that was a challenge as well. Overall, I'd like to keep working on my CSS grid skills and get more confident in positioning elements.
I also noticed that I don't yet fully understand how to pass variables and functions down as props in React, which is something I would like to work on in future projects.
Another thing I haven't done before but would like to learn is how to implement dark mode.

## Author

- Website - [Jennifer Eikens](https://jenny-eikens.github.io/portfolio-page/#projects)
- Frontend Mentor - [@Jenny-Eikens](https://www.frontendmentor.io/profile/Jenny-Eikens)
- GitHub - [Jenny-Eikens](https://github.com/Jenny-Eikens)
