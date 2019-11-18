import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ }) {
    
    return (
    <div class="topnav">
        <Link to="/" class="elements link">sort</Link>
        <Link to="/characters-houses" class="elements link">characters' houses</Link>
        <Link to="/guess-who" class="elements link">Guess Who</Link>
    </div>
    ); 
   
  }

export default NavBar;