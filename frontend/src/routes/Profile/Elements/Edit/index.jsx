import { useState } from 'react'
import { SimpleButton } from '../../../../styles'
import { SectionTitle, UserGridContainer, UserSection } from '../../styles'
import { DeleteButton, EditProfileStyle } from './Edit.style'
import { DeleteAccountStyle } from './Edit.style'
import { fetchDeleteProfile, fetchEditProfile } from '../../../../axios/fetchEditProfile'



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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true);
      const updatedProfile = await fetchEditProfile(formData);
      setFormData(updatedProfile);
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setIsLoading(true)
      await fetchDeleteProfile()
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
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
          <textarea
            className='textarea-input'
            id="thingsILove"
            name="thingsILove"
            value={formData.thingsILove}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            className='textarea-input'
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
      </EditProfileStyle>
      <DeleteAccountStyle>
        <SimpleButton type="submit" onClick={handleSubmit}>
          {isLoading ? 'Saving...' : 'Save'}
          </SimpleButton>
        <DeleteButton type='submit' onClick={handleDeleteAccount}>{isLoading ? 'Deleting...' : 'Delete account'}</DeleteButton>
      </DeleteAccountStyle>
    </UserSection>
  )
}

export default EditProfile
