//Problem 1 (A)
//Create an Object with a "hello" method write hello name in the console

const obj = {
  name: "erick",
  hello: () => console.log(`Hello ${obj.name}`),
};

// Problem 1 (B)
/* How would you make the name inmutable */
Object.freeze(obj);

// Problem 2
/* Write a function that logs the 5 cities that occur the most in the array below in order from the most numbers of ocurrences to least */

const cityList = [
  "Maturin",
  "Valencia",
  "Anaco",
  "Pto la Cruz",
  "Anaco",
  "Maturin",
  "Pto la Cruz",
  "Maturin",
  "Caracas",
  "Ciudad Bolivar",
  "Valera",
  "Anaco",
  "Maracay",
  "Maturin",
  "Merida",
  "Anaco",
  "Caracas",
  "Pto Ordaz",
  "Maturin",
  "Anaco",
  "Maracaibo",
  "Anaco",
  "Pto la Cruz",
  "Maracaibo",
  "Maturin",
  "Cumana",
  "Ciudad Bolivar",
  "Maturin",
  "Trujillo",
  "Maracay",
];

function occurCities(cityList) {
  const cities = {};
  for (const city of cityList) {
    // cities[city] = (cities[city] || 0) + 1;
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  }
  const toArray = Object.keys(cities).map((city) => {
    return {
      name: city,
      times: cities[city],
    };
  });
  const order = toArray.sort((a, b) => b.times - a.times).slice(0, 5);
  let str = "";
  for (const nameTimes of order) {
    str += `${nameTimes.name} ${nameTimes.times}, `;
  }
  return str;
}

console.log(occurCities(cityList));
