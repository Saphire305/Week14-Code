import React from 'react'
import ReviewList from './ReviewList'

export default function Movie({movie}, {key}) {
  return (
    <div className='movieExpanded'>

      <div className='container row'>
        <div className='movieTitle'>
          <h4>{movie.name}</h4>
        </div>
      </div>

      <div className='container row'>
        <div className='col'>
          <img className='imgExpanded' src={movie.img}/>
        </div>

        <div className='col my-auto'>
          <p className='synopsis'>{movie.synopsis}</p>
        </div>
      </div>

      <div className='container row'>
        <div className='col'>
          <ReviewList movie={movie}/>
        </div>
      </div>
    </div>
      
      
  )
}

