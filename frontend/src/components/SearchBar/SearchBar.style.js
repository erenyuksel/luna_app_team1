import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 4rem;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
`

export const SearchBarWrapper = styled.div`
  width: 50rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  font-size: 1.5rem;
`

export const ContainerWrapperLeft = styled.form`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: start;
  background-color: rgba(0, 0, 0, 0.05);
`

export const SearchIcon = styled.img`
  margin: 0 1rem 0 1rem;
  height: 1rem;
`

export const SearchInput = styled.input`
  height: 4rem;
  width: 40rem;
  border: none;
  background-color: white;
  font: inherit;
  :focus {
    outline: none;
  }
`

export const ContainerWrapperRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`
export const FilterWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`

export const FilterSetter = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 4rem;
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: black;
  }
`
