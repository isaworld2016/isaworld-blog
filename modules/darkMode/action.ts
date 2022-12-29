import { useRecoilState } from 'recoil'

import { IsDarkModeAtom } from './atom'

export const useIsDarkModeAction = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(IsDarkModeAtom)

  const toggleIsDarkMode = () => setIsDarkMode(!isDarkMode)
  const initIsDarkMode = () => setIsDarkMode(false)

  return {
    isDarkMode,
    toggleIsDarkMode,
    initIsDarkMode,
  }
}