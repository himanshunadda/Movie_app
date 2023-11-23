import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import Heading from './Components/Heading';
import SearchBox from './Components/SearchBox';
import AddToFavourites from './Components/AddToFavourites';
import Favourites from './Components/Favourites';
import RemoveFavourites from './Components/RemoveFavourites';


function App() {
  
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  const [favMovies,setFavMovies] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(items));
  };

  const handleFavMovieClick = (movie)=>{
    const newFavMoviesList = [...favMovies, movie];
    setFavMovies(newFavMoviesList);
    saveToLocalStorage(newFavMoviesList);
  }

  const handleremoveFavMovieClick = (movie) =>{
       const updatedFavList =  favMovies.filter((element)=> element.imdbID !== movie.imdbID
        );
        setFavMovies(updatedFavList);
        saveToLocalStorage(updatedFavList);
  };

  const getMovieRequests = async (searchValue) => {
      
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=138b0b0c`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      if(responseJson.Search){
        setMovies(responseJson.Search);
      }
      console.log("Hello World");

  }
  useEffect(()=>{
     getMovieRequests(searchValue);
  },[searchValue])

  useEffect(()=>{
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    setFavMovies(movieFavourites);
  },[]);
  document.body.style.backgroundColor = '#141414';
  return (
    <div className="App">
      <div className="heading d-flex justify-content-between my-5 mx-5  text-start" style={{color: "white"}}>
        <Heading heading = "Movies"/>
        <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue}/>
      </div>
    
    <div className="container-fluid movie-list">
      <div className="row my-5">
      <MovieList movies={movies} favMovieClick = {handleFavMovieClick} Favourites = {AddToFavourites}/>
      </div>
    </div>
    <div className="favourite-movies ">
     <div className="heading  d-flex justify-content-between my-5 mx-5  text-start text-white"><Heading heading = "Favourites"/></div>
     <div className="container-fluid movie-list">
     <div className="row my-5">
      <Favourites removeFavMovieClick = {handleremoveFavMovieClick}  RemoveFavourites = {RemoveFavourites} favMovies ={favMovies} />
      
      </div>
     </div>
         </div>
    </div>
  );
}

export default App;
