import { atom } from 'recoil'

import { SEARCH_BAR_INPUT_KEY, IS_QUESTION_KEY } from './key'

export const SearchBarInputAtom = atom({
  key: SEARCH_BAR_INPUT_KEY,
  default: ""
})

export const IsQuestionAtom = atom({
  key: IS_QUESTION_KEY,
  default: false
})