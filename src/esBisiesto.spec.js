import {div100, div400, esBisiesto, div4} from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("Años divisibles entre 400 deberia considerarase como año bisiesto", () => {
    expect(div400(2000)).toEqual(true);
  });
  it("Años divisibles entre 100 pero no por 400 NO son años bisiestos", () => { 
    expect(div400(1700)).toEqual(false);
    expect(div100(1700)).toEqual(true);
  });
  it("Años divisibles entre 4 pero no por 100 son años bisiestos", () => {
    expect(div100(2008)).toEqual(false);
    expect(div4(2008)).toEqual(true);
  });
  it("Años NO divisibles entre 4 NO son años bisiestos", () => {
    expect(div4(2017)).toEqual(false);
  });
  it("2008 deberia considerar año bisiestos", () => {
    expect(esBisiesto(2008)).toEqual(true);
  });
});


