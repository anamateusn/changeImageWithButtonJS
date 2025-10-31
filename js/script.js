// ---------------- START 1ST EXERCISE ----------------

// Selecting image, image description and button and changing image and description when clicking the button
const myImage = document.querySelector('img')
const myImageDescription = document.querySelector('figcaption')
const btnChangeUser = document.querySelector('.btn-change-user')

btnChangeUser.addEventListener("click", () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-daniel.jpg'){
        myImage.setAttribute('src', 'images/image-jeanette.jpg')
        myImageDescription.textContent = 'Image 2 - Jeanette.jpg'
    } else {
        myImage.setAttribute('src', 'images/image-daniel.jpg')
        myImageDescription.textContent = 'Image 1 - Daniel.jpg'
    }
});
// ---------------- END 1ST EXERCISE ----------------


// ---------------- START 2ND EXERCISE ----------------
let btnWelcomeMessage = document.querySelector('.btn-change-welcoming-message')
let myHeading = document.querySelector('h1')

// Sets a new Username
function setUserName(){
    const myName = prompt('Please enter your name');

    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Welcome ${myName}`
    }
}

// When browser is loaded (even if refreshed), the welcome message will appear with the stored value on the local storage
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome ${storedName}`
}

// when clicking the button, it calls the setUserName function
btnWelcomeMessage.addEventListener('click', () => {
    setUserName();
})
// ---------------- END 2ND EXERCISE ----------------


// ---------------- START 3RD EXERCISE ----------------

const btnUpdateContent = document.querySelector('.btn-update-btn-content')

btnUpdateContent.addEventListener('click', () => {
    const content = prompt('Enter the message you want to see on the button.')
    btnUpdateContent.textContent = `${content}`
})

// ---------------- END 3RD EXERCISE ----------------
