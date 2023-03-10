import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">

  <Link className="navbar-brand" href="#">Movie</Link>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
  <Link  className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to='/addmovie'>Add Movie</Link>
      </li>
    
    </ul>
  </div>
</nav>
    </>
  );
}
