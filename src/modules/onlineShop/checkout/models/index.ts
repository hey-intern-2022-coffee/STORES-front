import { CheckoutInfoUnion } from '../../types/checkout'

export const validatorForName = (arg: string) => !!arg.length
export const validatorForAddress = (arg: string) => !!arg.length
export const validatorForPostCode = (arg: string) => !!arg.length
export const validatorForPhoneNumber = (arg: string) => !!arg.length
export const validatorForEmail = (arg: string) => !!arg.length

export const validators: Record<CheckoutInfoUnion, (arg: string) => boolean> = {
  zipCode: validatorForPostCode,
  address: validatorForAddress,
  name: validatorForName,
  phoneNumber: validatorForPhoneNumber,
  email: validatorForEmail
}
