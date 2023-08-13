import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import gsap from 'gsap';
import { AiFillHtml5, AiFillLinkedin} from "react-icons/ai";
import { BiLogoCss3, BiLogoJava, BiLogoJavascript, BiLogoReact} from "react-icons/bi";
import Contact from './Contact';
import { FaGithub, FaInstagramSquare, FaPython} from "react-icons/fa";
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';



export default function Home() {
    gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});
  return (
    <>
    
    <div className="Heading">
        <div className="heading_in">
            <p className="heading01 a_2"><Link className="a_2" to="/">KAMAKSHI OJHA</Link> </p>
        </div>
    </div>
    <div className="Heading_2">
        <div className="heading_in_2">
            <p className="heading01_2 a_2"><Link className="a_2" to="/">Front-End Developer | AI/ML enthusiast</Link> </p>
        </div>
    </div>
    <div className='middle_1'>
        <div className='container_1'>
            <div className='container_1_in' >
                <p className='intro_para'>"Fueling my boundless curiosity with passion and creativity, I'm immersing myself in the worlds of AI/ML, honing data structures and algorithms in Java, and crafting captivating web narratives through HTML, CSS, JavaScript, and React – a harmonious symphony of learning and innovation."</p>
                <Link  to="https://www.linkedin.com/in/kamakshiojha01/"><AiFillLinkedin className='icon_i' /></Link>
                <Link to="https://github.com/KamakshiOjha"><FaGithub className='icon_i1'/></Link>
                <Link to="https://www.instagram.com/kamakshiojha/?hl=en"><FaInstagramSquare className='icon_i1'/></Link>
            </div>
        </div>
        <div className='container'>
                    <div className='circle'>

                    </div>

                </div>
    </div>
    <div>{
        <Projects/>
        }</div>
   
    <div>{
        <Skills/>
        }</div>
    <div>{
        <Contact/>
        
        }</div>
    <div>{
        <Header/>
        }</div>
    {/* <div class="ball"></div> */}

    </>
  )
}
