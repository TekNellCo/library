let library = [];
let addBook = document.getElementById('addbook');
let closeBook = document.querySelector('.close');
let center = document.querySelector('.center')
let formBox = document.getElementById('formbox');
let container = document.querySelector('.bookcardcontainer');
let closeCard = document.querySelectorAll('.exit');
let bookCardContainer = document.querySelector('.bookcardcontainer');

// TOGGLE FOR VISUAL ON FORMBOX
addBook.addEventListener('click',()=>{
    if(center.style.display === "flex"){
        center.style.display = "none"
    }else{
        center.style.display = "flex"
    }
})

// FORMBOX CLOSE BUTTON
document.querySelector('.close').addEventListener('click',(e)=>{
    e.preventDefault();
    center.style.display = "none";

})

// SUBMITS INFORMATION AND TRIGGERS LIBRARY FUNCTION
document.querySelector('.submit').addEventListener('click',(e)=>{
    e.preventDefault();
    LibraryInput();
})


// TURNS INPUT INTO OBJECT AND PUSHES OBJECT INTO ARRAY, THEN SENDS INFO TO CARD CREATOR
function LibraryInput(){
    let movie = {
        title : document.getElementById('booktitle').value,
        pages : document.getElementById('pagesread').value,
        comment : document.getElementById('comments').value,
    }
    library.push(movie);
    cardCreator(movie.title,movie.pages,movie.comment);
    formBox.reset();
}

// RECIEVES INFORMATION FROM LIBRARY INPUT AND CREATES CARD ELEMENTS
function cardCreator(title,pages,comment){ 
    let bookCard = document.createElement('div');
    let left = document.createElement('left');
    let h30 = document.createElement('h3');
    let h31 = document.createElement('h3');
    let h32 = document.createElement('h3');
    let right = document.createElement('right');
    let exit = document.createElement('button');
    let readBox = document.createElement('div');
    let labelCheck = document.createElement('label')
    let inputCheck = document.createElement('input')
    inputCheck.type = "checkbox"

bookCardContainer.append(bookCard);
bookCard.append(left);
left.append(h30);
left.append(h31);
left.append(h32);
bookCard.append(right);
right.append(exit);
right.append(readBox);
readBox.append(labelCheck);
readBox.append(inputCheck);

// bookCard.classList.add = "bookcard";
bookCard.className = "bookcard"
left.className = "left";
right.className = "right";
readBox.className = "readbox";

h30.textContent = `Title: ${title}`
h31.textContent = `Pages: ${pages}`
h32.textContent = `Comments: ${comment}`

exit.textContent = "X"
labelCheck.textContent = "Read"

}









