import Comment from "./Comment";
import { CommentText } from "./styles";

function ReviewComments({ reviewId }) {
  const comments = [
    {
      id: 1,
      commentedTo: 1,
      name: 'James Peterson',
      comment: 'Really appreciated your detailed review!',
    },
    {
      id: 2,
      commentedTo: 2,
      name: 'Ethan Murray',
      comment: 'The ambiance sounds amazing, can’t wait to check it out.',
    },
    {
      id: 3,
      commentedTo: 3,
      name: 'Carlos Howard',
      comment:
        'A minimalist approach is always intriguing. Thanks for sharing.',
    },
    {
      id: 4,
      commentedTo: 3,
      name: 'Sophia Johnson',
      comment: 'I totally agree with your perspective on the culinary art.',
    },
    {
      id: 5,
      commentedTo: 5,
      name: 'Lego Bob',
      comment: 'Gourmet food and Legos, what’s not to love?',
    },
    {
      id: 6,
      commentedTo: 6,
      name: 'Emma Wilson',
      comment: 'Your gem sounds like a must-visit. Adding it to my list!',
    },
    {
      id: 7,
      commentedTo: 8,
      name: 'Olivia Lee',
      comment:
        'Flavor and science, the perfect combination. Thanks for the insight!',
    },
  ]

  const filteredComments = comments.filter(
    (comment) => comment.commentedTo === reviewId,
  )

  if (filteredComments.length === 0) {
    return <CommentText>No comments</CommentText>;
}

  return (
    <div>
        {filteredComments.map((comment) => (
            <Comment key={comment.id} name={comment.name} comment={comment.comment} />
        ))}
    </div>
);
}

export default ReviewComments
