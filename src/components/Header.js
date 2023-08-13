import React from 'react'
import './Header.css';
import { AiFillLinkedin} from "react-icons/ai";

import { FaGithub, FaInstagramSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='body_h'>
    <div className='header_out'>
        <div className='header_in'>
        <div className='name_in'>
            <p className='name_font'>KAMAKSHI OJHA</p>
        </div>
        <div className='icons'>
        <Link to="https://www.linkedin.com/in/kamakshiojha01/"><AiFillLinkedin className='icon_' /></Link>
        <Link to="https://github.com/KamakshiOjha"><FaGithub className='icon_'/></Link>
        <Link to="https://www.instagram.com/kamakshiojha/?hl=en"><FaInstagramSquare className='icon_'/></Link>

        </div>
        </div>
    </div>
    </div>
  )
}
