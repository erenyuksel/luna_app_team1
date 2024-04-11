import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../../store/slices/usersSlice'
import { GridContainer } from '../../../styles'
import UserCard from './UserCard'

function UsersList() {
  const dispatch = useDispatch()
  const { users, status, error } = useSelector((state) => state.users)

  console.log(users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (status === 'loading') return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <GridContainer>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </GridContainer>
  )
}

export default UsersList
