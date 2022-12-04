const convert = require("./convert");

test("Convert an integer to roman numeral", () => {
  expect(convert(1)).toBe("I");
  expect(convert(12)).toBe("XII");
  expect(convert(123)).toBe("CXXIII");
  expect(convert(1234)).toBe("MCCXXXIV");
});
