import React from 'react'
import Stars from './Stars'

function Review({review}) {
  return (
    <div>
      {`${review.user} ${<Stars stars={review.stars}/>}`}
      <p className='synopsis'>{review.content}</p>
    </div>
  )
}

export default Review