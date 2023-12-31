import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
     <div class="nav">
        <div class="nav_bar_fixed">
            {/* <div class="nav_left"> */}
                <ul class="ul a_1">
                    <li><Link class="a_1" to="/">Home</Link></li>
                    <li><Link class="a_1" to="/projects">Projects</Link></li>
                    {/* <li><Link to="">All Books</Link></li>  */}
                    <li><Link class="a_1" to="/skills">Skills</Link></li>
                    <li><Link  class="a_1"to="/">Resume</Link></li>
                    {/* <li><Link to="">Audio Book</Link></li> */}
                    <li><Link  class="a_1"to="/">About Me</Link></li>
                </ul>
            {/* </div> */}
        </div>
        
    </div>
    
    </>
  )
}
