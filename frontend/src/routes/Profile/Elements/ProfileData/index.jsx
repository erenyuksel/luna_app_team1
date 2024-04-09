import { SectionTitle } from '../../styles'
import { ProfilAboutContainer, ProfileAbout } from './styles'

function ProfileData() {
  const data = [
    {
      id: 1,
      username: 'Laurent',
      location: 'Zürich, CH',
      lunamember: '02.03.2024',
      things_i_like: 'food',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum sit sapiente ad quam possimus deleniti, eius, ex consectetur assumenda alias blanditiis deserunt cum nostrum magni, perferendis temporibus! Voluptatibus, reprehenderit ratione? Et enim quasi qui quisquam eaque autem, eum esse!',
    },
  ]

  return (
    <ProfilAboutContainer>
      <SectionTitle>About {data[0].username}</SectionTitle>
      <ProfileAbout>
        <div>
          <h4>Location</h4>
          <p>{data[0].location}</p>
        </div>
        <div>
          <h4>Member since</h4>
          <p>{data[0].lunamember}</p>
        </div>
        <div>
          <h4>Things I love</h4>
          <p>{data[0].things_i_like}</p>
        </div>
        <div>
          <h4>Description</h4>
          <p>{data[0].description}</p>
        </div>
      </ProfileAbout>
    </ProfilAboutContainer>
  )
}
export default ProfileData

//   return (
//     <>
//       {data.map((item) => (
//         <ProfilAboutContainer key={item.id}>
//           <h3>About {item.username}</h3>
//           <h4>Location</h4>
//           <p>{item.location}</p>
//           <h4>Luna member since</h4>
//           <p>{item.lunamember}</p>
//           <h4>Things I love</h4>
//           <p>{item.things_i_like}</p>
//           <h4>Description</h4>
//           <p>{item.description}</p>
//         </ProfilAboutContainer>
//       ))}
//     </>
//   )
// }
// export default ProfileData
