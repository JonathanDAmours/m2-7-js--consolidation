const sortByPopularity = require("../exercise-2");

test("Exercise 2", () => {
  expect(
    sortByPopularity({
      scott: "brownies",
      fred: "tiramisu",
      lisa: "chocolate cake",
      riley: "ice-cream",
      sunny: "cheese cake",
      john: "ice-cream",
      beth: "cheese cake",
      summer: "ice-cream",
      morty: "apple pie",
      rick: "brownies",
      andrew: "cheese cake",
      jerry: "rhubard pie",
      "jean-luc": "cheese cake",
      tiffany: "waffles",
      melissa: "profiteroles",
    })
  ).toStrictEqual([
    "cheese cake",
    "ice-cream",
    "brownies",
    "profiteroles",
    "waffles",
    "rhubard pie",
    "apple pie",
    "chocolate cake",
    "tiramisu",
  ]);
  expect(
    sortByPopularity({
      alice: "pie",
      betty: "deep-fried mars bar",
      colin: "gummy bears",
      damien: "child tears",
      ellicia: "panda express",
      fertrude: "gummy bears",
      glinda: "pie",
      hethel: "not applicable",
      irsula: "rum cake",
      judas: "revenge (served cold)",
      khloe: "pie",
      lyndon: "easter eggs",
      minda: "dessert",
    })
  ).toStrictEqual([
    "pie",
    "gummy bears",
    "dessert",
    "easter eggs",
    "revenge (served cold)",
    "rum cake",
    "not applicable",
    "panda express",
    "child tears",
    "deep-fried mars bar",
  ]);
});
