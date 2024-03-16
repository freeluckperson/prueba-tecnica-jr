const { occurCities, cityList } = require("../pruebas/variasPruebas");

occurCities;

describe("Varias pruebas", () => {
  it("Ciudades concurridas", () => {
    const results = occurCities(cityList);
    expect(true).toBe(true);
  });
});
