import { GridContainer, SectionContainer } from '../../../styles'
import UserCard from './UserCard'

function UsersList() {
  const users = [
    {
      id: 1,
      photoUrl: 'https://randomuser.me/api/portraits/men/90.jpg',
      name: 'James Peterson',
      reviewsCount: 34,
      about:
        'A software developer with a passion for exploring new cuisines and critiquing restaurants.',
    },
    {
      id: 2,
      photoUrl: 'https://randomuser.me/api/portraits/men/84.jpg',
      name: 'Ethan Murray',
      reviewsCount: 21,
      about:
        'Front-end guru, loves to combine coding marathons with culinary adventures.',
    },
    {
      id: 3,
      photoUrl: 'https://randomuser.me/api/portraits/men/62.jpg',
      name: 'Carlos Howard',
      reviewsCount: 45,
      about:
        'Backend developer who appreciates the art of fine dining and the science of a well-crafted meal.',
    },
    {
      id: 4,
      photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Daniel Smith',
      reviewsCount: 12,
      about:
        'Full-stack developer and amateur chef, enjoys reviewing restaurants for tech meetups.',
    },
    {
      id: 5,
      photoUrl: 'https://randomuser.me/api/portraits/lego/8.jpg',
      name: 'Lego Bob',
      reviewsCount: 58,
      about:
        'Code enthusiast in the day, gourmet critic by night. Yes, legos can appreciate good food too.',
    },
    {
      id: 6,
      photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Emma Wilson',
      reviewsCount: 30,
      about:
        'Cloud engineer with a penchant for discovering hidden restaurant gems and sharing them.',
    },
    {
      id: 7,
      photoUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
      name: 'Sophia Johnson',
      reviewsCount: 27,
      about:
        'Mobile app developer who loves to explore local eateries and write detailed reviews.',
    },
    {
      id: 8,
      photoUrl: 'https://randomuser.me/api/portraits/women/64.jpg',
      name: 'Olivia Lee',
      reviewsCount: 33,
      about:
        'Data scientist that enjoys breaking down complex flavors as much as complex data sets.',
    },
    {
      id: 9,
      photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'Ava Taylor',
      reviewsCount: 18,
      about:
        'Game developer with a knack for comparing game design and the culinary arts in her reviews.',
    },
  ]

  return (
      <GridContainer>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </GridContainer>
  )
}

export default UsersList
