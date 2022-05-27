export class SmallCard {
  constructor(id, name) {
    this.id = id;
    this.name = name;

    this.createCard();
  }

  createCard() {
    this.element = document.createElement("div");
    this.element.classList.add("small-cards");
    this.element.innerHTML = `<h2>${this.name}</h2>
            <button class="button button__small">More</button>
        `;
    let selectedid = null;
    const btnMore = this.element.querySelector(".button__small");
    btnMore.addEventListener("click", () => {
      selectedid = this.id;
      console.log(selectedid);
    });
  }
}
