const showFizzBuzzOrNumber = (number) => {
  const multiplesTextMap = {
    3: 'fizz',
    5: 'buzz',
  }
  
}

const showFizzBuzzBetweenTwoNumbers = (fromNumber, toNumber) => {
  for (let currentNumber = fromNumber; currentNumber <= toNumber; ++currentNumber) {
    showFizzBuzzOrNumber(currentNumber)
  }
}

console.log(showFizzBuzzBetweenTwoNumbers(1, 100))