const showFizzBuzzOrNumber = (number) => {
  if (number % 15 === 0) return 'fizzbuzz'
  if (number % 5 === 0) return 'buzz'
  if (number % 3 === 0) return 'fizz'
  return number
}

const main = () => {
  const FROM_NUMBER = 1
  const TO_NUMBER = 100
  let log = ''
  for (let currentNumber = FROM_NUMBER; currentNumber <= TO_NUMBER; ++currentNumber) {
    log += `${showFizzBuzzOrNumber(currentNumber)}\n`
  }
  console.log(log)
}

main()

// TESTS
test('Múltiplos de 3 por la palabra "fizz".', () => {
  expect(showFizzBuzzOrNumber(3)).toBe('fizz')
  expect(showFizzBuzzOrNumber(6)).toBe('fizz')
  expect(showFizzBuzzOrNumber(9)).toBe('fizz')
})
test('Múltiplos de 5 por la palabra "buzz".', () => {
  expect(showFizzBuzzOrNumber(5)).toBe('buzz')
  expect(showFizzBuzzOrNumber(10)).toBe('buzz')
})
test('Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".', () => {
  expect(showFizzBuzzOrNumber(15)).toBe('fizzbuzz')
  expect(showFizzBuzzOrNumber(30)).toBe('fizzbuzz')
  expect(showFizzBuzzOrNumber(45)).toBe('fizzbuzz')
})
test('that passing 1 prints 1', () => {
  expect(showFizzBuzzOrNumber(1)).toBe(1)
})
test('that passing 100 prints "fizzbuzz"', () => {
  expect(showFizzBuzzOrNumber(100)).toBe('buzz')
})