import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/jeanmarcos-perez/">LinkedIn</Link>
          </li>
          <li>
            <Link to="https://github.com/jeanmarcosp">GitHub</Link>
          </li>
          <li>
            <a href="src/assets/Jeanmarcos_Perez_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
