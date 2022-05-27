import { SmallCard } from "./SmallCard";

const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/65d16700/events"
  );
  const data = await response.json();
  console.log(data);

  data.forEach(card => {
    const smallCard = new SmallCard(card.id, card.name);
    document.body.appendChild(smallCard.element);
  });


};
console.log("hello");
loadData();



