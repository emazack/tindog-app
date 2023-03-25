import dogs from "./data.js";
import Dog from "./Dog.js";


function getDog(dogs) {
    const dog = dogs.shift()
    return dog ? new Dog(dog) : undefined
}

function noDogsHtml() {
    document.getElementById('footer').remove();
    return `
    <div class="description"> 
        (っ˘̩╭╮˘̩)っ
    </div>
    <div class="description"> 
        Looks like all the good boys and girls are taken! No dogs found in your search... 
    </div>
    `
}

function handleLike (isLiked) {
    if (!isWaiting) {
        isWaiting = true
        if (isLiked === "liked") {
            currentDog.hasBeenSwiped = true
            currentDog.hasBeenLiked = true
        } else if (isLiked === "disliked") {
            currentDog.hasBeenSwiped = true
            currentDog.hasBeenLiked = false
        }
        render()
        currentDog = getDog(dogs)
        setTimeout( () => {
            render()
            isWaiting = false
        }, 1500);
    }
}

function render () {
    imageContainer.innerHTML = currentDog ? currentDog.dogHtml() : noDogsHtml()
}

const likeButtons = document.querySelectorAll('[data-like]')
const imageContainer = document.getElementById("image-container")
let currentDog = getDog(dogs)
let isWaiting = false


likeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleLike(e.currentTarget.dataset.like)
    })
});
// First render
render();