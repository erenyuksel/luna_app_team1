import { useState } from 'react'
import { SimpleButton } from '../../../../styles'
import { SectionTitle, UserGridContainer, UserSection } from '../../styles'
import { EditProfileStyle } from './Edit.style'
import { DeleteAccountStyle } from './Edit.style'



function EditProfile() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phone: '',
    thingsILove: '',
    description: '',
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // logic to save form data
    console.log(formData)
  }

  return (
    <UserSection>
      <SectionTitle>Edit Profile</SectionTitle>
      <EditProfileStyle>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="thingsILove">Things I love</label>
          <input
            type="text"
            id="thingsILove"
            name="thingsILove"
            value={formData.thingsILove}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
      </EditProfileStyle>
      <DeleteAccountStyle>
        <SimpleButton type="submit">Save</SimpleButton>
        <p>Delete account</p>
        {/* <DeleteAccount></DeleteAccount> */}
      </DeleteAccountStyle>
    </UserSection>
  )
}

export default EditProfile
