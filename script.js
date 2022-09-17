let myLibrary = [
   
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

let existingBooks = [];

/* Display books in catalog */
function displayCatalog () {
   


    myLibrary.forEach(book => {
        if (!existingBooks.includes(book.title)){
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', myLibrary.indexOf(book));
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let status = document.createElement('button');
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

        existingBooks.push(book.title);

        }
        
    })
    
}
let catalog = document.getElementById('catalog-container');

let addNew = document.getElementById('new-book');

const form = document.getElementById('form');

form.style.display = 'none';







let submit = document.getElementById('submit-button');

let authorInput = document.getElementById('author-name');

let titleInput = document.getElementById('title-name');

let pagesInput = document.getElementById('page-numbers');

let statusInput = document.getElementById('status-input');

submit.addEventListener('click', () => {
    if (!titleInput.value == '' && !authorInput.value == ''
     && !pagesInput.value == '') {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value,
            statusInput.value);

        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        statusInput.value = '';

        displayCatalog();

     }
   

       
    
    console.log(myLibrary);
})





addNew.addEventListener('click', () => {
   
    /* Show or hide form  when button is clicked */
    if (form.style.display === 'none') {
      
        form.style.display = 'block';
      } else {
       
        form.style.display = 'none';
      }
})







