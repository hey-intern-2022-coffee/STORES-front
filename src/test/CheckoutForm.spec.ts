import { describe, expect, it, test } from 'vitest'
import {
  validatorForAddress,
  validatorForEmail,
  validatorForName,
  validatorForPhoneNumber,
  validatorForPostCode
} from '../modules/onlineShop/checkout/models'

test('validator: checkout form', () => {
  expect(validatorForPostCode('5555555')).toBe(true)
  expect(validatorForPostCode('')).toBe(false)
  expect(validatorForAddress('東京都千代田区1-1')).toBe(true)
  expect(validatorForAddress('')).toBe(false)
  expect(validatorForName('金本知憲')).toBe(true)
  expect(validatorForName('')).toBe(false)
  expect(validatorForPhoneNumber('11122223333')).toBe(true)
  expect(validatorForPhoneNumber('')).toBe(false)
  expect(validatorForEmail('hogehuga@example.com')).toBe(true)
  expect(validatorForEmail('')).toBe(false)
})
