function footsToKilometers(foots) {
  return (foots * 0.305) / 1000;
}

function stringToNumberArray(string) {
  return string.split("").map((char) => parseInt(char));
}

// // 1
// const firstNumber = parseInt(prompt("Enter your first number"));
// const secondNumber = parseInt(prompt("Enter your second number"));

// const biggerNumber = firstNumber > secondNumber ? firstNumber : secondNumber;

// document.write(`Your bigger number is ${biggerNumber}`);

// // 2
// const distanceKilometers = parseInt(prompt("Enter distance in kilometers"));
// const distanceFoots = parseInt(prompt("Enter distance in foots"));

// const biggerDistance =
//   distanceKilometers > footsToKilometers(distanceFoots)
//     ? distanceKilometers
//     : distanceFoots;

// const biggerDistanceUnits = distanceKilometers ? "km" : "foots";

// document.write(
//   `Your bigger distance is ${biggerDistance} ${biggerDistanceUnits}`
// );

// // 3
// const numberA = parseInt(prompt("Enter your A number"));
// const numberB = parseInt(prompt("Enter your B number"));

// const isBDividerForA = numberA % numberB === 0;
// const isADividerForB = numberB % numberA === 0;

// if (isBDividerForA && isADividerForB) {
//   document.write(`Both numbers can be divided by each other!`);
// } else if (isADividerForB) {
//   document.write(`Number B can be divided by A!`);
// } else if (isADividerForB) {
//   document.write(`Number B can be divided by A!`);
// } else {
//   document.write(`Something went wrong. Try to insert numbers`);
// }

// // 4
// const number = prompt("Enter your number");

// const array = stringToNumberArray(number);
// const lastDigit = array.at(-1);
// const isEven = parseInt(lastDigit) % 2 === 0;
// const resultString = isEven ? "even" : "odd";

// document.write(`Last digit of your number is ${resultString}`);

// // 5
// const twoDigitNumber = prompt("Enter your 2-digit number");

// const digitArray = stringToNumberArray(twoDigitNumber);
// const firstDigit = digitArray[0];
// const secondDigit = digitArray[1];

// const isFirstDigitBigger = parseInt(firstDigit) > parseInt(secondDigit);

// if (firstDigit === secondDigit) {
//   document.write(`Both numbers are equal`);
// } else if (isFirstDigitBigger) {
//   document.write(`First digit is bigger`);
// } else {
//   document.write(`Second digit is bigger`);
// }

// // 6
// const threeDigitNumber = prompt("Enter your 3-digit number");

// const threeDigitArray = stringToNumberArray(threeDigitNumber);
// const firstDigit = parseInt(threeDigitArray[0]);
// const secondDigit = parseInt(threeDigitArray[1]);
// const thirdDigit = parseInt(threeDigitArray[2]);

// const sumOfDigits = firstDigit + secondDigit + thirdDigit;
// const isSumEven = sumOfDigits % 2 === 0;
// const isSumMultipleOfFive = sumOfDigits % 5 === 0;
// const isProductMoreThanHundred = firstDigit * secondDigit * thirdDigit > 100;

// document.write(
//   `Sum of digits is even: ${isSumEven}, sum is multiple of 5: ${isSumMultipleOfFive}, product is more than 100: ${isProductMoreThanHundred}`
// );

// // 7

// const threeDigitNumber = prompt("Enter your 3-digit number");

// const threeDigitArray = stringToNumberArray(threeDigitNumber);
// const firstDigit = threeDigitArray[0];
// const secondDigit = threeDigitArray[1];
// const thirdDigit = threeDigitArray[2];

// const allDigitsSame = firstDigit === secondDigit && secondDigit === thirdDigit;
// const anyDigitsSame =
//   firstDigit === secondDigit ||
//   secondDigit === thirdDigit ||
//   firstDigit === thirdDigit;

// document.write(
//   `Are all numbers the same: ${allDigitsSame}, are there any same numbers: ${anyDigitsSame}`
// );

// 8

// const sixDigitNumber = prompt("Enter your 6-digit number");
// const sixDigitArray = stringToNumberArray(sixDigitNumber);

// const isPalindrome =
//   sixDigitArray[0] === sixDigitArray[5] &&
//   sixDigitArray[1] === sixDigitArray[4] &&
//   sixDigitArray[2] === sixDigitArray[3];

// document.write(`Is the number a palindrome: ${isPalindrome}`);

//next slide
const birthYear = prompt("Enter your birth year");
const city = prompt("Enter your city");
const sport = prompt("Enter your favorite sport");

let message = "";

if (!birthYear) {
  message += "Sorry, you didn't provide your birth year\n";
} else {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  message += `Your age is ${age}\n`;
}

if (city === "Kyiv" || city === "Washington" || city === "London") {
  message += `You live in the capital of ${city}\n`;
} else if (city) {
  message += `You live in ${city}\n`;
} else {
  message += "Sorry, you didn't provide your city\n";
}

const sports = {
  football: "Lionel Messi",
  basketball: "LeBron James",
  tennis: "Roger Federer",
};

if (sport in sports) {
  message += `Cool! Do you want to be ${sports[sport]}?\n`;
} else if (sport) {
  message += `Your favorite sport is ${sport}\n`;
} else {
  message += "Sorry, you didn't provide your favorite sport\n";
}

document.write(message.replace(/\n/g, "<br>"));
