import { divide } from "../src/calculator.js";

//testi 1: tarkistetaan, että tavallinen jakolasku toimii.
test("normal division", () => {
  expect(divide(10, 2)).toBe(5);
});

//testi 2: tarkistetaan, että tekstin antaminen ensimmäiseksi argumentiksi aiheuttaa virheen.
test("text is not allowed as first argument", () => {
  expect(() => divide("10", 2)).toThrow(TypeError);
});

//testi 3: tarkistetaan, että tekstin antaminen toiseksi argumentiksi aiheuttaa virheen.
test("text is not allowed as second argument", () => {
  expect(() => divide(10, "2")).toThrow(TypeError);
});

//testi 4: tarkistetaan, että NaN-arvon käyttäminen aiheuttaa virheen.
test("NaN is not allowed", () => {
  expect(() => divide(NaN, 2)).toThrow(TypeError);
});

//testi 5: tarkistetaan, että nollalla jakaminen aiheuttaa virheen.
test("division by zero is not allowed", () => {
  expect(() => divide(10, 0)).toThrow(RangeError);
});
