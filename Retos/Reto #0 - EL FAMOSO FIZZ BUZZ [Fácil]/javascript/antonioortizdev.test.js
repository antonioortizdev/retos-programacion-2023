FROM_NUMBER = 1
TO_NUMBER = 100
FIZZBUZZ_MAP = {
  3: 'fizz',
  5: 'buzz',
}

const showFizzBuzzOrNumber = (multipleToTextMap, number) => {
  const result = Object.keys(multipleToTextMap)
    .reduce((text, multiple) => {
      if (number % multiple === 0) {
        return text + multipleToTextMap[multiple]
      } 
      return text
    }, '')

  return result || number
}

const main = () => {
  const numbers = Array.from({length: TO_NUMBER - FROM_NUMBER + 1}, (_, i) => i + FROM_NUMBER)
  const log = numbers.map((number) => showFizzBuzzOrNumber(FIZZBUZZ_MAP, number)).join('\n')
  console.log(log)
}

main()

// TESTS
test('Múltiplos de 3 por la palabra "fizz".', () => {
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 3)).toBe('fizz')
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 6)).toBe('fizz')
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 9)).toBe('fizz')
})
test('Múltiplos de 5 por la palabra "buzz".', () => {
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 5)).toBe('buzz')
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 10)).toBe('buzz')
})
test('Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".', () => {
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 15)).toBe('fizzbuzz')
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 30)).toBe('fizzbuzz')
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 45)).toBe('fizzbuzz')
})
test('that passing 1 prints 1', () => {
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 1)).toBe(1)
})
test('that passing 100 prints "fizzbuzz"', () => {
  expect(showFizzBuzzOrNumber(FIZZBUZZ_MAP, 100)).toBe('buzz')
})