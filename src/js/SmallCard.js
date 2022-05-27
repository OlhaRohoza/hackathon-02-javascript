export class SmallCard {
  constructor(id, name) {
    this.id = id;
    this.name = name;

    this.createCard();
  }

<<<<<<< HEAD
    createCard() {

        this.element = document.createElement('div');
        this.element.classList.add('small-card');
        this.element.innerHTML = `<h2>${this.name}</h2>
=======
  createCard() {
    this.element = document.createElement("div");
    this.element.classList.add("small-cards");
    this.element.innerHTML = `<h2>${this.name}</h2>
>>>>>>> main
            <button class="button button__small">More</button>
        `;
    // let sId = null;
    // const btnMore = this.element.querySelector(".button__small");
    // btnMore.addEventListener("click", () => {
    //   sId = this.id;
    //   console.log(sId);
    // });
  }
}
