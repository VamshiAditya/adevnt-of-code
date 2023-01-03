import { readFileSync } from "node:fs";

const elvesCaloriesList = readFileSync("input.txt", { encoding: "utf-8" })
  .replace(/\r\n/g, " ") // remove all \r\n characters to avoid issues on Windows
  .trim()
  .split("  ");

const caloryCount = elvesCaloriesList.map((cal) =>
  cal
    .split(" ")
    .map((r) => +r)
    .reduce((total, currentValue) => total + currentValue)
);

console.log(Math.max(...caloryCount));

const sortedCalories = caloryCount.sort((a, b) => b - a);
const firstThree = sortedCalories.slice(0, 3); //sortedCalories.filter((c,i) => i <=2)

const totalCalories = firstThree.reduce(
  (total, currentValue) => total + currentValue
);

console.log(totalCalories);
