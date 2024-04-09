import React from 'react'
import { ComemntContainer, CommentFrom, CommentText } from './styles'

function Comment({comment, name}) {
  return (
    <ComemntContainer>
      <CommentFrom>{name}</CommentFrom>
      <CommentText>{comment}</CommentText>
    </ComemntContainer>
  )
}

export default Comment
