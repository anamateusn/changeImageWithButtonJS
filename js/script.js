// Selecting image, image description and button and changing image and description when clicking the button
const myImage = document.querySelector('img')
const myImageDescription = document.querySelector('figcaption')
const myButton = document.querySelector('button')

myButton.addEventListener("click", () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-daniel.jpg'){
        myImage.setAttribute('src', 'images/image-jeanette.jpg')
        myImageDescription.textContent = 'Image 2 - Jeanette.jpg'
    } else {
        myImage.setAttribute('src', 'images/image-daniel.jpg')
        myImageDescription.textContent = 'Image 1 - Daniel.jpg'
    }
});