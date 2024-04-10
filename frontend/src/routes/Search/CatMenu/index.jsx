import { Link } from 'react-router-dom'
import { CatMenuContainer } from './styles'

function CatMenu() {
  return (
    <CatMenuContainer>
      <Link to="/search">Restaurants</Link>
      <Link to="/search/reviews">Reviews</Link>
      <Link to="/search/users">Users</Link>
    </CatMenuContainer>
  )
}

export default CatMenu
