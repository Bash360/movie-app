import { useState, useEffect } from 'react';
import axios from 'axios';
import { localEndpoint } from '../constants';
import { useLocation } from 'react-router-dom';
import image from '../assets/movie.jpeg';


const MovieDetails = () => {
     const location= useLocation();
  const [movie, setMovie] = useState({});
  const id = location.state.id;
 ;
  useEffect(() => { 
 
 
    
    const getMovie = async () => {
      const movie = await axios.get(`${localEndpoint}/movies/${id}`);
      setMovie(movie.data);
}
    getMovie();
  }, [id]);


  return (
    <div className='container'>
      <img alt='movie' src={image}></img>
      <h2>{movie.title }</h2>
      <h4>{movie.genre }</h4>
      <h3>{movie.language }</h3>
      <h5>{movie.released}</h5>
      <h5>{movie.runtime }</h5>
      <h5>{movie.rated }</h5>
      <p>{movie.description }</p>
    </div>
  );
}

export default MovieDetails;
