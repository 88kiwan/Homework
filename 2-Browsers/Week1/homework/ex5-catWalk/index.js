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

let currPosition = 0;

function catWalk() {
  const imgElem = document.querySelector('img');
  const endPosition = window.innerWidth;
  const pausePosition = (endPosition - 300) / 2;
  const origSrc = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  const newSrc =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';

  const walk = setInterval(() => {
    currPosition !== pausePosition
      ? (currPosition += 10)
      : ((imgElem.src = newSrc),
        clearInterval(walk),
        setTimeout(() => {
          imgElem.src = origSrc;
          imgElem.alt = 'Cat dancing';
          currPosition += 10;
          catWalk();
        }, 5000)),
      currPosition > endPosition && (currPosition = 0),
      (imgElem.style.left = `${currPosition}px`);
  }, 50);
}

window.addEventListener('DOMContentLoaded', catWalk());
