import React, { useState } from 'react'
import Movie from './Movie'

function MovieCard({movie}, {key}) {

  return (
    <>
      <div key={key} onClick={() => {
      }}>
        <div className='movieCard'>
          <div className='movieTitle'>
            <h4>{movie.name}</h4>
          </div>
          <img className='movieImg' src={movie.img}/>
        </div>
      </div>
      <Movie movie={movie} key={key+10}/>
    </>
  )
}


export default MovieCard