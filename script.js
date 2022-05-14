const note_down = document.querySelector(".sticky button");



note_down.addEventListener("click", () => {
        const title = document.querySelector("[name='title']");
        const author = document.querySelector("[name='author']");
        const pages = document.querySelector("[name='pages']");
        const read = document.querySelector("[name='read']");

        const err =  " wasn't filled out";
        if(!title.value) return alert("Title"+err);
        if(!author.value) return alert("Author"+err);
        if(!pages.value) return alert("The Pages amount"+err);


        function Book(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        const bookTitle = new Book(title.value, author.value, pages.value, read.checked);
        
        
        (() => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const title = document.createElement("p");
        title.classList.add("title"); 
        title.textContent = bookTitle.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.classList.add("author"); 
        author.textContent = bookTitle.author;
        card.appendChild(author);

        const hr = document.createElement("hr");
        card.appendChild(hr);

        const pages = document.createElement("p");
        pages.classList.add("pages"); 
        pages.textContent = `${bookTitle.pages} pages`;
        card.appendChild(pages);

        const read = document.createElement("button");
        if(!bookTitle.read.checked) read.classList.add("unread"); 
        read.classList.add("read");
        card.appendChild(read);

        const remove = document.createElement("button");
        remove.classList.add("remove"); 
        remove.textContent = "REMOVE";
        card.appendChild(remove);

        const main = document.querySelector("main");
        main.appendChild(card);
        
    })();

    (() => {
        title.value = "";
        author.value = "";
        pages.value = "";
        read.checked = false;
    })();

    const main = document.querySelector("main");
    const card = main.querySelector(".card:last-child");
    const readbtn = card.querySelector(".read");
    const remove = card.querySelector(".remove");


readbtn.addEventListener("click", () => {
    readbtn.classList.toggle("unread");
}); 

remove.addEventListener("click", () => {
    card.remove();
})

});