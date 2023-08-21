import {esBisiesto_div100, esBisiesto_div400} from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("Años divisibles entre 400 deberia considerarase como año bisiesto", () => {
    expect(esBisiesto_div400(2000)).toEqual(true);
  });
  it("Años divisibles entre 100 pero no por 400 NO son años bisiestos", () => {
    expect(esBisiesto_div100(1700)).toEqual(false);
  });
});


