import { getFirstName, isValidPassword } from '../src/utils/user'

test('Should return first name when given full name', () => {
  const firstName = getFirstName('Shane Streator')

  expect(firstName).toBe('Shane')
})

test('Should return first name when given first name', () => {
  const firstName = getFirstName('Mark')

  expect(firstName).toBe('Mark')
})

test('Should reject characters shorter than 8 characters', () => {
  const isValid = isValidPassword('shane1234')

  expect(isValid).toBe(true)
})

test('Should reject password that contains word password', () => {
  const isValid = isValidPassword('affaPASSWORDafl344')

  expect(isValid).toBe(false)
})

test('Should correctly validate a valid password', () => {
  const isValid = isValidPassword('helloworld')

  expect(isValid).toBe(true)
})
