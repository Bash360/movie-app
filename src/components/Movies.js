import {useState,useEffect} from 'react';
import Movie from './Movie';
import { localEndpoint } from '../constants';
import axios from 'axios';


const Movies = ({ title, genre, language, id }) => {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  
    const getMovies = async () => {
      const response = await axios.get(`${localEndpoint}/movies?skip=0&limit=100`);
      setMovies(response.data);
    }
    getMovies();

},[])
  return (
    <div className='d-flex flex-wrap'>
      {
        movies.map(movie => {
          return <Movie key={movie._id} id={movie._id} title={ movie.title} genre={movie.genre} language={movie.language} />
        })
      }
    </div>
  );
}

export default Movies;
