import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
    <Nav/>
      <div className="container mt-5">
        <h1 className='text-center'>Movie Catalog</h1>

     
        <Routes>
          <Route path='/'  exact   element={<Movies />} />
      
        <Route path='/addmovie'   element={<AddMovie />} />
          <Route path='/moviedetails'   element={< MovieDetails />} />
          </Routes>
      </div>
    
      </Router>
  );
}

export default App;
