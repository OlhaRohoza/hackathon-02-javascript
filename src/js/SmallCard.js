export class SmallCard {
    constructor(id, name) {
        this.id = id;
        this.name = name;

        this.createCard();
    }

    createCard() {
        this.element = document.createElement('div');
        this.element.classList.add('small-card');
        this.element.innerHTML = `<h2>${this.name}</h2>
            <button class="button button__small">More</button>
        `

        const btnMore = this.element.querySelector('.button__small');
        btnMore.addEventListener('click', () => {
            console.log('clicked', this.id);
        })
    }



}