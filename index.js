import dogs from "./data.js";
import Dog from "./Dog.js";

const newDog = new Dog(dogs[2])

function handleLike () {
    console.log("Like");
}

function handleDislike () {
    console.log("dislike");

}

function render () {
    document.getElementById("image-container").innerHTML = newDog.dogHtml()
}

const dislikeButton = document.getElementById("nope")
const likeButton = document.getElementById("like")


likeButton.addEventListener("click", handleLike)
dislikeButton.addEventListener("click", handleDislike)
render();