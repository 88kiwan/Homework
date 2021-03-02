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
  const ulElem = document.createElement('ul');

  ulElem.style.cssText = `
                        list-style:none;
                        display:flex;
                        flex-wrap:wrap;
                        padding:20px;
                        width:calc( 100% - 41px)`;

  books.forEach((book) => {
    const liElem = document.createElement('li');
    liElem.style.cssText = `
                        width:calc(25% - 51px);
                        margin:15px;
                        padding:10px;
                        padding-top:25px;
                        min-width:350px`;

    const pElem = document.createElement('p');
    pElem.innerText = `${book.title} - ${book.author}`;

    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', `${book.title} - Book`);
    imgElem.style.height = '275px';

    switch (book.title.toLowerCase()) {
      case 'the design of everyday things':
        imgElem.src = './assets/the_design_of_everyday_things.jpg';
        break;
      case 'the most human human':
        imgElem.src = './assets/the_most_human_human.jpg';
        break;
      case 'the pragmatic programmer':
        imgElem.src = './assets/the_most_human_human.jpg';
        './assets/the_pragmatic_programmer.jpg';
    }

    book.alreadyRead
      ? (liElem.style.backgroundColor = 'green')
      : (liElem.style.backgroundColor = 'red');

    ulElem.append(liElem);

    liElem.append(pElem);

    liElem.append(imgElem);
  });
  // eslint-disable-next-line
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
