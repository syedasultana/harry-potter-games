import React from 'react';
import { Link } from 'react-router-dom'

function NavBar({ }) {
    
    return (
    <div class="topnav">
        <Link to="/" class="elements">sort</Link>
        <Link to="/characters-houses" class="elements">characters' houses</Link>
    </div>
    ); 
   
  }

export default NavBar;