import React from 'react'
import { BaseArticle, DivWithLine } from '../../../../styles'
import { ImageWrapper, RestInfo, RestPhoto } from './styles'

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
          <p>{address}</p>
          <p>
            Rating: {averageRating} ({reviewsCount} reviews)
          </p>
        </RestInfo>
        <ImageWrapper>
          <RestPhoto src={imageUrl} alt={name}></RestPhoto>
        </ImageWrapper>
      </BaseArticle>
    </DivWithLine>
  )
}

export default RestaurantCard
