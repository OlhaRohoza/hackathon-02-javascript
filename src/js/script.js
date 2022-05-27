import { SmallCard } from "./SmallCard";
import { featEvent } from "./featClass";

const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/65d16700/events"
  );
  const data = await response.json();
  console.log(data);

  let id = null;

  data.forEach((card) => {
    const smallCard = new SmallCard(card.id, card.name);
    document.body.appendChild(smallCard.element);
  });

  const featCard = new featEvent(
    data[2].name,
    data[2].date,
    data[2].description,
    data[2].image_url
  );
  document.body.appendChild(featCard.container);
};
console.log("hello");
loadData();
