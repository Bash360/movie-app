import { Link } from 'react-router-dom';
import image from '../assets/movie.jpeg';

const Movie = ({ title, genre, language, id }) => {
  return (
  <div className="card m-3" style={{width:'300px'}}>
      <img alt='movie' className='card-img-top' src={image}></img>
  <div className="card-body">
    <h4 className="card-title text-uppercase">{title}</h4>
    <p className="card-text">{genre}</p>
        <p className="card-text">{language}</p>
       <Link className='btn btn-primary' to='/moviedetails' state={{ id }}>view</Link>
  
  </div>
</div>
  );
}

export default Movie;
