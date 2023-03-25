

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    noDogHtml() {
        return `
        No dogs :(
        `
    }

    badgeHtml() {
        const { hasBeenLiked, hasBeenSwiped } = this
        if (hasBeenSwiped) {
            if (hasBeenLiked) {
                return `<img class="badge" src="/images/badge-like.png" alt="like">`
            } else {
                return `<img class="badge" src="/images/badge-nope.png" alt="dislike">`
            }
        } else {
            return ``
        }
    }

    dogHtml() {
        const { name, avatar, age, bio } = this
        return `                
        <img class="photo" src="${avatar}" alt="dog photo">
        ${this.badgeHtml()}
        <div class="text">
            <div class="title"> ${name}, ${age}</div>
            <div class="description"> ${bio} </div>
        </div>
        `
    }
}


export default Dog