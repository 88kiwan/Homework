'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

document.body.style.cssText = `font-family:'Arial',sans-serif`;

const nickName = document.getElementById('nickname');
nickName.innerText = 'Zer0n';

const favFood = document.getElementById('fav-food');
favFood.innerText = 'Seafood';

const homeTown = document.getElementById('hometown');
homeTown.innerText = 'Amsterdam';

const liElem = document.querySelectorAll('li');
liElem.forEach((li) => li.setAttribute('class', 'list-item'));
