import { useState } from 'react'
import { InputBase, SectionContainer, SimpleButton } from '../../../styles'
import {
  AddRestaurantForm,
  FieldContainer,
  Label,
  SectionTitle,
} from './styles'

function NewRestaurant() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <SectionContainer>
      <AddRestaurantForm>
        <SectionTitle>Basic</SectionTitle>
        <FieldContainer>
          <Label htmlFor="name">Name *</Label>
          <InputBase required placeholder="" name="name" id="name" />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="category">Category *</Label>
          <InputBase
            required
            placeholder=""
            name="category"
            id="category"
          />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="country">Country *</Label>
          <InputBase
            required
            placeholder=""
            name="country"
            id="country"
          />
        </FieldContainer>

        <SectionTitle>Address</SectionTitle>
        <FieldContainer>
          <Label htmlFor="street">Street *</Label>
          <InputBase required placeholder="" name="street" id="street" />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="city">City *</Label>
          <InputBase required placeholder="" name="city" id="city" />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="zip">Zip</Label>
          <InputBase placeholder="" name="zip" id="zip" />
        </FieldContainer>

        <SectionTitle>Contact</SectionTitle>
        <FieldContainer>
          <Label htmlFor="website">Website</Label>
          <InputBase placeholder="" name="website" id="website" />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="phone">Phone *</Label>
          <InputBase required placeholder="" name="phone" id="phone" />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="email">Email</Label>
          <InputBase placeholder="" name="email" id="email" />
        </FieldContainer>

        <SectionTitle>Details</SectionTitle>
        <FieldContainer>
          <Label htmlFor="opening-hours">Opening Hours *</Label>
          <InputBase
            required
            placeholder=""
            name="opening_hours"
            id="opening-hours"
          />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="price-level">Price Level</Label>
          <InputBase
            placeholder=""
            name="price_level"
            id="price-level"
          />
        </FieldContainer>

        <FieldContainer>
          <Label htmlFor="image-upload">Image</Label>
          <InputBase
            type="file"
            id="image-upload"
            name="image"
            onChange={handleFileChange}
          />
        </FieldContainer>

        <div>
          <SimpleButton type="submit">Submit</SimpleButton>
        </div>
      </AddRestaurantForm>
    </SectionContainer>
  )
}

export default NewRestaurant
