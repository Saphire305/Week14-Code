import React from 'react'
import Review from './Review'

function ReviewList({movie}) {
  const reviews = movie.reviews;

  function mapReviews(){
    // console.log(`Before if: ${reviews}`)
    if(reviews != undefined){
      // console.log(`After if: ${reviews}`)
      reviews.map((review, index) => {
        return(
          
          <Review review={review} key={index}/>
        )
    })}
    
  }

  return (
    <div>
      <h4>Reviews: </h4>
      {reviews.map((review, index) => {
        return(
          
          <Review review={review} key={index}/>
        )
    })}
    </div>
  )
}

export default ReviewList