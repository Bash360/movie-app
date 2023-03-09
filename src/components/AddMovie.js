import { useState } from 'react';
import { localEndpoint } from '../constants';
import axios from 'axios';


const AddMovie = () => {

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [released, setReleased] = useState('');
  const [runtime, setRuntime] = useState('');
  const [rated, setRated] = useState('');
  const [created, setCreated] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    try {
      e.preventDefault();
    
      const createMovie = async () => {
        const newMovie = await axios.post(`${localEndpoint}/movies`,
          { title, genre, description, language, released, runtime, rated }, { headers: { "Content-Type": `application/json` } });
        console.log(newMovie);
        if (newMovie.status === 201) {
          setTitle('');
          setGenre('');
          setDescription('');
          setLanguage('');
          setReleased('');
          setRuntime('');
          setRated('');
          setCreated(true);
           setError('');
        } 
      }
        await createMovie();
    } catch (error) {
      setError(error.response.data);

    }
 
  
  }
     
 
  return (
    <div>
      {error==='movie with title already exists'?   <div className="alert alert-danger" role="alert">
  movie with title already exists!
      </div> : ''}
        {created?   <div className="alert alert-success" role="alert">
  movie added successfully!!!
</div>:''}
   
     
      <form onSubmit={submit} className="was-validated">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter title"  required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
         <div className="form-group">
          <label htmlFor="runtime">Runtime:</label>
          <input type="text" className="form-control" id="runtime" value={runtime} onChange={(e) =>setRuntime(e.target.value)} placeholder="Enter runtime in minutes  "  required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
         <div className="form-group">
          <label htmlFor="released">Released:</label>
          <input type="date" className="form-control" id="released"  value={released} onChange={(e) =>setReleased(e.target.value)}  required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
  <label htmlFor="language">Select Language:</label>
          <select required className="form-control" id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
             <option value=''>None</option>
    <option  value='English'>English</option>
    <option value='French'>French</option>
    <option value='Spanish'>Spanish</option>
    <option value='Italiana'>Italiana</option>
  </select>
        </div>
        
          <div className="form-group">
  <label htmlFor="genre">Select Genre:</label>
          <select required className="form-control" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} >
             <option value=''>None</option>
    <option value='Horror '>Horror</option>
    <option  value='Action '>Action</option>
    <option value='Drama '>Drama</option>
            <option value='Adventure'>Adventure</option>
            <option value='sci fi'>sci fi</option>
              <option value='Romance'>Romance</option>
  </select> 
        </div>
        
          <div className="form-group">
  <label htmlFor="rating">Select Rating:</label>
          <select required className="form-control" id="rating" value={rated} onChange={(e) => setRated(e.target.value)}>
            <option value=''>None</option>
    <option value='R'>R</option>
    <option value='PG-13'>PG-13</option>
    <option value='TV-Y'>TV-Y</option>
            <option  value='TV-14'>TV-14</option>
            <option value='TV'>TV</option>
            <option value='TV-Y7'>TV-Y7</option>
         
  </select>
        </div>
        <div className="form-group">
  <label htmlFor="description">Description:</label>
          <textarea className="form-control" value={description} onChange={(e) =>setDescription(e.target.value)} rows="5"  id="description" required></textarea>
           <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
</div>
        
       
         <input type="submit"  className="btn btn-primary" value="submit" /> 
      </form>
    </div>
  );
}

export default AddMovie;
