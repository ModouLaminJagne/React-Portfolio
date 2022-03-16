import React from 'react'
import mee2 from '../../Assets/mee2.jpg';
import {FaAward} from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './About.css'


const About = () => {
  return (
    <section id="about">
      <h5>GEt To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={mee2} alt="img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Experience</h5>
              <FaAward className="about__icon" />
              <small>3+ years working</small>
            </article>
            <article className="about__card">
              <h5>Clients</h5>
              <FaUsers className="about__icon" />
              <small>100+ worldwide</small>
            </article>
            <article className="about__card">
              <h5>Projects</h5>
              <VscFolderLibrary className="about__icon" />
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            lorem ipsum blaa blaa blaa🤪
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default About