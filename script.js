let movieLibrary = [];
let form = document.querySelector('form');
let listMovies = document.querySelector('.listmovies');
let addMovies = document.querySelectorAll('.movieadd');
let welcomeScreen = document.querySelector('.welcome');
let formScreen = document.querySelector('.formbox');
let addedScreen = document.querySelector('.added');
let libraryScreen = document.querySelector('.library');
let libraryButtons = document.querySelectorAll('.checklibrary');
let rating = document.querySelector('option')


// DISPLAYS LIBRARY WHILE REMOVING OTHER DISPLAYS
libraryButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    welcomeScreen.style.display = "none";
    formScreen.style.display = "none";
    libraryScreen.style.display = "flex";
    tableCreator();
    })
})

// DISPLAY MOVIE FORM WHILE REMOVING OTHER DISPLAYS
addMovies.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        formScreen.style.cssText = "display:flex";
        welcomeScreen.style.cssText = "display:none";
        libraryScreen.style.display = "none"

    })
})

// CLOSES CONFIRMATION SCREEN
document.querySelector('.okayadded').addEventListener('click',()=>{
    addedScreen.style.display = "none";
})

// INPUTS THE FORM DATA INTO OBJECT KEYS AND PUSHES IT TO THE ARRAY THEN RESETS FORM AND POPS UP CONFIRMATION
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let movie = {
        title : document.getElementById('moviename').value,
        rating : document.querySelector('select').value,
        comment : document.getElementById('comment').value,
    }
    console.log(movie.rating)
    movieLibrary.push(movie);
    addedScreen.style.display = "flex"
    form.reset();
})


// CREATES A TABLE FROM THE INPUT DATA
function tableCreator(){
    let table = document.querySelector('table');
    for(i=0;i<movieLibrary.length;i++){
        let row = `<tr>
            <td>${movieLibrary[i].title}</td> <td>${movieLibrary[i].rating}</td> <td>${movieLibrary[i].comment}</td>
                    </tr>`
                table.innerHTML += row
    }
}


