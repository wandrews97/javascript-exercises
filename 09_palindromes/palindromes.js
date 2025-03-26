const palindromes = function (inputWord) {
  const valid = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanString = inputWord
    .toLowerCase()
    .split("")
    .filter((character) => valid.includes(character))
    .join("");

  const reversedString = cleanString.split("").reverse().join("");
  console.log(cleanString);
  console.log(reversedString);

  return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
