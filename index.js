import dogs from "./data.js";
import Dog from "./Dog.js";


function getDog(dogs) {
    const dog = dogs.shift()
    return dog ? new Dog(dog) : {}
}

function handleLike (isLiked) {
    if (isLiked === "liked") {
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = true
    } else if (isLiked === "disliked") {
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = false
    }
    render()
    currentDog = getDog(dogs)
    setTimeout(render, 1500);
}

function render () {
    document.getElementById("image-container").innerHTML = currentDog.dogHtml()
}

let currentDog = getDog(dogs)
const likeButtons = document.querySelectorAll('[data-like]');

likeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleLike(e.currentTarget.dataset.like)
    })
});

render();