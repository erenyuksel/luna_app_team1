
import { ProfilAboutContainer, ProfileTitle, ProfileDescription } from "./styles";


const data = [
    {
      username: "Laurent",
      location: "Zürich, CH",
      lunamember: "02.03.2024",
      things_i_like: "food",
      description: "kisnyuszi"
    }
  ];

function ProfileData() {
  return (
    <ProfilAboutContainer>

      <ProfileTitle>About {data.username}</ProfileTitle>
      
      <h3>Location</h3>
      <p>{data.location}</p>

      <h3>Luna member since</h3>
      <p>{data.lunamember}</p>

      <h3>Things I love</h3>
      <p>{data.thins_i_love}</p>

      <h3>Description</h3>
      <p>{data.description}</p>
      

      {/*{data.map((item, index) => (
        <ProfileInfo key={index}>
          <InfoTitle>{item.title}</InfoTitle>
          <InfoContent>{item.content}</InfoContent>
      <h1>{item.username}</h1>
          
        </ProfileInfo>
      ))}*/}
      <ProfileDescription>
        
      </ProfileDescription>
    </ProfilAboutContainer>
  );
}
export default ProfileData
