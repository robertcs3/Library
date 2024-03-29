let myLibrary = []

function Book() {}


/* Take user input and store into myLibrary array */
function addBookToLibrary(title, author, pages, status) {

    let book = {};
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.status = status;


    if (!existingBooks.includes(book.title)) myLibrary.push(book);
    

}

let existingBooks = [];

/* Display books in catalog */
function displayCatalog() {

    myLibrary.forEach(book => {
        /* Add book to catalog if it doesn't exist already */
        if (!existingBooks.includes(book.title)) {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', myLibrary.indexOf(book));
            let title = document.createElement('p');
            let author = document.createElement('p');
            let pages = document.createElement('p');
           
            let button = document.createElement('button');
            button.setAttribute('class', myLibrary.indexOf(book));
            /* Add card class to catalog */
            bookList.appendChild(card);

            /* Add attributes of book to the card */
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(pages);
            changeStatus(card, book.status);
            card.appendChild(button);

            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent =  book.pages;
            button.textContent = "Remove";

            existingBooks.push(book.title);


            /* Add remove button functionality */
            remove();

        }

    })

}

function remove() {
    let remove = document.querySelectorAll('.card :last-child');
    for (const element of remove) {
        element.addEventListener('click', () => {
            myLibrary.forEach(book => {
                if (book.title == element.parentElement.firstElementChild.textContent) {
                    element.parentElement.remove(element.parentElement.children);
                    myLibrary.splice(myLibrary.indexOf(book), 1);
                    existingBooks.splice(book.title);
                }
            })
        });
    }

  
}


function changeStatus(card, status) {
    let toggle = document.createElement('label');
    let box = document.createElement('input');
    let slider = document.createElement('span');

    if (status == 'unread') {
        toggle.setAttribute('class', 'switch');
        box.setAttribute('type', 'checkbox');
        slider.setAttribute('class', 'slider round');
    } else {
        toggle.setAttribute('class', 'switch');
        box.setAttribute('type', 'checkbox',);
        box.checked = true;
        slider.setAttribute('class', 'slider round');
    }  

    /* Change status on toggle */
    myLibrary.forEach(book => {
        toggle.addEventListener('click', () => {
            if (box.checked) {
                book.status = 'read';
            } else {
                book.status = 'unread';
            }
        })
    });

    toggle.appendChild(box);
    toggle.appendChild(slider);
    card.appendChild(toggle);

}
let bookList = document.getElementById('book-list');

let addNew = document.getElementById('new-book');

const form = document.getElementById('form');

let submit = document.getElementById('submit-button');

let authorInput = document.getElementById('author-name');

let titleInput = document.getElementById('title-name');

let pagesInput = document.getElementById('page-numbers');

let statusInput = document.getElementById('status-input');

form.style.display = 'none';


/* Add a new book */
submit.addEventListener('click', () => {
    if (!titleInput.value == '' && !authorInput.value == ''
        && !pagesInput.value == '') {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value,
            statusInput.value);

        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        

        displayCatalog();

        form.style.display = 'none';

    }

})





/* Show or hide form  when button is clicked */
addNew.addEventListener('click', () => {


    if (form.style.display === 'none') {

        form.style.display = 'block';
    
    } else {

        form.style.display = 'none';
    }
})







