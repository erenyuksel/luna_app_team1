import React from 'react'
import { SectionTitle, UserSection } from '../../styles'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import useApiRequest from '../../../../axios/useApiRequest'
import {
  ReviewCard,
  ReviewDate,
  ReviewDescription,
  ReviewHeader,
  ReviewTitle,
} from './styles'

function UserComments() {
  let { user_id } = useParams()
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews_data = await useApiRequest.get(
          `/review/comment/user/${user_id}/`,
        )
        setComments(reviews_data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getReviews()
  }, [])

  return (
    <UserSection>
      {comments.map((comment, index) => (
        <ReviewCard key={index}>
          <ReviewHeader>
            {/* <ReviewTitle>{review.title}</ReviewTitle> */}
            <ReviewDate>{comment.date_created}</ReviewDate>
          </ReviewHeader>
          <ReviewDescription>{comment.text_content}</ReviewDescription>
        </ReviewCard>
      ))}
    </UserSection>
  )
}

export default UserComments
