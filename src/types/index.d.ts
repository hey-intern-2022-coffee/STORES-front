declare module 'qrcode'
import { pathNames } from '../modules/constant'

export type pathNameUnion = typeof pathNames[keyof typeof pathNames]
export type bottomMenuElement = {
  id: number
  label: string
  pathName: pathNameUnion
}
