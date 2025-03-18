const sumAll = function (sumStart, sumEnd) {
  let sum = 0;
  if (
    sumStart < 0 ||
    sumEnd < 0 ||
    !Number.isInteger(sumStart) ||
    !Number.isInteger(sumEnd)
  ) {
    return "ERROR";
  } else if (sumEnd > sumStart) {
    for (let i = sumStart; i <= sumEnd; i++) {
      sum = sum + i; // sum += i
    }
    return sum;
  } else {
    for (let i = sumEnd; i <= sumStart; i++) {
      sum = sum + i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
