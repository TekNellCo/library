let movieLibrary = [];
let form = document.querySelector('form');
let listMovies = document.querySelector('.listmovies');
let addMovies = document.querySelector('.movieadd');
let welcomeScreen = document.querySelector('.welcome');
let formScreen = document.querySelector('.formbox');
let addedScreen = document.querySelector('.added');
let libraryScreen = document.querySelector('.library')

// WHEN CLICK 'ADD MOVIE' SWITCHES TO FORM SCREEN
addMovies.addEventListener('click',()=>{
    formScreen.style.cssText = "display:flex";
    welcomeScreen.style.cssText = "display:none";
    libraryScreen.style.display = "none"
})

// WHEN CLICK 'CHECK LIBRARY' SWITCHES TO LIBRARY SCREEN
document.querySelector('.checklibrary').addEventListener('click',()=>{
    welcomeScreen.style.display = "none";
    formScreen.style.display = "none";
    libraryScreen.style.display = "flex";
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
        rating : document.querySelector('option').value,
        comment : document.querySelector('.comment').value,
    }
    movieLibrary.push(movie);
    addedScreen.style.display = "flex"
    form.reset();
})

// SHOWS WHOLE LIST INSIDE ARRAY
listMovies.addEventListener('click',()=>{
    for(i=0; i< movieLibrary.length; ++i){
        console.table(movieLibrary[i])
    }
})

