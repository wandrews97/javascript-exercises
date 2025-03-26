const findTheOldest = function (array) {
  const currentDate = new Date();
  let year = currentDate.getFullYear();

  for (let i = 0; i < array.length; i++) {
    let age = array[i].yearOfDeath - array[i].yearOfBirth;
    return age;
  }
};

if (!"yearofDeath" in array) {
  return year - array[i].yearOfBirth;
}
// for loop to cycle through each object

// Do not edit below this line
module.exports = findTheOldest;
