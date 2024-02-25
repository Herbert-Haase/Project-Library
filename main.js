#! /home/herbert/.nvm/versions/node/v20.11.0/bin/node

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages ${this.read}`
    );
  }
}

function addBookToLibrary() {
  for (let book of myLibrary) {
    if (book.onDisplay) {
      continue;
    } else {
      book.onDisplay = true;
    }
    const lib = {};
    let book_card = document.createElement("div");
    book_card.className = "book-card";

    lib.book_title = document.createElement("h2");
    lib.book_title.className = "book-title";
    lib.book_title.textContent = book.title;

    lib.book_author = document.createElement("p");
    lib.book_author.className = "book-author";
    lib.book_author.textContent = book.author;

    lib.book_pages = document.createElement("p");
    lib.book_pages.className = "book-pages";
    lib.book_pages.textContent = book.pages;

    lib.book_read = document.createElement("p");
    lib.book_read.className = "book-read-status";
    lib.book_read.textContent = book.read;

    for (let card in lib) {
      book_card.appendChild(lib[card]);
    }
    return book_card;
  }
}

function askUserForBookInfo() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read-status").value;
  console.log(title, author, pages, read);

  return new Book(title, author, pages, read);
}

document.querySelector("#add-book").addEventListener("click", function () {
  document.querySelector("#book-dialog").showModal();
});

function confirmSelection() {
  myLibrary.push(askUserForBookInfo());
  document.querySelector(".container").appendChild(addBookToLibrary());
}

document.querySelector("#submit-dialog").addEventListener("click", function () {
  confirmSelection();
});
