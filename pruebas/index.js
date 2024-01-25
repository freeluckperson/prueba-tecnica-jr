const citiesList = [
  "Barquisimeto",
  "Maturin",
  "Valera",
  "Barquisimeto",
  "Maturin",
  "Anaco",
  "Maturin",
  "Anaco",
  "Calabozo",
  "Valera",
  "Anaco",
  "Maturin",
  "Maracaibo",
  "Maracai",
  "Anaco",
  "Maturin",
  "Barquisimeto",
  "Maturin",
];
function take3(citiesList) {
  const obj = {};
  for (let cities of citiesList) {
    obj[cities] = !obj[cities] ? 1 : obj[cities] + 1;
  }

  const toArray = Object.keys(obj)
    .map((cities) => ({
      ciudad: cities,
      concurrencia: obj[cities],
    }))
    .filter((city) => city.concurrencia >= 3);

  let results = "";
  for (const topCity of toArray) {
    results += topCity.ciudad + " " + topCity.concurrencia + " ";
  }
  console.log(results);
}

take3(citiesList);
