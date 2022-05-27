class featEvent {
  constructor(name, date, description, image_url, regBtn) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.image_url = image_url;
    this.regBtn = regBtn;
    this.container = document.createElement("div");
    this.refreshEvent();
  }
  refreshEvent() {
    this.container.innerHTML = `<div class="card__featured">
          <img src="${this.image_url}" alt="Picture" class="card__image" />
          <h2>${this.name}</h2>
          <h3>${this.description}</h3>
          <button type="submit" class="button button__register">
            Register
          </button>`;
  }
}
