import React from 'react'

function Favourites(props) {
  return (
    <div className='d-flex mx-5 '>
    <>
      {props.favMovies.map((movie,index)=>
        <div className=" image-container  my-2 mx-2"  style={{width : "250px"}}>
        <img src={movie.Poster} onClick={()=>props.removeFavMovieClick(movie)}className="card-img-top" alt="..."/>
        <div className='overlay d-flex align-items-center justify-content-center'>
        <props.RemoveFavourites/>
        </div>
        </div>
        
      )}
      </>
    
    </div>
  )
}

export default Favourites;
