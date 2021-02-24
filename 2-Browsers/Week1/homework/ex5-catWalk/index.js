'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing 
   for 5 seconds, and then replace the img with the original image and have it 
   continue the walk.
-----------------------------------------------------------------------------*/
const imgElem = document.querySelector('img');
imgElem.style.left = '0px';

function catWalk() {
  let position = 0;

  // TODO: refactoring
  const start = setInterval(() => {
    if (position < window.innerWidth / 2) {
      position += 10;
    } else {
      clearInterval(start);
      imgElem.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';

      setTimeout(() => {
        const resume = setInterval(() => {
          position += 10;
          imgElem.style.left = `${position}px`;

          if (position > window.innerWidth) {
            clearInterval(resume);
            position = 0;
            imgElem.style.left = `${position}px`;
            catWalk();
          }
        }, 50);

        imgElem.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      }, 5000);
    }

    imgElem.style.left = `${position}px`;
  }, 50);
}

window.addEventListener('DOMContentLoaded', catWalk());
