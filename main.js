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
    books += `
            <li>${arr[i].title}</li> <br />
            <li>${arr[i].author}</li> <br />
            <li><button onclick="removeBook(${i})">Remove</button></li>
            <hr />
            `;
  }
  return books;
}

function showBooks() {
  const listOfBooks = document.querySelector('.container');
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

function addNewBook(bookTitle, bookAuthor) {
  const myBook = new Book(bookTitle, bookAuthor);
  Localstoragebook.push(myBook);
  updateLocalStorage();
  showBooks();
}

function removeBook(i) {
  Localstoragebook.splice(i, 1);
  updateLocalStorage();
  showBooks();
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.book-title');
  const author = document.querySelector('.author-name');
  e.preventDefault();
  addNewBook(title.value, author.value);
});

window.onload = showBooks();
