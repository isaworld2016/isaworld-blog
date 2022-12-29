import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { IsQuestionAtom, SearchBarInputAtom } from './atom'

export const useSearchBarInputAction = () => {
  const [searchInput, setSearchInput] = useRecoilState(SearchBarInputAtom)
  const [isQuestion, setQuestion] = useRecoilState(IsQuestionAtom)

  const changeSearchBarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const initSearchBarInput = () => setSearchInput("")

  const toggleIsQuestion = () => setQuestion(!isQuestion)

  useEffect(() => {
    if(isQuestion) {
      initSearchBarInput();
    }
  }, [isQuestion])

  return {
    searchInput,
    changeSearchBarInput,
    initSearchBarInput,
    isQuestion,
    toggleIsQuestion,
  }
}