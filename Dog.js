

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    dogHtml() {
        const { name, avatar, age, bio } = this
        return `                
        <img class="photo" src="${avatar}" alt="dog photo">
        <img class="badge hidden" src="/images/badge-like.png" alt="like">
        <img class="badge hidden" src="/images/badge-nope.png" alt="dislike">
        <div class="text">
            <div class="title"> ${name}, ${age}</div>
            <div class="description"> ${bio} </div>
        </div>`
    }
}


export default Dog