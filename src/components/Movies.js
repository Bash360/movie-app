import {useState,useEffect} from 'react';
import Movie from './Movie';
import { localEndpoint } from '../constants';
import axios from 'axios';


const Movies = () => {
  
  const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');
  const [count,setCount]=useState(0);
  
  const searchIt = async (e) => {
    if (searchType && search) {
      const endpoint = searchType === 'genre' ? `${localEndpoint}/movies/search_by_genre?genre=${search}` : `${localEndpoint}/movies/search_by_title?title=${search}`;
      const searchMovies = async () => {
        const movies = await axios.get(endpoint);
        setMovies(movies.data);
        setCount(count);

      }
      await searchMovies();
    }
}
  
  useEffect(() => {
  
    const getMovies = async () => {
      const response = await axios.get(`${localEndpoint}/movies?skip=0&limit=10`);
      setMovies(response.data.movies);
      setCount(response.data.count)
    }
    getMovies();

},[])
  return (
    <>
      <form className="form-inline m-4 d-flex justify-content-center ">
           <div className="form-group ml-2 mr-2">
  <label htmlFor="language">Search by:</label>
          <select required className="form-control" id="language" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
             <option value=''>None</option>
    <option  value='genre'>Genre</option>
    <option value='title'>Title</option>
  
  </select>
        </div>
        <div className="form-group ">
          <label htmlFor="search">Search:</label>
          <input type="search" onInput={searchIt} value={search} onChange={(e) =>setSearch(e.target.value)} className="form-control" id="search" placeholder="Enter search"  required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
      </div> 
     
        </form>
    <div className='d-flex flex-wrap'>
      { movies.length >0?
        movies.map(movie => {
          return <Movie key={movie._id} id={movie._id} title={ movie.title} genre={movie.genre} language={movie.language} />
        }):'No Movie!!!'
      }
      </div>
      </>
  );
}

export default Movies;
