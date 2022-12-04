const convert = require("./convert");

test("Convert an integer to roman numeral", () => {
  expect(convert(1)).toBe("I");
});
