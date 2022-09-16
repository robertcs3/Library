let myLibrary = [
    {
        title: 'Book1',
        author: 'Bobby',
        pages: '500',
        status: 'read',

    },
    {
        title: 'Book2',
        author: 'Sammy',
        pages: '520',
        status: 'unread',

    },
    {
        title: 'Book3',
        author: 'Lucy',
        pages: '455',
        status: 'read',

    },
]

function Book() {

}


/* Take user input and store into myLibrary array */
function addBookToLibrary(title, author, pages, status) {
    let book = {};
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.status = status;

    myLibrary.push(book);
}


/* Display books in catalog */
function displayCatalog () {
    myLibrary.forEach(book => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', myLibrary.indexOf(book));
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let status = document.createElement('p');
        let button = document.createElement('button');
        button.setAttribute('class', myLibrary.indexOf(book));
        /* Add card class to catalog */
        catalog.appendChild(card);

        /* Add attributes of book to the card */
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(button);

        title.textContent = "Title: " + book.title;
        author.textContent = "Author: " + book.author;
        pages.textContent = "Pages: " + book.pages;
        status.textContent = book.status;
        button.textContent = "Remove";
    })
    
}

let catalog = document.getElementById('catalog-container');

let addNew = document.getElementById('new-book');

const form = document.getElementById('form');

form.style.display = 'none';




displayCatalog();




addNew.addEventListener('click', () => {
   
    /* Show or hide form  when button is clicked */
    if (form.style.display === 'none') {
      
        form.style.display = 'block';
      } else {
       
        form.style.display = 'none';
      }
})







