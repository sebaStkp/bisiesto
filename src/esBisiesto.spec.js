import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarase como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });

  it("El 5 no deberia considerarase como año bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });

});


