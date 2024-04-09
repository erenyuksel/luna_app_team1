
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

      <h4>Luna member since</h4>
      <p>{data.lunamember}</p>

      <h4>Things I love</h4>
      <p>{data.thins_i_love}</p>

      <h4>Description</h4>
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
