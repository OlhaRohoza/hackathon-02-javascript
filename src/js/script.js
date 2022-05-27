const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/65d16700/events"
  );
  const data = await response.json();
  console.log(data);
};
console.log("hello");
loadData();
