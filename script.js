let myLibrary = [];

function Book(title,author,pages,read) {
    this.title=title
    this.author=author
    this.pages = pages
    this.read = read;
}

function addBoookToLibrary() {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = (document.getElementById('read').checked)?"Read":"Not read";

/*     console.log(`${title} was written by ${author} with ${pages} pages.`)
 */
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);

    let newCard = document.createElement("div");
    document.querySelector(".card-container").appendChild(newCard);
    newCard.className="card";
    for (const [key,value] of Object.entries(newBook)){
        let newKey = document.createElement('div');
        newCard.appendChild(newKey);
        newKey.className="property";

        let keyName = document.createElement('div');
        newKey.appendChild(keyName);
        keyName.className="key";
        keyName.innerHTML=key.charAt(0).toUpperCase() + key.slice(1);

        let keyValue = document.createElement('div');
        newKey.appendChild(keyValue);
        keyValue.className="value";
        keyValue.innerHTML=value;

    }
    console.log(Object.entries(newBook));
}

/* function addCard(){
    let newDiv = document.createElement("div");
    document.getElementsByClassName("card-container").appendChild(newDiv);
    newDiv.className="card";
    document.getElementsByClassName("card").appendChild(newDiv);
    newDiv.className="title";
    document.getElementsByClassName("title").appendChild(newDiv);

} */
const btn = document.querySelector("button");
btn.addEventListener('click', () => {
/*   document.getElementById('form').checkValidity();
 */   
    if (document.forms[0].reportValidity()) {
        addBoookToLibrary();
        console.log(myLibrary);
        document.getElementById('form').reset();
    }
    });