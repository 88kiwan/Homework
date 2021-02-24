//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

function createBookList(books) {
  document.querySelector('h1').style.marginTop = '10px';
  // create and style the ul element
  const ulElem = document.createElement('ul');

  ulElem.style.cssText = `
                        list-style:none;
                        display:flex;
                        flex-wrap:wrap;
                        padding:20px;
                        width:calc( 100% - 41px)`;

  // loop over the books array and for each element
  books.forEach((book) => {
    // create and style li element
    const liElem = document.createElement('li');
    liElem.style.cssText = `
                        width:calc(25% - 51px);
                        margin:15px;
                        padding:10px;
                        padding-top:25px;
                        min-width:350px`;

    // create p element
    const pElem = document.createElement('p');
    // set the book title and author as content for the p element
    pElem.innerHTML = `${book.title} - ${book.author}`;

    // create, set alt attribute and style img element
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', `${book.title} - Book`);
    imgElem.style.height = '275px';

    // assign a specific image
    if (book.author === 'Don Norman') {
      imgElem.src = './assets/the_design_of_everyday_things.jpg';
    } else if (book.author === 'Brian Christian') {
      imgElem.src = './assets/the_most_human_human.jpg';
    } else {
      imgElem.src = './assets/the_pragmatic_programmer.jpg';
    }

    // test if book alreadyRead property is false
    if (!book.alreadyRead) {
      // set the bg color to red
      liElem.style.backgroundColor = 'red';
    } else {
      // otherwise green bg color
      liElem.style.backgroundColor = 'green';
    }

    // append the li element to the ul
    ulElem.append(liElem);

    // append the p element to the li
    liElem.append(pElem);

    // append the img element to the li
    liElem.append(imgElem);
  });
  // eslint-disable-next-line
  // return the secret sauce
  return ulElem;
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
