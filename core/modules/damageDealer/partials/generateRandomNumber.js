'use strict'

const GenerateRandomNumber = (lowerLimit, upperLimit) => {
  lowerLimit = Math.ceil(lowerLimit);
  upperLimit = Math.floor(upperLimit);
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}

export { GenerateRandomNumber };
