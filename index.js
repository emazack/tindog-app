import dogs from "./data.js";
import Dog from "./Dog.js";

const newDog = new Dog(dogs[2])

function render () {
    document.getElementById("image-container").innerHTML = newDog.dogHtml()
}

render();