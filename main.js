const section = document.querySelector('.container');
const addBtn = document.querySelector('.add-btn')
let allBooks = [];

function Book(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
}
const titleInput = document.querySelector('.title-input')
const authorName = document.querySelector('.author-input')
function bookGenerator() {
    if (titleInput.value !== '' || authorName.value !== '') {
        const newBook = new Book(titleInput.value, authorName.value, allBooks.length);
        allBooks.push(newBook)
    }

    section.innerHTML = ``
    allBooks.forEach((book, index) => {
        const bookCard = document.createElement('article');
        bookCard.classList.add('book');
        bookCard.innerHTML = `
            <p class="title"> ${book.title}</p>
            <p class="author"> ${book.author}</p>
            <button id='${index}' class="remove">Remove</button>
            <hr>
            `;
        section.appendChild(bookCard)
    });
}

addBtn.addEventListener('click', function (e) {
    e.preventDefault()
    bookGenerator()
    titleInput.value = '';
    authorName.value = '';
});

section.addEventListener('click', function (event) {
    if (event.target.className === 'remove') {
        removeBook(event.target.id)
    }
})

function removeBook(id) {
    const index = Number(id)
    allBooks = allBooks.filter((book) => book.id !== index)
    bookGenerator()
}


document.querySelectorAll('.input').forEach((input) => {
    input.addEventListener('input',(event) => {
        event.preventDefault();


        const title = document.querySelector('.title-input').value;
        const author = document.querySelector('.author-input').value;


        const myBook = {
            Title: title,
            Author: author,
        };

        localStorage.setItem('books', JSON.stringify(myBook));
    });
});
