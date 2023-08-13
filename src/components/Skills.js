import React from 'react'
import './Home.css';
import { AiFillHtml5} from "react-icons/ai";
import { BiLogoCss3, BiLogoJava, BiLogoJavascript, BiLogoReact} from "react-icons/bi";
import { FaPython} from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Skills() {
  return (
    <>
    <div className="Heading_3">
        <div className="heading_in_3">
            <p className="heading01_3 a_2"><Link className="a_2" to="/">SKILLS</Link> </p>
            <p className="heading01_4 a_2">"Welcome to a World of Possibilities: Discover My Arsenal of Skills That Transform Ideas into Reality."</p>
        </div>
    </div>
    <div className='skills'>
        <div className='skills_in'>
            <div className='box_b1'><AiFillHtml5 className='icon_html'/><h1 className='h1_html'><Link className="link_html" to="https://www.w3schools.com/html/">HTML</Link></h1></div>
            <div className='box_b1'><BiLogoCss3 className='icon_html'/><h1 className='h1_html'><Link className="link_html" to="https://www.w3schools.com/css/">CSS</Link></h1></div>
            <div className='box_b1'><BiLogoJavascript className='icon_html'/><h1 className='h1_html'><Link className="link_html" to="https://www.w3schools.com/html/">JAVASCRIPT</Link></h1></div>
            <div className='box_b1'><BiLogoReact className='icon_html'/><h1 className='h1_html'><Link className="link_html" to="https://www.w3schools.com/html/">REACT</Link></h1></div>
            <div className='box_b1'><BiLogoJava className='icon_html'/><h1 className='h1_html'><Link className="link_html" to="https://www.w3schools.com/css/">JAVA</Link></h1></div>
            <div className='box_b1'><FaPython className='icon_html'/><h1 className='h1_html'><Link className="link_html" to="">PYTHON</Link></h1></div>


        </div>
    </div>
    </>
  )
}
