import React from 'react'
import './Header.css';
import { AiFillLinkedin} from "react-icons/ai";

import { FaGithub, FaInstagramSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className='header_out'>
        <div className='header_in'>
        <div className='name_in'>
            <p>KAMAKSHI OJHA</p>
        </div>
        <div className='icons'>
        <Link to="https://www.linkedin.com/in/kamakshiojha01/"><AiFillLinkedin className='icon_i' /></Link>
        <Link to="https://github.com/KamakshiOjha"><FaGithub className='icon_i1'/></Link>
        <Link to="https://www.instagram.com/kamakshiojha/?hl=en"><FaInstagramSquare className='icon_i1'/></Link>

        </div>
        </div>
    </div>
    </>
  )
}
