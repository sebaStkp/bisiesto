import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("Años divisibles entre 400 deberia considerarase como año bisiesto", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });

});


