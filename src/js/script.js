import { SmallCard } from "./SmallCard";
import { register } from "./modal";

const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/65d16700/events"
  );
  const data = await response.json();
  console.log(data);

  const smallCards = document.querySelector('.small-cards');
  console.log(smallCards);
  data.forEach(card => {
    const smallCard = new SmallCard(card.id, card.name);
    smallCards.append(smallCard.element);

  });


};
// console.log("hello");
loadData();
register();



