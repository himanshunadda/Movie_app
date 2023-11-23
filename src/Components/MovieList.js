import React from 'react';


function MovieList(props) {
  
  return (
    <div className='d-flex mx-5 '>
      <>
      {props.movies.map((movie,index)=>
        <div className=" image-container  my-2 mx-2"  style={{width : "250px"}}>
        <img src={movie.Poster} className="card-img-top" onClick={()=> props.favMovieClick(movie)} alt="..."/>
        
        <div className='overlay d-flex align-items-center justify-content-center'>
        <props.Favourites/>
        </div>
        
        </div>
      )}
      </>
    </div>
  )
}

export default MovieList
