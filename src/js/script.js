import { SmallCard } from "./SmallCard";
import { featEvent } from "./featClass";
import { register } from "./modal";

const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/65d16700/events"
  );
  const data = await response.json();
  console.log(data);

  let sId = 1;
  const smallCards = document.querySelector(".small-cards");
  console.log(smallCards);
  data.forEach((card) => {
    const smallCard = new SmallCard(card.id, card.name);
    document.body.appendChild(smallCard.element);
    const btnMore = smallCard.element.querySelector(".button__small");
    btnMore.addEventListener("click", () => {
      sId = card.id;
      const mainCard = document.querySelector(".card");
      mainCard.replaceChildren();

      const featCard = new featEvent(
        data[sId - 1].name,
        data[sId - 1].date,
        data[sId - 1].description,
        data[sId - 1].image_url
      );

      mainCard.appendChild(featCard.container);
    });
  });
};
// console.log("hello");
loadData();
register();
