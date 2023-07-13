import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

export default function Home() {
  return (
    <>
    <div className="Heading">
        <div className="heading_in">
            <p className="heading01 a_2"><Link className="a_2" to="/">KAMAKSHI OJHA</Link> </p>
        </div>
    </div>
    <div className="Heading_2">
        <div className="heading_in_2">
            <p className="heading01_2 a_2"><Link className="a_2" to="/">FRONT-END DEVELOPER</Link> </p>
        </div>
    </div>
    <div className='middle_1'>
        <div className='container_1'>
            <div className='container_1_in' >
                <p className='intro_para'>I AM CURRENTLY LEARNING JAVA PROGRAMMING, WEB DEVELOPMENT(HTML, CSS, JAVASCRIPT and REACT) PRACTICING DSA IN JAVA, PYTHON</p>
            </div>
        </div>
        <div className='container'>
                    <div className='circle'>

                    </div>

                </div>
    </div>
    
    <div className="Heading_3">
        <div className="heading_in_3">
            <p className="heading01_3 a_2"><Link className="a_2" to="/">PROJECTS</Link> </p>
            <p className="heading01_4 a_2">Creative freedom, one project at a time. View the power of innovation in action by browsing my eye-catching projects.</p>
        </div>
    </div>

    <div className='middle_2'>
        <div className='middle_2_in'>
                  <div className="portfolio-item">
                      <img src={require("./images/unacademy.png")} alt="Project Image" />
                      <div className="overlay">
                          <h3 className='h3_in_1'>UNACADEMY CLONE WEBSITE</h3>
                          <p className='para_in_1'>Discover CloneAcademy: An immersive clone website of Unacademy, crafted with CSS and HTML for seamless online learning. </p>
                          <Link to="https://incredible-halva-8a1563.netlify.app" className="btn">see project</Link>
                      </div>
                  </div>

                  <div className="portfolio-item">
                      <img src={require("./images/digital.png")} alt="Project Image" />
                      <div className="overlay">
                          <h3 className='h3_in_1'>This_is_digital</h3>
                          <p className='para_in_1'>I created a clone of the "This is Digital" website using HTML, CSS, and JavaScript. As a beginner, I incorporated GreenSock (GSAP) for web animations, enhancing the visual appeal and interactivity of my clone project. </p>
                          <Link to="this-is-digital-clone-greensock.netlify.app" className="btn">see project</Link>
                      </div>
                  </div>
                  <div className="portfolio-item">
                      <img src={require("./images/bookcove1.png")} alt="Project Image" />
                      <div className="overlay">
                          <h3 className='h3_in_1'>BOOKCOVE</h3>
                          <p className='para_in_1'>BookCove is an online book purchase website that offers a wide selection of bestsellers and categories to cater to your reading needs. Additionally, it provides various sections to enhance your reading experience and connect with the literary community. </p>
                          <Link to="this-is-digital-clone-greensock.netlify.app" className="btn">see project</Link>
                      </div>
                  </div>
        </div>
    </div>
    <div className="Heading_3">
        <div className="heading_in_3">
            <p className="heading01_3 a_2"><Link className="a_2" to="/">SKILLS</Link> </p>
            <p className="heading01_4 a_2">Creative freedom, one project at a time. View the power of innovation in action by browsing my eye-catching projects.</p>
        </div>
    </div>
    <div className='skills'>
        <div className='skills_in'>
            <div className='box_b1'></div>
            <div className='box_b1'></div>



            <div></div>
            <div></div>

        </div>
    </div>
    </>
  )
}
