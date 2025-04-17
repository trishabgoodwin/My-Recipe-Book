import { Routes, Route, Link } from "react-router-dom";

function Nav() {
    return (
      <footer id="navbar">
          <Link to="/">Home </Link>
          <Link to="/SignUp">Sign Up!</Link>
          <Link to="/LogIn">Log In!</Link>
          <Link to="/Favorites">Favorites</Link>
      </footer>
    );
  }
  
  export default Nav;