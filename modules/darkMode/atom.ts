import { atom } from 'recoil'

import { IS_DARK_MODE_KEY } from './key'

export const IsDarkModeAtom = atom({
  key: IS_DARK_MODE_KEY,
  default: false
})