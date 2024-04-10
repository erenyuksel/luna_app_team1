import { Link, useLocation } from 'react-router-dom'
import { CatMenuContainer, CatMenuLi, CatMenuUl } from './styles'

function CatMenu() {
  const location = useLocation()
  const isActive = (pathname) => location.pathname.includes(pathname)

  return (
    <CatMenuContainer>
      <CatMenuUl>
        <CatMenuLi
          isActive={
            isActive('/search') &&
            !isActive('/search/reviews') &&
            !isActive('/search/users')
              ? 'active'
              : ''
          }
        >
          <Link to="/search">Restaurants</Link>
        </CatMenuLi>
        <CatMenuLi isActive={isActive('/search/reviews')}>
          <Link to="/search/reviews">Reviews</Link>
        </CatMenuLi>
        <CatMenuLi isActive={isActive('/search/users')}>
          <Link to="/search/users">Users</Link>
        </CatMenuLi>
      </CatMenuUl>
    </CatMenuContainer>
  )
}

export default CatMenu
