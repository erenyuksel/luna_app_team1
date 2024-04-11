import React from 'react';
import { ReviewReactions, ReviewLike, ReviewComment } from './styles'; 

function ReviewReactionsComponent({ countLikes }) {
  return (
    <ReviewReactions>
      <ReviewLike>
        <i className="lar la-heart"></i> Like {countLikes > 0 ? countLikes : null}
      </ReviewLike>
      <ReviewComment>Comments</ReviewComment>
    </ReviewReactions>
  );
}

export default ReviewReactionsComponent;