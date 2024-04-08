import icon_search from '../../assets/icon_search.svg'
import {
  ContainerWrapperLeft,
  ContainerWrapperRight,
  FilterSetter,
  FilterWrapper,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
  SearchBarWrapper,
} from './SearchBar.style.js'
import { useDispatch, useSelector } from 'react-redux'
import { setListFilter, setSearchText } from '../../store/slices/listFilter'
import { useState } from 'react'

const SearchBar = () => {
  const dispatch = useDispatch()
  const selectedFilter = useSelector((store) => store.listFilter.filter)
  const [searchInput, setSearchInput] = useState('')

  const filters = ['Search']

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearchText(searchInput))
  }

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <ContainerWrapperLeft onSubmit={(e) => handleSubmit(e)}>
          <SearchIcon src={icon_search} />
          <SearchInput
            type="text"
            placeholder="Search.."
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </ContainerWrapperLeft>
        <ContainerWrapperRight>
          <FilterWrapper>
            {filters.map((filter) => (
              <FilterSetter
                filteractive={selectedFilter === filter ? 'true' : 'false'}
                key={filter}
                onClick={() => dispatch(setListFilter(filter))}
              >
                {filter}
              </FilterSetter>
            ))}
          </FilterWrapper>
        </ContainerWrapperRight>
      </SearchBarWrapper>
    </SearchBarContainer>
  )
}

export default SearchBar
