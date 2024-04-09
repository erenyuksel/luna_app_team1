import React from 'react'
import { BaseArticle, DivWithLine } from '../../../../styles'
import {
  ImageWrapper,
  RestInfo,
  RestInfoAdress,
  RestPhoto,
  RestRaitingContainer,
} from './styles'

function RestaurantCard({
  name,
  imageUrl,
  address,
  averageRating,
  reviewsCount,
}) {
  return (
    <DivWithLine>
      <BaseArticle>
        <RestInfo>
          <h3>{name}</h3>
          <RestInfoAdress>{address}</RestInfoAdress>
          <RestRaitingContainer>
            <div>Rating: {averageRating}</div> 
            <div>({reviewsCount} reviews)</div>
          </RestRaitingContainer>
        </RestInfo>
        <ImageWrapper>
          <RestPhoto src={imageUrl} alt={name}></RestPhoto>
        </ImageWrapper>
      </BaseArticle>
    </DivWithLine>
  )
}

export default RestaurantCard
