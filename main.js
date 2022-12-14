/* eslint-disable no-unused-vars */
if (localStorage.getItem('My Books') === null) {
  localStorage.setItem('My Books', JSON.stringify([]));
}

const Localstoragebook = JSON.parse(localStorage.getItem('My Books'));

function updateLocalStorage() {
  localStorage.setItem('My Books', JSON.stringify(Localstoragebook));
}

function createListOfBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    let liClass = 'dark-bakcground';
    if (i % 2 === 0) {
      liClass = 'book-li';
    }
    books += `
            <li class= '${liClass}'>${arr[i].title} by ${arr[i].author} <button onclick="removeBook(${i})">Remove</button></li> <br />
            `;
  }
  return books;
}

function showBooks() {
  const listOfBooks = document.querySelector('.container');
  // listOfBooks.creatElement('h2');
  // listOfBooks.innerText = 'All Awesome Books';
  listOfBooks.innerHTML = `
              <ul class="book-ul"/>
              ${createListOfBooks(Localstoragebook)}</ul>
          `;
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function clearFields() {
  document.querySelector('.book-title').value = '';
  document.querySelector('.author-name').value = '';
}

function addNewBook(bookTitle, bookAuthor) {
  const myBook = new Book(bookTitle, bookAuthor);
  Localstoragebook.push(myBook);
  updateLocalStorage();
  showBooks();
  clearFields();
}

function removeBook(i) {
  Localstoragebook.splice(i, 1);
  updateLocalStorage();
  showBooks();
  clearFields();
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.book-title');
  const author = document.querySelector('.author-name');
  e.preventDefault();
  addNewBook(title.value, author.value);
});

window.onload = showBooks();

// ======== NAVIGATIONS =================

const contactLink = document.querySelector('.contact-us');
// console.log(contactLink);
const listOfBooks = document.querySelector('.container');
// console.log(listOfBooks);
const booksection = document.querySelector('.add-book');
const listLink = document.querySelector('.list');
const contactSection = document.querySelector('.contact');
const addNewLink = document.querySelector('.add-new');
// console.log(addNewLink);
const titleBookOne = document.querySelector('.books-title');
// console.log(titleBook);

// Date and Time
const showDate = document.querySelector('.our-date');
const date = new Date();
const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
const currenttime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
showDate.innerHTML = `${currentDate.toString()} ${currenttime}`;

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  titleBookOne.style.display = 'block';
  listOfBooks.style.display = 'block';
  contactSection.style.display = 'none';
  booksection.style.display = 'none';
});

addNewLink.addEventListener('click', (e) => {
  e.preventDefault();
  booksection.style.display = 'block';
  listOfBooks.style.display = 'none';
  contactSection.style.display = 'none';
  titleBookOne.style.display = 'none';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  booksection.style.display = 'none';
  listOfBooks.style.display = 'none';
  contactSection.style.display = 'block';
  titleBookOne.style.display = 'none';
});